var express = require('express');
var router = express.Router();
var UserModel = require("../model/user");
var CartModel=require("../model/car")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/myCart', (req, res, next) => {
//     CartModel.find({user_name: req.session.username,flag:1}, (err, docs) => {
//         if(err){
//           console.log(err);
//           return;
//         }
//         res.send(docs);
//         // res.send(JSON.stringify(result));
        
//     })
// })

router.post('/register', function(req, res, next) {
  		UserModel.find({username:req.body.username},function(err,docs){
  			var result={
  				code:1
  			}
  			if(err||docs.length>0){
  					result.code=-90;
  					result.message="用户已存在";
  					res.send(JSON.stringify(result));
  					return;
  			}
  			var vip=new UserModel();
  			vip.username=req.body.username;
  			vip.psw=req.body.psw;
  			vip.save(function(err){
  				if(err){
  					result.code=-91;
  					result.message="注册失败";
  				}
  				res.send(JSON.stringify(result))
  			})
  		})
});


router.post('/login', function(req, res, next) {
    
  	UserModel.find({username:req.body.username,psw:req.body.psw},function(err,docs){
  		var result={
  			code:1
  		}
  		if(err||docs.length==0){
  			result.code=-92;
  			result.message="用户名不存在或密码错误"

  		}
  		 req.session.username=req.body.username;
  		res.send(JSON.stringify(result))
  	})
});

router.get('/iflogin', function(req, res, next) {
      var result={
        code:1
      }
    if(!req.session || !req.session.username){
        result.code=-101;
        result.message="不是登录状态"
        res.send(JSON.stringify(result))
      }else{
        result.code=1;
        result.message=req.session.username
        res.send(JSON.stringify(result))
      }

   
});



router.post('/save', function(req, res, next) {
     CartModel.find({product_name:req.body.product_name},function(err,docs){
        var result={
          code:1
        }
        if(err||docs.length>0){
            result.code=-90;
            result.message="该商品已加入购物车";
            res.send(JSON.stringify(result));
            return;
        }
        var product=new CartModel();
        product.product_name=req.body.product_name;
        product.product_count=req.body.product_count;
        product.product_type=req.body.product_type;
        product.price=req.body.price;
        product.pic=req.body.pic;
        product.brandName=req.body.brandName;
        product.user_name=req.body.user_name;
        product.flag=1;

        product.save(function(err){
          if(err){
            result.code=-99;
            result.message="添加失败";
          }
          res.send(JSON.stringify(result))
        })
      })
});

router.post('/add', function(req, res, next){
  CartModel.find({flag:1,user_name:req.session.username},function(err,docs){
    if(err){
      console.log(err)
      return;
    }
    res.send(docs)

  })
    
})
router.post('/added', function(req, res, next){
  CartModel.find({flag:0},function(err,docs){
    if(err||docs.length==0){
      console.log(err)
    }
    res.send(docs)

  })
    
})

router.post('/del', function(req, res, next){
  CartModel.update({_id:req.body.id},{flag:0},function(err){
        var result={
          code:1
        }
        if(err){
          result.code=-95;
          result.message='删除失败';

        }
        res.send(JSON.stringify(result))

      })
    
})
router.post('/getadd', function(req, res, next){
  CartModel.update({_id:req.body.id},{flag:1},function(err){
        var result={
          code:1
        }
        if(err){
          result.code=-95;
          result.message='删除失败';

        }
        res.send(JSON.stringify(result))

      })
    
})
router.post('/deled', function(req, res, next){
  CartModel.update({_id:req.body.id},{flag:2},function(err){
        var result={
          code:1
        }
        if(err){
          result.code=-98;
          result.message='删除失败';

        }
        res.send(JSON.stringify(result))

      })
    
})
router.get('/dellogin', function(req, res, next) {
  req.session.username=null;
    var result={
          code:1
    }
    res.send(JSON.stringify(result))
});


module.exports = router;

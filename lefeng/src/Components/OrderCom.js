import React from 'react';
import '../Css/Order.css';
import {
  	Link
} from 'react-router-dom';
import FooterCom from './FooterCom.js';
import axios from 'axios'

class Order extends React.Component{
	constructor() {
    super(); 
    this.state={
    	iflogindata:'',
    	login:'',
    	register:''
    	
    	}
  	}
	componentDidMount() {
  		this.iflogin()
  	}
	iflogin(){
  	var that=this;
		axios.get('/users/iflogin')
		.then(function(res){
			if(res.data.code!=1){
				that.setState({
					usern:'',
					login:'登录',
					register:'注册',
					xie:'/'
				})

			}else{
				that.setState({
					usern:res.data.message,
					login:'',
					register:'',
					xie:''
				})

			}
		})
  }

	render() {
		return(
			<div className='order'>
				<div className='top'>
					<Link to='/home'><i className="iconfont">&#xe608;</i></Link>
					<h2>我的蜂巢</h2>
					<Link to='/home'><i className="iconfont">&#xe63a;</i></Link>
				</div>
				<div className='user'>
					<img src='https://h5rsc-ssl.vipstatic.com/lefeng/build/f39c984d8edd5e686a2a88e59a87d886.png' alt=''/>
					<p>
						<Link to='/login'>
							<span>{this.state.usern}</span>
							<span className='log'>{this.state.login}</span>
						</Link>
						<span>{this.state.xie}</span>
						<Link to='/register'>
							<span className='reg'>{this.state.register}</span>
						</Link>
					</p>
				</div>
				<div className='myOrder'>
					<div className='mainMes'>

						<span className='sMy'>我的订单</span>
						<Link to='/cart'>
							<p>
								<span className='sAll'>全部订单</span>
								<span className='sMore'>></span>
							</p>
						</Link>
					</div>
					<div className='orderInfo'>
						<div>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAABJFJREFUeAHt3NtvVEUcB/Dv7LaVWtFGIdSEVKgNiokBCRpe8MUXJQETa5sY45MP/gcaAhq5hDee8d0ntzYmvpjwwBMaS72ESwLeEIwoaLGXpSxS3OE3dLe7xe12zv5mtz2T7ySbPXvOb+bMfHZ29uyeOQdgogAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUSCZgkoXXjrYHcm/BYg8MngJMpnZUmtbaSVgzhs7MUfPewO8haq6GtgeGc7B2MERlVlwZBlPIml1m/+BX2rqpep/05LejRXayFo/gDj62uVyHFrpNVYDFa/P5t24AdmwCMuoPyXyRy7YwOQN8dgoo3JYq2D5cyG6RhTFNfXTQME+7t/1e2rkZePQhTV1WTt61DwP9PcDZ30p1svLdo4NWDR2CXMmfrSyuHDFFTTLV7alqZ4NFVpfWYBHM5iNAaB+lADGEDoDoUwShfZQCxBA6AKJPEYT2UQoQQ+gAiD5FENpHKUAMoQMg+hSh/Anus4uUxmzbCPSuuYV8YQwTUxe0rSD0YoK9axz0Ktm8Ux7ji4X5rufQ4SuljIunR1/PAyflE37lH+Dmv0qW+7IXbp+yHw5PyZ9o3yGLY+b9oRP3RSz5Mg7oH/4APv0auPPfkg1uMOAxyecefSiaAXtweL/5YPBIkrLSP3S43vv5N81EXuhprUHRHrKHR3Ys3FD/Vfqhf7oafqiob+a2ZuTT8+bSYZWI9ENfm6y0prVLW5PsLv3Qs00bl+s7GnTWD1i4Nf3QC9tT+1WXHA73dAPLeLotjqOO2rxza3dtA55/cm55Rr44R+To5Ne/6uVoyra4e7SbAlFGdnxdDwCvy8FCe+v7V9zQfev+3zsfFOzHZRhpcYobOl+ozZm/VXt9E9fGDT36c2m2UZXgmcvAxI2qFa1ZbP1g1Zp2ze1l+ibw0fG5qWqr5WjsknwJfnuxlTWY31fc0K6Z0zJ8HD893+DlWoh76GimqjWlSYd+O0k/dHeXX0uDR9lLSYpMP/QTciZkOZLBySS7TT/0evmb+NneJG0OEXsOm3EsSUHph3at3bMdeKFfLp9pwSR4Y75AG142Q0Nulrp3iuOooy0LvPIc8OIzwJ8TwEzgHySjP76Lq/mL6DDfm70DDR0fxgFd7lfuvww3Uz902rJhxBjTEHC5KnEMHeXWrODnuHp0SOgT54DzV2YxNXNZTly5i4VUPZrQi7057hfl+HS7bO6XK81WLxbmu55Dh6+UMo7QSkDf7IT2lVLGEVoJ6Jud0L5SyjhCKwF9sxPaV0oZR2gloG92QvtKKeO00DLru5TGZSJ4TMlNbC8ng0o7y+sSPut+ghuMyu06ZM6VpE++dNd8yIRW7XuXsAXNCHc3Rvl7ulxyEZkO1U1RXEE66FXZIygU35BLDrrhZnX+cq1cuXieDY6afa+qG6bqfvfuoNWeeUnuDnY2HtlSSwxm5ZTNYfT07QvRtmDnfuyh3EYUM5vkL0U53ZHyZIsTWNd52ryzW2bgMFGAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAF0iNwFyFQ0lT0RXuBAAAAAElFTkSuQmCC' alt=''/>
							<p className='mes'>待支付</p>
						</div>
						<div>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAABL1JREFUeAHtnNtrFUccx79zzkmi9RIiGLGx3mLrrVZaowFDW6FIQWofKslLH3xU7EOhD+KDCl4oFIrtQ+lD/4RjFSqCCj60kooPVYRaI1W0tEjFUuM9OcZzxt8mnj0b2YyZ2XHPGr4Dy878fvO7zGdnh5OdzQIsJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJJBJAipLWem9Py5HRW+H0lMS5aWhkVO/qt3d3yby49E4W6D3FHsFUZe38RVUl9rZfdqbvwSOcglsX4CpavXqVHv2lyC5QgLbYVO9/9A86PJqmYlzoZXlHaIq2L3pVJjDl4ebMFQOm4krb8xu11qvCv18d2wRbj2YE7afW1GDyFX60Dr5jNqy8eFzuxs6OIPWxWIj+tQBlMtbBXJ+JIY2hIpVPRZpLYfprwD/34vt6CRcOf/rUXZKnYbWa0fJjA0ZT3Ddbwxc1/uK29SuniPG7gal+9JxUX0jSX9Wg2yIMpYqp55eoLE6eJbPau508qjRJsAP6v3FNU72YlSbTRYe9Fc/TcNAaWtoMn8mMLsFsF45YLnUhBHdKovb8mi2+EHzSG64P/8F7g6vGo14jM8l8KcuwZ1AY6i0UoKN3A0B4M3rXGKnb7NiLhAcNuWdfuCHkyMWCm/bmEb7ui0d5XxD6GRSrRrKJlIlOj4N58G6gZ5IIFMaC0ETdEoEUgrDGU3QKRFIKQxnNEGnRCClMJzRBJ0SgZTCuP0JHk2u/wHwy8WoxL3+sORuG2d54R958nY7TjN+mbZ+IhnrOzno2wL65z9indddeOHv5Ck0y6NbD4VrtAeI43GRfEYHV9z2idhYmZ29Cgw8GktrL18mmykzptrbPWvRe+lZiXU7OehgIB+ssA4ca9B3fXygc3IjViqxLkYJ35oHLH51lMi60X8fyARo68wdDYJNhY6FQNcSYEoTcPkGcPx89aG8o9P0zJLP6DRybZFdkY9XA8FOTrUsbQPaZwEnBPa5a1VpZs/ZBj08i9uB9bI0NcSk2iiyjR3A8teAI78BdxJtVL/Qi5StXx2TG2uDbZG1f/P7wAbZPYqDXOsJLJSZve1DYJUsLdES9ReV16EeM03qkEU1ZOcioDQELJFl4d2lAthikzyY3R/JKxzB7A7+gGqSdtuMque6n7MF+k3ZOA2OJGVBKxAcGSvZWjoyBsdnOgTtk6bBF0Eb4PhUEbRPmgZfBG2A41NF0D5pGnwRtAGOTxVB+6Rp8EXQBjg+VQTtk6bBF0Eb4PhUEbRPmgZfBG2A41NF0D5pGnwRtAGOTxVB+6Rp8EXQBjg+VQTtk6bBF0Eb4PhUEbRPmgZfBG2A41NF0D5pGny5gS6U5R+kn5bgsw/3B6utiXf+67/omG5FGzZ1t/c6Xsfv6EO/fEKiBXcHgANHR148tP26gU2m9eg7JF83GJQXesKiToVVy4rzZxz0voOfoKwPWcZ7mbtfwSR0qB09d1wG4bZ0SCS1q/uwfInrPan2yjGB1w51U0b7Paaj0xVycGGcZ3RgXC3y2Z88LudbUSh48Vf1W/dzQ2lQfdHjvC7XPX8mQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQALZIfAEk8HFTsb/n8gAAAAASUVORK5CYII=' alt=''/>
							<p className='mes'>待收货</p>
						</div>
						<div>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABaCAYAAAA1tjFFAAAAAXNSR0IArs4c6QAABOlJREFUeAHtnE1oFVcUx/83HyZGX7RGW1O/Uo2RiIqViNTQIgW/FqKLqItu7MriUhAD2opPEWw3pZu6apeCpq0iqIsuRLSCqCgiBlp52ShRilSt5sv3rufmOfOez8TJezlzZmLOgcnM3Dlzzzm/ue/MzM29A6goASWgBJSAElACSkAJKAEloASUgBJQAkpACSiBmBIwcfDLHj2dQG/fF4BZRv5UMfpkqc4ulOEv823b34z1llxV5MDtoZPrkLa/UgQflxxF8IkZUvkR9fPbzc6WgWD18DTKwqs6uGZ75PcmZOwp0gwTtnPExbkb3al9bidKiRQ4+tMHYTFRDIDFPvvT2Voxe0MYiha4sauG8CnEIluBJ89XhGggsOqKQI0iFWzyt1bY9BpYM/2tU2sqH2LP5k6/PNkxC9TERWXJ3E3W2qmDNs9cS+BG15sXoMykYHAurJssG3AKwiDZ8TMy6Z1ZgEOAzNi7dKzZB1xOP7CXaX9XZKNx5m6y4xYgUX2FLvhng9venwz5bcz3Ntmxy3zX9otXzLXmSynJjh2w9jXsYdyrS+RgD6MiWlxb8yZsz7i1VbCZY/bIicVeEdearYUT7G98p5pnA/PeziiYXO2rxGJjDvm4YXnOFfejvNUFdP/nMl0l+s3XVLInpzD6LT7gBkv9dLy5hV5fKoO9mzgBeNYTrMep4Wx6MoMeWNySL9MmAccvZ0uMXZp/iGObL6XkP96NBLbzvv4DjhiKqyPIZnXeBcmPqTgrw2rzAR/WxDsOtC5yN6h3KDAfWvEJUFPFXGlx1UULfC7l0I2UQyvKi/O6FO3GmcD6vHxdSh0M5/Dl8FKdWdkIzP8I6HwAPKSbVdp1ezDKVMrJ7gbeFHbvwch8jh6487MuAbj0Mg4k2pQyDgAXhqjAC4mEvK/AQwZcWL0CLyQS8r4CDxlwYfVyTyn/dAN/XAV6+wt9iGbfvQ1voi6IZuohFhQ54DdSwIs+wdACTPXQhb9+Txy4XEpZ3gBUj6BDK4AT2+EJ1NY+pVd9YZFr4U31wN4t1O05xD8mhIMeNCfZh5MXnxxwz2hEgXrmo17LpZSoI42JfQUufCEUuAIXJiBsTlu4AhcmIGxOW7gCFyYgbE7uxefRE+D8TcD1YcRBXOfVWhr/P2uaqDdywC/SsMLUI9HgAo1duAN89XmgGqeCXA5vmMHpN09dDR/y1FNELXItvGUBDVWgDqyeSGd85NBUUehuCIWwyAF3gdXW0CIcYczMyaWUmAUelTsKXJi8AlfgwgSEzWkLV+DCBITNaQtX4MIEhM3Jvfj83wtcojmxceq8cmPSp9DLmKDIAf/zdnZKnmBwgabcDLrtqwPVOBXkcnit3DcMRgwoAp/kWviXSwA3iSpOKWUhTbQSFjngLjA3k2yci1xKGeegvfAVuEdCaK3AhUB7ZhS4R0JorcCFQHtmFLhHQmjNCfyp7/Nzeo0fq+K6IHwxuZj8stFt8D2HG3OLppNkB3m4D7wID7AZHYa8s91HFnJCI5d4hQ84zA80gScL/P5jwC1jWYx5hnJ7jDsEtpRiDrSdQZnZS1+cecntZAT1/UtxbDX7t93nts3+OR57+NQcZAZaqbVTx8kYFIsUfW74kmnfRoMhVZSAElACSkAJKAEloASUgBJQAkpACSgBJaAElIASUAJK4D0h8Aokjs7xz6C5JAAAAABJRU5ErkJggg==' alt=''/>
							<p className='mes'>待评价</p>
						</div>
					</div>
					<div className='address same heig'>
						<p className='area'>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAABCFBMVEUAAAC4uLjAwMC4uLi/v7+4uLi5ubm6urq4uLi4uLi6urq3t7e4uLi4uLi5ubm5ubnOzs64uLi4uLjGxsb///+4uLi4uLi4uLi4uLi8vLy4uLi4uLi4uLi4uLi4uLi5ubm4uLi4uLi4uLi7u7u5ubnExMS4uLi4uLi4uLi5ubm4uLi5ubm4uLi4uLi/v7//2+e3t7f////92uW6ubm/u7zPw8fcyc/r0drkzdXFvsD62OPXx8zmztbNwsXJwMPCvL68urv01uDfy9H41+Lw093TxcnHx8e/v7/6+vry1N7v09zV1dX19fXl5eXY2Njo0Njv7+/i4uLhzNPExMTp6enb29vd3d3Q0NA2k9YTAAAAL3RSTlMA/A/1FO9IIePPMfm5s1Q5B8lgBAKrc2hNHejbwZSMhD/foiwmC5x9eG6mgNVZGJ0xCsEAAAQwSURBVFjD7JZrU9pAFIYFRFtuHa2CtYqXWqeDM90n2QQIdyhXUYSi7f//J71M2G3S1iz6sX0+Z555z56zZ7Pxn3+V16eFq8tsplTM5zaf64rnzpNodj5cPEP2/ipBmEzqqVUWDgFoD8rVSqXRq7ckQKy0/RTbm5cAXnkiFLWGK4H07vq2V4dAuyFCdF2A4t6att00yJ4tfqfvAdn4WrYDwLkWf8R2f/jWyfcuCd4n8TfKQNHctnkG7ZoQj/rM+7EPna54DBfS26ZNBSrB4+r2g6XbHpwb6o5gIDTXdQdANqu2UPQhljLtqtRZJk0UTjVQbsZIl4G6WNGQAJ3lcASAqwJ2JZicXjwNKtxnQE7n1nfGixHg2ToeeQNdDjzhU5GwvLFWzABX+FThyEBXgvKqfw4Mx5ZmATRW+0ASM9inL2Cip3Xk23Q+Z1VuCw4ibXsxED4O3FoBxiMdrw6FSN1HcFYDByMrxBdwdfaTSF0KPP39NKy7AUf34jJStwVNXc3CCiPB9tsO2UjdKbR8XRPurTAjNZUN2I/UXUDb1w10JzQdla4Hx9HvVwJq6uwewrYxSH0tChuR7MCd+MkdDMO6W30WDhjslBO1nmwJ85BuCD21opIGD0YKpK3KGYbC6eVV9+ckirdQ1UtoFpi6jrrQdge2THT5Xwc5MMlzB9q2GuIzo8cxnoCK7h7Lez/aFPST5Kl1F8Wx7p49AHC+zh6mQwCnL9QMJ+KGPzvf2i+T5rSBIAq3EBKSQCv7vhsU46pXkIMLB3C5Kgdf8/9/TBikSleUWJoR5Zu/o5bWm57u6ac6eJK9vYI5/Rm+F+5/CXkiRSlHMciSUcYu4xdgVKRdgCGqi3n/8Xa1eHu+cHwFtiRNDBzybMBPYBgoGM8d70aGtPtgkgKOBl4uw0tdkBIb4PD+QbgTYFVIiVbIIzrDM6DNSJGVnnoLhht5Qsp0ATz/J3EXYBeQOm3g8I893p8BfUklWNvA96xBfgE0j0rRH/B28DZgQyXx68B5n6nfb1SaCMBJxGN/ZgdUnm3iODnasEr3MGF9IprVJ7o73vmY+tp5jUpT8c2mmLu3M33/AmAotM02T0vV/NWixVBLayIGcLgACEXeqhoAzR578odxJ0RCmwSmAcFifbupI6HeeApkgo3FC4mEaqp1BBgRJThTVwgXDOImFdAb3EI1On5AjDet/pVWc2pDYNcKomnioUgiMf2NJQTmVk5gAfMeyRF09AID6gOWQt37GvRWvtGeKxTVEkDe42sDsB2SxDOK/kJNDYBrNiWaJrLBTZz3RcB4iPJKoOXEbh1XdsvCMl4gwXIn3VltndG0MuPxyMANfduUadhHC4w+D0cNt+02RqFt1cGEXdm2bfnbho4cBu3uipRoLr3HdpjoYfTh6KHTu+fYWzn+zPR65sx3rpn84tP4DSI/feWecFRVAAAAAElFTkSuQmCC' alt=''/>
							<span className='sMy'>我的订单</span>
						</p>
						<p>
							<span className='sAll'>辽宁</span>
							<span className='sMore'>></span>
						</p>
					</div>
					<div className='better wid same'>
						<p className='area'>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAulBMVEUAAAC4uLjPz8+4uLi4uLi5ubm6urq7u7u4uLi4uLi4uLi4uLi4uLi4uLi+vr63t7e4uLi4uLi4uLi5ubm6urq5ubnExMS4uLi4uLi6urrBwcG3t7e4uLi3t7e4uLi5ubm4uLj/2+e3t7f92uW+urvz1d+6uLnbyc/72eT21uHYyM3AvL3LwcTHv8HDvb/41+Lw1N3SxMnmztbeytHNwsbJwMPoz9fPw8fGvsHr0dnVxsrizNPt0tu8ubog78olAAAAIXRSTlMA+QXxrYQoHuWkloxcUxbs3cR1aEo9D9VCMQv1zL61Nn2c3tIGAAACyElEQVRYw+3X6VLiQBSGYVYRZZEdwWXyBkLYV5HN+7+t6S4lJp3FVOOPqRq+X1hYD0n3OemTxDXX/Ee5uX95eMne/A6WyiaRSVZTv6B1njnn5XKvWQEm++F+AmRSl2pPwNqQGVzulRxNZHSpV2oBRyF9e3f6Wu4BWAnH7T1eollbw50N1HSL99an2T0oXqDtDU/e4aGjpT2WhXbyan2goaW9poW2MLw5QkZLawjtQ9VkId/raO0u9PqGmhVUPp8K7UIuvlZP+jWZuQVVee0tIBtXKwptPFQop21b+QoQvz8KoZphTvlMbxrXKwCzuRvZrkzn89pC5GAbS2LtS03VzAlsXH/2Vwv7s6RjrF8V2NmKhhV049Ir/qxNPdobOFeneBsol6K0LPBm+rSpGbwxM/gTod0DE0VTfkAt6+dw7Q7YeLTpt2YPBrbKLaAVqb2HacMxTFRuG351qTywdGu20IThaPTUtdtBNkTLSM1waztFY6BwS0jngjmpHfzaxqUdAuquEN4LI482c2k95Ndq1YV3ba6r/vsEZ2P6gdokomerMDU8sX7Q3qI6Ni/Pek8O540Rmn8X7ClRDZGRh703p5OiqdtUjeyug6EkXJvPiB4G2sAiQFt8ILL2a6JCopIJPmvGinYuwqTQolIqB3lmmFb8cYY4e/vBcrA3nZPLOvoXM1mPMZOkpdefIrPrn9fJ9mvdduyphK9Y0vNnIbR0I/6UA+lsISs+7MwgzRLfv8ae6CokMyXZwmXY+rWT0MqPifhpppwjaOTT9kK71XqTqsFS1bbamnwkDAK0h5yWVvf33AptrXPru9cj0ColtNKAsbdO1sCT0HS53tCnNTUk52bHc+/MWRGabtpJ94w3Ap47iQtSd3kH5TVb25PrZy41X2L907s1Wg1mQF5oF3tdvpLXA/zPF5nbYuKXUr/P39WaiWuuueYfyV9I7fq+0ZVMHAAAAABJRU5ErkJggg==' alt=''/>
							<span className='sMy'>我的优惠券</span>
						</p>
						<p>
							<span className='sMore'>></span>
						</p>
					</div>
					<div className='follow heig same'>
						<p className='area'>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAwFBMVEUAAAC4uLi4uLi9vb26urrExMS4uLjZ2dm4uLi4uLi4uLjS0tK4uLi3t7e4uLi5ubm5ubm6urq4uLi4uLi4uLi4uLi4uLi8vLzBwcG3t7e5ubm4uLi5ubm5ubm4uLi5ubm5ubm7u7u3t7e4uLi6urq4uLj/2+e3t7e6uLn41+L92uXfy9LFvsDWx8zIwML62eTBvL2/u7zu0tvr0dr01uDmztbjzdToz9fMwsW9urvw093cyc/x1N3RxMi+urvOwsbeQixRAAAAJnRSTlMA/PYXPQzwA+nXzga4oseCUyXjwJyPZh0R3oh6WzGXckYrq21Kpgqv0XwAAAMiSURBVFjD7ZfbdqJAEEURFUWNSdREczG3ybARAUG8Rk3+/69GWAkBWkBN1jy5H3vJsbq6TlW3dOLEiSMoX3brvyRV/NOQgUKrc1H5udiVTMjN/Q8FS1V8lo6r49Po/UTtvgDYs4G2Zb1a+gF2j1d73aq9e9oXxgpQy0fnTQFzoEXwdHg5Vu4MnJEWYw6UjlO7BMZagg20j5O7g4WWZKBTOPg0KsV+v1uDuSawgD/H2MBnJMoNQW0023/PS5W97Hmu8MVSE5nzRfUuv2aeb/B5Nx0dHE1kzDfVixy1J3+bZmADYzKzdsnp9sp7G08tFyicZ8emgD7VshiF+Zw6QJZeXQV3ou3LaAFk7PcRljlqQtVUy6nBKTDUDsFwM7b7Co6h7WAyHQ7nI2132bTS5B7A2hHBzCHAftNE3tNbQhs80aQ2IZYYuwWPKXIqTAQ1F1Bebq/aBWCzy3NXKXItGGgJ/NiugsO7bLPjpKZwliJXg2R6ZlB4lT7pgD4Qo3tI677iv5vRvZRVWIm5u0uRuwYzkTmQI2V6D3ZCzkk/2Z4MccO+QTPaCeE9ruaBknrd6CRnjQeNqG1Aj9ekCbfZkzCqtwY1PozcmNoGlKKUykUBzEnk9zpcxobRR1RtAVxLUrYem2/BD2hWwuDiuR2bBFWSq4e9/t4tD5+57tYiLWI9NNnSyZs//aYvZ0TqCvVp+1HvUQZ9HC77yNdSLrewjNT+R/CdehNEPQvTZgNnxXy1npKY1iudT1wvUuBLv5Xkcy9aw3LYYg+NhJtbYuLyjeszmkwMoa8L9spoK/lYwpjIaXoCYqfL5SZLTvBzLs19NzuHl72OYpUrFU6JXC78QhEY7LwB7GGKsgxzIRJ7162WorSXydxB8hIm1uImOIl8ytXka2Kt++YXR1x/v3eYDG7k66HOlmVMb6rD2SEvsYVnBPaamUC1BayMbxcDzfph70TdXNguPrXnvr+ytN4G2z/wLN1fKx7wFugUCJHvKtuVBgG6TsDf8mEvqPMaAe3r3udQVwmpPUkH03t+KnUr0Rx0mtUCSu22JP0W9bp04sSJE/+Lf+ztLawXvvGIAAAAAElFTkSuQmCC' alt=''/>
							<span className='sMy'>我的花粉</span>
						</p>
						<p>
							<span className='sMore'>></span>
						</p>
					</div>
					<div className='receive wid same'>
						<p className='area'>
							<img src='data:image/png;base64,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' alt=''/>
							<span className='sMy'>我的收藏</span>
						</p>
						<p>
							<span className='sMore'>></span>
						</p>
					</div>
					<div className='see heig same'>
						<p className='area'>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAxlBMVEUAAAC4uLi7u7u+vr64uLi4uLi4uLi5ubnQ0NDd3d23t7e4uLi4uLi4uLi4uLi4uLi4uLi4uLi5ubm7u7u7u7vAwMC4uLi4uLi5ubm5ubm4uLi4uLi5ubm4uLi5ubm6urq7u7u4uLi3t7e3t7fu7u63t7f///+4uLjs7Oy+vr7n5+fc3NzDw8O7u7vX19fh4eHHx8fj4+PPz8/Ly8vNzc3FxcXAwMDp6ene3t7l5eXR0dH8/PzZ2dnT09PJycnx8fHw8PDz8/OV9oU+AAAAJHRSTlMAQRgS9uGZbwYD29S7d+7lwYRdLCMNyJNiU6ulfEo5Nh/NtIcH5yHeAAAC7klEQVRYw+2XaVPiQBCGwy2XciiKt26ayQEkgRAOBd3//6f2DbpiTzIJYNVWbVWeT1acPOnpbntGLSMjIyPj/+Cx077u1Uu1p0a5kjv5kaqaK5foO8VWJX+s7KJ5RjE83x8jK7RPKUS4a9tZWpa3GPsmbWnlDpWdtIsETH9h6N9YjmeCQO/hIFu3TmBo61GsyVbYru5fgWYxlC30eOarEX791N03ay2sHrHIZKEbVrmzly1fD0Oz9ETGAkWq7NO2NSxc62l4AT7aTLWdl2Cz9XSMYViQtLzV4myG5XjzyMMZfJXkmjZgW0ivffaa6XsxvsSOrmDBq86wTfpiOuc+5K90kZA49NuG21YEROAORwRMHqCHsMtq3Q1eMNgLk9DhvAzA9ueRxfsFj5Tt3MXHHL5TLJ9A9oGBCAP+OZT3WqW7JJrx5JiwDXa8wzdmKxx8L6+YIphIC3kvAWLbgbdHUnjKZrlHmnR5rTdgBDFfbMTrmugEvlfU9IXr8PaEzyuiU2XqeGI85HLAmRO5OgPpLKjahLfwAuFKuncMG65Dtc5jdWVZ5yAUSWcgYEmnKu0vopWcF1PSOZH8ChLxp28fG4nk5Y3rpjGNV1eMYbSkxdZOWReD30Je4qv/anFGrOXSivl3nSsX1hipZ9RVpOeneKLvbBPol/LAqSnPagx2nx9ZJgT2Zyu/zUjO3BLBXWkqOlhv8/Xwkbl25kvbFeF4iZwXtYTzuxWZaNaQdoixLk9DkdOSx/HQ0Bmv5l/Z1NIj0/BSS6IvZB/w1r67WdnyYxtreykXyFviPo5sK6VeHpuJVwp+TNQetVQqYnfhUWJsYKvz2JTdDPzEDTtheXoFbS9ypbDZ1AFaPoHyxd6X7BsCga2Qhf18dqcdQP90Kxxbcs6cqSBwXTjw4n4LIQhWjvEV1+tmRCGN3E/+rTBn7nTzcUsB4vlBO4qTqwbJnF12tePJd8r14peqcXtf1X5K9Tx31+nfPRS0jIyMjH/HH39qHtQmpbGKAAAAAElFTkSuQmCC' alt=''/>
							<span className='sMy'>浏览记录</span>
						</p>
						<p>
							<span className='sMore'>></span>
						</p>
					</div>
					<div className='see wid same'>
						<p className='area'>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAh1BMVEUAAAC4uLi5ubm7u7u4uLi4uLi4uLi6urrBwcG4uLi4uLi6urq8vLzJycm4uLi4uLi4uLi4uLi4uLi6urr///+3t7e4uLi4uLju7u63t7fp6enDw8PS0tLn5+fr6+u+vr7BwcHk5OS7u7u5ubnd3d3Ly8vExMTh4eHY2NjQ0NDNzc3Hx8fU1NRHSVb3AAAAGHRSTlMA6X84+7dnLwvPwz8cBPPl23ZvSQGyqZ2KffjRAAABS0lEQVRYw+3UzXKCMBSG4VgR8P+ntvUDQwIUFOn9X18HwynjIpSMLlrnPLuzyDs5KAjGGGN/T/AxHblYT3ZLe23nwdl0YauNqeZkYsu9AWUauZBnAIEltwbkwVEB+JYcgIOrI/DCOc5x7slyX6Uq0u5MUsW6kN0cXbS+RINzGo3Pn5pqxvxEs8yaOZMDc0dcZUl7/GJmRbnazOXAXAmDrqNg0LpoJcNyGrjZNoORtrs75ipc5bRs0S5Py8Zm1oOWpUePMx2X+e1Pk9Jlf83RH0Ehbk5Tr8jy8tTNaZ1ndfosbwXnOMe5/5BbAYlrrgK2ltwMODrWpALmlpwPQMWEPp9RHVvpHNiEltx+AtJ93KVGL28ubJbb0U3PbNMbmwWiz2JszKcAquSkAM8f2wShGCic0QVexSOE5kmuqHavvb/xRu8L8ThLwRi7zzd08ezr8wVYNQAAAABJRU5ErkJggg==' alt=''/>
							<span className='sMy'>意见反馈</span>
						</p>
						<p>
							<span className='sMore'>></span>
						</p>
					</div>
					<div className='see wid same'>
						<p className='area'>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAtFBMVEUAAADAwMC4uLi5ubnS0tLs7Oy4uLi4uLi5ubm4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5ubm7u7u9vb3///+4uLi3t7e4uLi4uLi4uLi5ubm4uLi4uLjExMS4uLi3t7e4uLi6urq4uLi7u7u4uLi4uLi4uLi4uLi4uLi4uLi8vLy/v7+3t7fu7u66urrIyMjp6enR0dHn5+fa2trT09PBwcG+vr7i4uLe3t7X19fr6+vOzs5E6GBhAAAALHRSTlMAD/xLBwPjnjLwa+rHlPPTo0IqFgH34MGnjYF7ZArNvK5bUjfamopxtl4iGG1mfqQAAAJwSURBVFjD7dbZVuIwAIDhdKMLZRFl3xfFmflbioiivv97TYnI2EHaYOdqTr9bzvmbpE2CKBQKhcIHbT71+n1vOtfyt5xejaNaz8nTuu6W+Eupe/3N2LBXZa+5aHe63U570WSv2h9+pzaQIyvbhikOTMMuyxEOLo6ZdWIjwxIJljEiVjcvXDUfaE1vxImbaQvwL1rBxn6iFfPMwCv7CTcuGFtc0z1xlqfHPeXxmT64VyLFlQu+6vrZoMe11J4Otkgzuy9z5IkMHn+0Js7JC6vzya3IdMsn+jLlabRMhQVuJXrz5OBceIuCWBTCD6HgB4RRsPewgvvkhwZPgbSGmqWSs2qwDt57UE78ZsAqkJ7AEEoMOQQpBO3L3DO4llrOKsNzRm4NHaH+fa4zcluYqeZmsE3PRaAPlc9XHaLU3DOUhDK5eGm5DbTVcyPYpOZeoK6e68BLau4R7tRzd/CYyCV3hcz11HO9Qy4CN/lJVmH9KidbUc9V3icbrWAsEvrEwjCEzkVrF8Y4PW6te6SL3mybA71/ek37h1veUq3FKyS546svf9Y0rQWOas6Bkha7EWfVYamaW2Z/pAMYXbApBiKd1gRHea5NTeEQuxXmzG77E+866y6zRZY56IMFkrtMWeWGDnORaRz3+FA/3xsntkLqUwnXu93jlpQdbIDeULxRtg9B7PUNmj/P79euUHAFYVyTtufPK6c20VRyXXgLDjZQE/lM5Il9vN7df5iLoJozV9lfxgc7WOTMzeQ/o3crqOTMmSVYvQaHm0N3RE5T4GnzEO1WgC1yu+PIH4r8vCqSbstabr/6ftmtVRxRKBT+b78BU6eJ244V+CwAAAAASUVORK5CYII=' alt=''/>
							<span className='sMy'>在线客服</span>
						</p>
						<p>
							<span className='sMore'>></span>
						</p>
					</div>
					<div className='see same'>
						<p className='area'>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAw1BMVEUAAAC3t7e3t7fKysq5ubm4uLi4uLi4uLi7u7u6urq/v7+4uLi7u7u4uLi4uLi5ubm4uLi5ubnKysq4uLi4uLi4uLi4uLi4uLi5ubm9vb24uLi4uLi4uLi5ubm4uLi+vr64uLi4uLi4uLi5ubm5ubm6urq4uLi5ubm4uLi3t7e5ubm4uLi5ubnu7u63t7fr6+u6urrR0dHKysrHx8fk5OTb29vh4eG/v7/BwcG8vLzNzc3e3t7m5ubW1tbDw8Po6Ojj4+OQjp3gAAAALXRSTlMA/PIEXefgsCwWDI847Ih6YjEI0oH21pg/HMq9pkUgEtvEqlVPNJxyZycktmyKFKsDAAADKklEQVRYw+2X2XbaMBBAZRaz7/sSIGnSJYmvbQyYLaT//1WVLWJoEOlpzEt7uE8g+1xJo9EwiCtXrlz5R3lslFLRl0IiU4+n+woJsacGSHccymCKPSMDbuLp8oXSIPpcmnwTcanQjT4VRWzqZl+IcfYxmUtkxAVIUbgFEm3j8RK6ZAmFcX8JXQeJ7wS+C8SuC0xty1r40EjG1t2BZwVsnU+lXb1brVSq3beFlGBmhayhKRTZaqVQqWb/LKvdJQhJDGvhQQCW4gU6YTo3TRRmM/+hLHfHEcOxHGrBq9K5UJYD1RIHSt8/sGXDaf216659JBO5nVtwQ5u9gi8iWUDiTN0Xd+og6dTP2oJ9TveRmk2DHRdFFdgEAx6k88lMMN/cUsyDSe+EnrEJzsaK2DiBL9lXo4E9JW1h2kSsCc5HyxAcubQDs1Xg65mA5wPl0OZax7hATXumalenvpFJSOHUpmLwdGZxU0uiWd9TEMbvGptkC2T1N31maX0PIpu6GQutLQxq5VRXBF8+1PkmYS4862ySOQx0ZU3uVedzIMzVtM6mdmue6r5p35a46m71wLF1z21oaXVrrW4NheCmGrA9o0uc6r6c2ewcCMtwH5a2LhrQPtU9wOqMbaBeMPS+F8hoEiUNC62tndsflt63g+/6/sHT2Ro50c2Y/XJe71uA0dN1NwbMtWtrGkgmP3Q+24fOuZ8sZ6FZWxlFeu97PbZ50OppdfkG8PJ7sWgrm/dz7kS+1WHO7ZKgpuoZpYHdxg6nnfuHtXlBjA4+pkr4c42kIs7R6yNxdp63JCCTF01le/ONRLcUvrP0diskRlWcp15uEZF+lsmtbJGvkRejIQcGNfEhuWaDAOP2W17W+0Roi3zqvmULEzXf1xvxZ3LF+/uH8Vvz6dtHRx0dY652UxyJvyX9rt7vgsh/mhqs3uf17adM+irzCunP655PaiAYcfpYpielMlaruHxfPtoxuvYWzN4V+k7c1vPAqxPvf0/WOK4x9jJWnkgKwNpWtq0PxkMsXXIArNzFdraZIqmKeNSHHGilRGyqJnuesuIC1O+/9s32oFkTV65c+d/4BZ3WEcyEVdDyAAAAAElFTkSuQmCC' alt=''/>
							<span className='sMy'>关于乐峰</span>
						</p>
						<p>
							<span className='sMore'>></span>
						</p>
					</div>
				</div>
				<FooterCom></FooterCom>
			</div>
		)
	}
}
export default Order;
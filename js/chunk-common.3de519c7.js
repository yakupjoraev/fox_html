(self["webpackChunkfoxtrove"]=self["webpackChunkfoxtrove"]||[]).push([[64],{8508:function(t,e,n){"use strict";n.a(t,(async function(t,a){try{var i=n(9307),s=t([i]);i=(s.then?(await s)():s)[0],e.Z={name:"ConnectWalletButton",props:{isConnect:{type:Boolean,default:!1}},emits:["connect-status"],methods:{async connect(){if(this.isConnect)return i.Z.disconnect(),void this.$emit("connect-status",!1);let t=await i.Z.connect();t?this.$emit("connect-status",!0):console.error("Wallet connect error")}}},a()}catch(o){a(o)}}))},2608:function(t,e,n){"use strict";n.a(t,(async function(t,a){try{var i=n(86),s=n(8637),o=n(9169),r=t([o]);o=(r.then?(await r)():r)[0],e.Z={name:"nav-comp",emits:["connect-status"],props:{isMint:{type:Boolean,default:!1},isConnect:{type:Boolean,default:!1}},components:{SocialsComp:s.Z,ConnectWalletButton:o.Z},data(){return{config:i.Z,isOpenMenu:!1}}},a()}catch(l){a(l)}}))},86:function(t,e){"use strict";e.Z={TEST_MODE:!0,SMART_CONTRACT_ADDRESS:"0x2a02Ac82A1ed6eB4b75eBCEfB71612B117fD739D",E_MAIL:"info@foxtrove.org",GITHUB_URL:"https://github.com/YagaLabs-Team",MAXIMUM_NFT:1e4,defaultWallet:"MetaMask",defaultPrice:.05,defaultTotalMinted:300,menuLinks:{About:"/about.html",Foxcoin:"/coin.html",Provenance:"/prov.html",Gallery:"#",Mint:"/mint.html",Terms:"/terms.html"},socialLinks:{Opensea:"#",Blur:"#",Twitter:"https://twitter.com/foxtrovenft",Youtube:"https://www.youtube.com/@YagaLabs",Instagram:"https://www.instagram.com/foxtrovenft/"}}},1167:function(t,e){"use strict";e.Z={testNet:{netLink:"https://goerli.etherscan.io",netRpc:"https://goerli.blockpi.network/v1/rpc/public",netName:"Goerli",chainId:5,symbol:"ETH",decimals:18,contract:"0x2a02Ac82A1ed6eB4b75eBCEfB71612B117fD739D",ABI:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintOnce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"mintAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"minted",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"mintedCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"mintedCountFree",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"priceWL",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"saleStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limit",type:"uint256"}],name:"setMaxMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_price",type:"uint256"}],name:"setPriceWL",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_status",type:"bool"}],name:"setSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uri",type:"string"}],name:"setUri",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"},{internalType:"bool",name:"_status",type:"bool"}],name:"setWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whiteList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawFromContract",outputs:[],stateMutability:"nonpayable",type:"function"}]},mainNet:{netLink:"",netRpc:"",netName:"",chainId:"",symbol:"",decimals:18,contract:"",ABI:[]}}},4690:function(t,e){"use strict";e.Z={saveWallet:(t,e)=>{localStorage.setItem("userWalletName",t),localStorage.setItem("userWalletID",e)},getWallet:()=>{const t=localStorage.getItem("userWalletName"),e=localStorage.getItem("userWalletID");return!(!t||!e)&&{userWalletName:t,userWalletID:e}},removeWallet:()=>{localStorage.removeItem("userWalletName"),localStorage.removeItem("userWalletID")}}},7683:function(t,e,n){"use strict";n.a(t,(async function(t,a){try{var i=n(86),s=n(9663),o=n(1259),r=n.n(o),l=n(1167);const t=await r()(),c=new s.ZPm(t),u=i.Z.TEST_MODE?l.Z.testNet:l.Z.mainNet;u.chainId=s.ZPm.utils.toHex(u.chainId);const p=new c.eth.Contract(u.ABI,u.contract);e.Z={connect:async function(){if(!this.checkWallet())return console.error("MetaMask is undefined"),!1;t.selectedAddress||console.error("Please login in to wallet!");const e=await t.request({method:"eth_requestAccounts"});if(!e)return!1;if(t.chainId!==u.chainId)try{const e=await t.request({method:"wallet_switchEthereumChain",params:[{chainId:u.chainId}]});console.log(`ansver: ${e}`)}catch(n){console.log(n);try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:u.chainId,chainName:u.netName,rpcUrls:[u.netRpc],blockExplorerUrls:[u.netLink],nativeCurrency:{symbol:u.symbol,decimals:u.decimals}}]})}catch(n){return console.log(n),!1}}return e[0]},checkWallet:function(){return!("undefined"===typeof window.ethereum||!window.ethereum.isMetaMask)},fromWei:function(t,e="ether"){return s.ZPm.utils.fromWei(String(t),e)},toWei:function(t,e="ether"){return s.ZPm.utils.toWei(String(t),e)},contract:function(){return p},web3:function(){return c}},a()}catch(c){a(c)}}),1)},9307:function(t,e,n){"use strict";n.a(t,(async function(t,a){try{var i=n(86),s=n(7683),o=n(4690),r=t([s]);s=(r.then?(await r)():r)[0];const l={userWalletName:!1,userWalletID:!1,userWallet:!1,setConnectWallet:function(){console.log("wallets.js: setConnectWallet()"),o.Z.saveWallet(this.userWalletName,this.userWalletID)},checkConnectWallet:async function(){console.log("wallets.js: checkConnectWallet()");let t=o.Z.getWallet();return!!t&&await this.connect(t.userWalletName)},removeConnectWallet:function(){console.log("wallets.js: removeConnectWallet()"),o.Z.removeWallet()},setProvider:function(t=i.Z.defaultWallet){switch(console.log("wallets.js: setProvider()"),this.userWalletName=t,t){case"MetaMask":this.userWallet=s.Z;break;default:this.userWallet=s.Z;break}},resetProvider:function(){console.log("wallets.js: resetProvider()"),this.userWallet=!1,this.userWalletName=!1,this.userWalletID=!1,this.removeConnectWallet()},connect:async function(t=i.Z.defaultWallet){console.log("wallets.js: connect()"),this.setProvider(t);let e=await this.userWallet.connect();return e?(this.userWalletID=e,this.setConnectWallet(),e):(this.resetProvider(),!1)},disconnect:function(){console.log("wallets.js: disconnect()"),this.resetProvider()},contractCallMethod:async function(t){console.log("wallets.js: contractCallMethod()");try{return await this.userWallet.contract().methods[t]().call()}catch(e){console.error(`Error in: ${t}() wallets.js`),console.error(e)}return!1},transactionConfirmation:async function(t){console.log("wallets.js: transactionConfirmation()");let e=0,n=!1;const a=this.userWallet,i=async function(){try{const e=await a.web3().eth.getTransactionReceipt(t);return!(!e||!("status"in e))&&1n==e.status}catch(e){return console.error("Error in: transactionConfirmation() wallets.js"),console.error(e),!1}};let s=new Promise((function(t){const a=setInterval((async function(){e++,n=await i(),(n||e>100)&&(clearInterval(a),t(n))}),500)}));return s.then((function(t){return t}))},getPrice:async function(){console.log("wallets.js: getPrice()");let t=await this.contractCallMethod("price");return t&&(t=this.userWallet.fromWei(t)),t},getMinted:async function(){console.log("wallets.js: getMinted()");let t=await this.contractCallMethod("minted");return t&&(t=this.userWallet.fromWei(t)),t},mint:async function(t,e){console.log("wallets.js: mint()"),e=this.userWallet.toWei(e);try{let n=await this.userWallet.contract().methods.mint(t).send({from:this.userWalletID,value:e,maxPriorityFeePerGas:null,maxFeePerGas:null});return!(!n||!("transactionHash"in n))&&await this.transactionConfirmation(n.transactionHash)}catch(n){console.error("Error in: mint() wallets.js"),console.error(n)}return!1}};e.Z=l,a()}catch(l){a(l)}}))},9169:function(t,e,n){"use strict";n.a(t,(async function(t,a){try{var i=n(2008),s=n(4891),o=n(89),r=t([s]);s=(r.then?(await r)():r)[0];const l=(0,o.Z)(s.Z,[["render",i.s]]);e.Z=l,a()}catch(l){a(l)}}))},5794:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var a=n(3396),i=n(3862),s=n(7139);const o={class:"container"},r={class:"footer__box d-flex"},l={class:"footer__left"},c=(0,a._)("img",{src:"/img/footer-logo.png",alt:"",class:"footer__logo"},null,-1),u=(0,a._)("br",null,null,-1),p=["href"],y={class:"footer__content"},m=(0,a._)("p",{class:"footer__title"}," VERIFIED SMART CONTRACT ADDRESS: ",-1),d=(0,a._)("svg",{class:"icon"},[(0,a._)("use",{"xlink:href":"/img/svg-sprite.svg#copy"})],-1),f=[d],_={class:"footer__right d-flex"},h={class:"footer__item d-flex"},v=(0,a._)("img",{src:"/img/f1.svg",alt:""},null,-1),g=["href"],b={class:"footer__item d-flex"},w=(0,a._)("img",{src:"/img/f2.svg",alt:""},null,-1),T=["href"];function k(t,e,n,d,k,M){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",r,[(0,a._)("div",l,[c,(0,a._)("p",null,[(0,a.Uk)(" Copyright 2023. Made with by YagaLabs. "),u,(0,a._)("a",{href:k.config.menuLinks.Terms,target:"blank"},"Terms&Conditions",8,p)])]),(0,a._)("div",y,[m,(0,a._)("div",{class:"footer__block d-flex",onClick:e[2]||(e[2]=(...t)=>M.copyToBufer&&M.copyToBufer(...t))},[(0,a.wy)((0,a._)("input",{type:"text",class:"footer__link",ref:"contractinput","onUpdate:modelValue":e[0]||(e[0]=t=>k.config.SMART_CONTRACT_ADDRESS=t)},null,512),[[i.nr,k.config.SMART_CONTRACT_ADDRESS]]),(0,a._)("button",{class:"footer__copy",title:"Copy contract address",onClick:e[1]||(e[1]=(0,i.iM)(((...t)=>M.copyToBufer&&M.copyToBufer(...t)),["stop"]))},f)])]),(0,a._)("div",_,[(0,a._)("div",h,[v,(0,a._)("a",{href:`mailto:${k.config.E_MAIL}`,class:"footer__mail"},(0,s.zw)(k.config.E_MAIL),9,g)]),(0,a._)("div",b,[w,(0,a._)("a",{href:k.config.GITHUB_URL,target:"_blanc",class:"footer__mail"},"Github",8,T)])])])])}var M=n(86),C={name:"footer-comp",data(){return{config:M.Z}},methods:{copyToBufer(){let t=document.createElement("textarea");t.style.position="fixed",t.style.opacity="0",t.textContent=this.config.SMART_CONTRACT_ADDRESS,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$refs.contractinput.select()}}},W=n(89);const I=(0,W.Z)(C,[["render",k]]);var x=I},2733:function(t,e,n){"use strict";n.a(t,(async function(t,a){try{var i=n(1478),s=n(363),o=n(89),r=t([s]);s=(r.then?(await r)():r)[0];const l=(0,o.Z)(s.Z,[["render",i.s]]);e.Z=l,a()}catch(l){a(l)}}))},8637:function(t,e,n){"use strict";n.d(e,{Z:function(){return C}});var a=n(3396);const i={class:"nav__socials d-flex"},s=["href"],o=(0,a._)("img",{src:"/img/a1.svg",alt:""},null,-1),r=[o],l=["href"],c=(0,a._)("img",{src:"/img/a2.svg",alt:""},null,-1),u=[c],p=["href"],y=(0,a._)("img",{src:"/img/a3.svg",alt:""},null,-1),m=[y],d=["href"],f=(0,a._)("img",{src:"/img/a4.svg",alt:""},null,-1),_=[f],h=["href"],v=(0,a._)("img",{src:"/img/a5.svg",alt:""},null,-1),g=[v];function b(t,e,n,o,c,y){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("a",{class:"nav__site",target:"_blank",href:c.config.socialLinks.Opensea},r,8,s),(0,a._)("a",{class:"nav__site",target:"_blank",href:c.config.socialLinks.Blur},u,8,l),(0,a._)("a",{class:"nav__site",target:"_blank",href:c.config.socialLinks.Twitter},m,8,p),(0,a._)("a",{class:"nav__site",target:"_blank",href:c.config.socialLinks.Youtube},_,8,d),(0,a._)("a",{class:"nav__site",target:"_blank",href:c.config.socialLinks.Instagram},g,8,h)])}var w=n(86),T={name:"socials-comp",data(){return{config:w.Z}}},k=n(89);const M=(0,k.Z)(T,[["render",b]]);var C=M},4891:function(t,e,n){"use strict";n.a(t,(async function(t,a){try{n.d(e,{Z:function(){return i.Z}});var i=n(8508),s=t([i]);i=(s.then?(await s)():s)[0],a()}catch(o){a(o)}}))},363:function(t,e,n){"use strict";n.a(t,(async function(t,a){try{n.d(e,{Z:function(){return i.Z}});var i=n(2608),s=t([i]);i=(s.then?(await s)():s)[0],a()}catch(o){a(o)}}))},2008:function(t,e,n){"use strict";n.d(e,{s:function(){return o}});var a=n(3396);const i={key:0},s={key:1};function o(t,e,n,o,r,l){return(0,a.wg)(),(0,a.iD)("button",{class:"nav__btn mint__btn btn",onClick:e[0]||(e[0]=(...t)=>l.connect&&l.connect(...t))},[n.isConnect?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",i,"Connect wallet")),n.isConnect?((0,a.wg)(),(0,a.iD)("p",s,"Disconnect")):(0,a.kq)("",!0)])}},1478:function(t,e,n){"use strict";n.d(e,{s:function(){return R}});var a=n(3396),i=n(7139);const s={class:"container"},o={class:"nav__box d-flex"},r={class:"nav__left d-flex"},l=(0,a._)("a",{href:"/",class:"nav__logo"},[(0,a._)("img",{src:"/img/logo.svg",alt:""})],-1),c={class:"nav__list d-flex"},u={class:"nav__item"},p=["href"],y={class:"nav__item"},m=["href"],d={class:"nav__item"},f=["href"],_={class:"nav__item"},h=["href"],v={class:"nav__right d-flex"},g=["href"],b=(0,a._)("p",null,"mint now",-1),w=[b],T=(0,a._)("span",null,null,-1),k=(0,a._)("span",null,null,-1),M=(0,a._)("span",null,null,-1),C=[T,k,M],W=["href"],I=(0,a._)("p",null,"mint now",-1),x=[I],A={class:"nav__list"},Z={class:"nav__item"},D=["href"],L={class:"nav__item"},S=["href"],B={class:"nav__item"},P=["href"],E={class:"nav__item"},N=["href"];function R(t,e,n,b,T,k){const M=(0,a.up)("SocialsComp"),I=(0,a.up)("ConnectWalletButton");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",o,[(0,a._)("div",r,[l,(0,a._)("ul",c,[(0,a._)("li",u,[(0,a._)("a",{href:T.config.menuLinks.About,class:"nav__link"},"About",8,p)]),(0,a._)("li",y,[(0,a._)("a",{href:T.config.menuLinks.Foxcoin,class:"nav__link"},"Foxcoin",8,m)]),(0,a._)("li",d,[(0,a._)("a",{href:T.config.menuLinks.Provenance,class:"nav__link"},"Provenance",8,f)]),(0,a._)("li",_,[(0,a._)("a",{href:T.config.menuLinks.Gallery,class:"nav__link"},"Gallery",8,h)])])]),(0,a._)("div",v,[(0,a.Wm)(M),n.isMint?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("a",{key:0,class:"nav__btn btn",href:T.config.menuLinks.Mint},w,8,g)),n.isMint?((0,a.wg)(),(0,a.j4)(I,{key:1,"is-connect":n.isConnect,onConnectStatus:e[0]||(e[0]=e=>{t.$emit("connect-status",e)})},null,8,["is-connect"])):(0,a.kq)("",!0)]),(0,a._)("div",{class:"menu-btn",onClick:e[1]||(e[1]=t=>T.isOpenMenu=!T.isOpenMenu)},C),(0,a._)("div",{class:(0,i.C_)(["menu",{active:T.isOpenMenu}])},[n.isMint?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("a",{key:0,class:"nav__btn btn",href:T.config.menuLinks.Mint},x,8,W)),n.isMint?((0,a.wg)(),(0,a.j4)(I,{key:1,"is-connect":n.isConnect,onConnectStatus:e[2]||(e[2]=e=>{t.$emit("connect-status",e)})},null,8,["is-connect"])):(0,a.kq)("",!0),(0,a._)("ul",A,[(0,a._)("li",Z,[(0,a._)("a",{href:T.config.menuLinks.About,class:"nav__link"},"About",8,D)]),(0,a._)("li",L,[(0,a._)("a",{href:T.config.menuLinks.Foxcoin,class:"nav__link"},"Foxcoin",8,S)]),(0,a._)("li",B,[(0,a._)("a",{href:T.config.menuLinks.Provenance,class:"nav__link"},"Provenance",8,P)]),(0,a._)("li",E,[(0,a._)("a",{href:T.config.menuLinks.Gallery,class:"nav__link"},"Gallery",8,N)])]),(0,a.Wm)(M)],2)])])}},6601:function(){}}]);
//# sourceMappingURL=chunk-common.3de519c7.js.map
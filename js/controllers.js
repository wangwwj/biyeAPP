angular.module('starter.controllers', [])

	.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPopup, $ionicPopover, CityService) {
		$scope.TitleName = [
			{ name: "首页推荐", goTo: "#/app/home", Icon: "icon-home3" },
			{ name: "最美河南", goTo: "#/app/listdata?id=0&title=河南", Icon: "icon-home3" },
			{ name: "风景-旅游", goTo: "#/app/lvyou", Icon: "icon-heart" },
			{ name: "美食-小吃", goTo: "#/app/jinqi", Icon: "icon-teach" },
			{ name: "添加-爱好", goTo: "#/app/lishi", Icon: "icon-users" },
			{ name: "用户管理", goTo: "#/app/user", Icon: "icon-person" },
			{ name: "我的收藏", goTo: "#/app/shouc", Icon: "icon-pictures" }
		];
		// location.replace(document.referrer);
		$scope.theGoujia = [
			{ name: "河南" },
			{ name: "郑州" },
			{ name: "开封" },
			{ name: "洛阳" },
			{ name: "平顶山" },
			{ name: "安阳" },
			{ name: "鹤壁" },
			{ name: "新乡" },
			{ name: "焦作" },
			{ name: "濮阳" },
			{ name: "许昌" },
			{ name: "漯河" },
			{ name: "三门峡" },
			{ name: "周口" },
			{ name: "商丘" },
			{ name: "驻马店" },
			{ name: "南阳" },
			{ name: "信阳" },
			{ name: "济源" }
		];
		$scope.theSchool = [
			{ name: "大学", img: 'img/colleage-icon.png' },
			{ name: "中学", img: 'img/secondary-school.png' }
		]
		$scope.popover = $ionicPopover.fromTemplateUrl('my-share.html', {
			scope: $scope
		});
		// .fromTemplateUrl() 方法
		$ionicPopover.fromTemplateUrl('my-share.html', {
			scope: $scope
		}).then(function(popover) {
			$scope.popover = popover;
		});
		$scope.openPopover = function() {
			$scope.ThePopoverShow = 1;
			$scope.popover.show();
		};
		var WinWidth = window.screen.width;
		var WinHeight = window.screen.height;
		$scope.popoverleft = (WinWidth - 270) / 2 + "px";
		$scope.popovertop = (WinHeight - 280) / 2 + "px";
		$scope.TheCityName = CityService.getData();
		$scope.XZschool = function(name) {
			$scope.TheCityName = name;
			CityService.storeData(name);
			$scope.popover.hide();
			location.reload(true);
		}
	})

	.controller('HomeCtrl', function($scope, $sce, $state, CityService, $http) {
		$scope.loveCity = CityService.getData();
		$scope.bannerImg = [
			{ name: 'img/henan1.jpg', id: 1 },
			{ name: 'img/henan2.jpg', id: 2 },
			{ name: 'img/henan3.jpg', id: 3 }
		];
		if($scope.loveCity!="河南"){
			$scope.bannerTitle = [
				{ name: $scope.loveCity + '-风景-旅游', GoTo: 'app.lvyou' },
				{ name: '美食-消除', GoTo: 'app.jinqi' }
			];
		}else{
			$scope.bannerTitle = [
				{ name: '美食-消除', GoTo: 'app.meishi' }
			];
		}
		
		$http.get("json/city.json").success(function(data) {
			console.log(data);
			$scope.haiwaiList = data;
		});
		$scope.theClick = function(name) {
			$state.go(name);  
		}
		var WinWidth = window.screen.width;
		$scope.ColWidth = ((WinWidth * 2 / 3 - 17.5) / 2 - 2.5) + "px";
		$scope.theCity = function(id, title) {
			console.log(id);
			$state.go("app.listdata", { id: id, title: title })
		}
	})

	.controller('UserCtrl', function($scope, $cordovaImagePicker,ImgService) {
		$scope.imgSrc=ImgService.getData();
		console.log($scope.imgSrc);
        $scope.pickImage = function () {
   //      	Wechat.isInstalled(function (installed) {
			//     alert("Wechat installed: " + (installed ? "Yes" : "No"));
			// }, function (reason) {
			//     alert("Failed: " + reason);
			// });
			// Wechat.share({
			//     text: "This is just a plain string",
			//     scene: Wechat.Scene.TIMELINE   // share to Timeline
			// }, function () {
			//     alert("Success");
			// }, function (reason) {
			//     alert("Failed: " + reason);
			// });
			var iType = Wechat.Scene.SESSION;
			Wechat.share({
                message: {
                    title: "最美河南",
                    description: "我们最美河南的手机APP",
                    thumb: "http://img3.duitang.com/uploads/item/201510/10/20151010211325_ZdA4R.jpeg",
                    media: {
                        type: Wechat.Type.WEBPAGE,
                        webpageUrl: "http://www.baidu.com"
                    }
                },
                scene:  iType
            }, function () {
            	alert(11111);
            }, function (reason) {
            	alert(reason);
            });
   //      	Wechat.share({
			//     message: {
			//         title: "最美河南", //分享出去的标题
			//         description: "我们最美河南的手机APP", //内容介绍
			//         thumb: "http://img3.duitang.com/uploads/item/201510/10/20151010211325_ZdA4R.jpeg", //图片（缩略图）不设置将显示我们在微信开放平台提交的图片
			//         media: {
			//              type: Wechat.Type.WEBPAGE,
			//              webpageUrl: "http://www.baidu.com" //分享的连接地址
			//                     }
			//     },
			//     scene: Wechat.Scene.SESSION 
			//     // (或：Wechat.Scene.SESSION)
			// //Wechat.Scene.TIMELINE：发送朋友圈
			// //Wechat.Scene.SESSION：发送给微信好友
			// }, function () {
			// 	alert(111);
			//     //发送成功
			// }, function (reason) {
			// 	alert(reason);
			//     //发送失败
			// });
        }
        // $scope.pickImage = function () {
            // var options = {
            //     maximumImagesCount: 1,
            //     width: 800,
            //     height: 800,
            //     quality: 80
            // };

            // $cordovaImagePicker.getPictures(options)
            //     .then(function (results) {
            //         console.log(results);
            //         $scope.imgSrc = results[0];
            //         ImgService.storeData($scope.imgSrc)
            //     }, function (error) {
            //         // error getting photos
            //     });

        // }
	})

	.controller('ShoucCtrl', function($scope) {})

	.controller('LishiCtrl', function($scope,ImgService) {
		$scope.imgSrc=ImgService.getData();
		$scope.weixin=function(){
			Wechat.share({
			    text: "This is just a plain string",
			    scene: Wechat.Scene.TIMELINE   // share to Timeline
			}, function () {
			    alert("Success");
			}, function (reason) {
			    alert("Failed: " + reason);
			});
		}
	})

	.controller('LvyouCtrl', function($scope, $http, CityService,$state) {
		var loveCity=$scope.loveCity = CityService.getData();
		$http.get("json/scenery.json").success(function(data) {
			console.log(data);
			if(loveCity == "郑州") {
				$scope.haiwaiList = data.zhengzhou;
			}else if(loveCity == "开封") {
				$scope.haiwaiList = data.kaifeng;
			}else if(loveCity == "洛阳") {
				$scope.haiwaiList = data.luoyang;
			}else if(loveCity == "平顶山") {
				$scope.haiwaiList = data.pingdingshan;
			}else if(loveCity == "安阳") {
				$scope.haiwaiList = data.anyang;
			}else if(loveCity == "鹤壁") {
				$scope.haiwaiList = data.hebi;
			}else if(loveCity == "新乡") {
				$scope.haiwaiList = data.xinxiang;
			}else if(loveCity == "焦作") {
				$scope.haiwaiList = data.jiaozuo;
			}else if(loveCity == "濮阳") {
				$scope.haiwaiList = data.puyang;
			}else if(loveCity == "许昌") {
				$scope.haiwaiList = data.xuchang;
			}else if(loveCity == "漯河") {
				$scope.haiwaiList = data.luohe;
			}else if(loveCity == "三门峡") {
				$scope.haiwaiList = data.sanmenxia;
			}else if(loveCity == "周口") {
				$scope.haiwaiList = data.zhoukou;
			}else if(loveCity == "商丘") {
				$scope.haiwaiList = data.shangqiu;
			}else if(loveCity == "驻马店") {
				$scope.haiwaiList = data.zhumadian;
			}else if(loveCity == "南阳") {
				$scope.haiwaiList = data.nanyang;
			}else if(loveCity == "信阳") {
				$scope.haiwaiList = data.xinyang;
			}else if(loveCity == "济源") {
				$scope.haiwaiList = data.jiyuan;
			}
		});
		$scope.theCity = function(city, title) {
			console.log(city);
			$state.go("app.listdata", { city: city, title: title })
		}
	})

	.controller('BaiduCtrl', function($scope, $stateParams, $sce) {
		console.log($stateParams);
		$scope.theTitle = $stateParams.title;
		$scope.src = $sce.trustAsResourceUrl($stateParams.src);
		console.log($scope.src)

	})

	.controller('ListdataCtrl', function($scope, $stateParams, $http, $state) {
		console.log($stateParams);
		var loveCity=$stateParams.city;
		var title=$stateParams.title;
		var id = $stateParams.id;
		var eat=$stateParams.eat;
		$scope.theTitle = $stateParams.title;
		if(!loveCity&&!eat){
			$http.get("json/city.json").success(function(data) {
				console.log(data);
				for(var i = 0; i < data.length; i++) {
					var res = data[i];
					if(res.id == id) {
						console.log(res);
						$scope.theTitle = res.title;
						$scope.content = res.content;
						$scope.img = res.img;
						$scope.img2 = res.img2;
						$scope.src = res.src;
					}
				}
			});
		}else if(loveCity){
			$http.get("json/scenery.json").success(function(data) {
				console.log(data);
				if(loveCity == "郑州") {
					$scope.haiwaiList = data.zhengzhou;
				}else if(loveCity == "开封") {
					$scope.haiwaiList = data.kaifeng;
				}else if(loveCity == "洛阳") {
					$scope.haiwaiList = data.luoyang;
				}else if(loveCity == "平顶山") {
					$scope.haiwaiList = data.pingdingshan;
				}else if(loveCity == "安阳") {
					$scope.haiwaiList = data.anyang;
				}else if(loveCity == "鹤壁") {
					$scope.haiwaiList = data.hebi;
				}else if(loveCity == "新乡") {
					$scope.haiwaiList = data.xinxiang;
				}else if(loveCity == "焦作") {
					$scope.haiwaiList = data.jiaozuo;
				}else if(loveCity == "濮阳") {
					$scope.haiwaiList = data.puyang;
				}else if(loveCity == "许昌") {
					$scope.haiwaiList = data.xuchang;
				}else if(loveCity == "漯河") {
					$scope.haiwaiList = data.luohe;
				}else if(loveCity == "三门峡") {
					$scope.haiwaiList = data.sanmenxia;
				}else if(loveCity == "周口") {
					$scope.haiwaiList = data.zhoukou;
				}else if(loveCity == "商丘") {
					$scope.haiwaiList = data.shangqiu;
				}else if(loveCity == "驻马店") {
					$scope.haiwaiList = data.zhumadian;
				}else if(loveCity == "南阳") {
					$scope.haiwaiList = data.nanyang;
				}else if(loveCity == "信阳") {
					$scope.haiwaiList = data.xinyang;
				}else if(loveCity == "济源") {
					$scope.haiwaiList = data.jiyuan;
				}
				console.log($scope.haiwaiList);
				for(var i=0;i<$scope.haiwaiList.length;i++){
					var res=$scope.haiwaiList[i];
					if(title==res['title']){
						$scope.theTitle = res.title;
						$scope.content = res.content;
						$scope.img = res.img;
						$scope.src = res.src;
					}
				}
			});
		}else{
			$http.get("json/eat.json").success(function(data) {
				console.log(data)
				for(var i=0;i<data.length;i++){
					var res=data[i];
					
					if(title==res['title']){
						console.log(res)
						$scope.theTitle = res.title;
						$scope.content = res.content;
						$scope.img = res.img;
					}
				}
			})
		}
		
		$scope.baiduMore = function(src, title) {
			console.log(src, title);
			$state.go("app.baidu", { src: src, title: title })
		}
	})

	.controller('JinqiCtrl', function($scope,$http,$state) {
		$http.get("json/eat.json").success(function(data) {
			$scope.Moredate=data;
		})
		$scope.theCity = function(title) {
			console.log(title);
			$state.go("app.listdata", { eat: "eat", title: title })
		}
	});
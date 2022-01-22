function jsonp(url) {
	return new Promise((resolve, reject) => {
		const random = Math.random();
		// 回调函数
		window[random] = (data) => {
			resolve(data);
		};
		const script = document.createElement("script");
		script.src = `${url}?functionName=${random}`;
		script.onload = () => {
			script.remove();
		};
		script.onerror = () => {
			reject();
		};
		document.body.appendChild(script);
	});
}

jsonp("http://qq.com:8888/friends.js").then((data) => {
	console.log(data);
});

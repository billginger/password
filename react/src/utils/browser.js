const getCookie = key => {
	const cookieStr = document.cookie;
	const cookieArr = cookieStr.split('; ');
	for (let i = 0; i < cookieArr.length; i++) {
		const arr = cookieArr[i].split('=');
		if (key == arr[0]) {
			return arr[1];
		}
	}
}

export { getCookie };

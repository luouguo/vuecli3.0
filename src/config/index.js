let baseUrl = ''
console.log(process.env);

if (process.env.VUE_APP_SURROUND === 'pro') {
    baseUrl = 'https://api/'; //正式
} else if(process.env.VUE_APP_SURROUND === 'test'){
    baseUrl = ''; //单元测试
}else {
    baseUrl = 'https://api/'; //测试
}
export {
    baseUrl,
}
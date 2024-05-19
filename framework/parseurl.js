module.exports =  (baseurl) => (req,res) => {

    const parsedUrl = new URL(req.url,baseurl);
    const params = {}

    parsedUrl.searchParams.forEach((value,key) => params[key] = value)

    req.pathname = parsedUrl.pathname;
    req.params = params;

}

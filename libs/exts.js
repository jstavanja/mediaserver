/**
 * mediaserver module for JXcore and Node.JS
 *
 * MIT license, Oguz Bastemur 2014
 *
 *
 * media extensions
 */

// ref : http://www.webmaster-toolkit.com/mime-types.shtml
exports = module.exports = {

    // plain formats
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".txt": "text/plain",

    // custom
    ".pdf": "application/octet-stream",
    ".woff":"application/octet-stream",
    ".ttf":"application/octet-stream",
    ".svg":"application/octet-stream",
    ".otf":"application/octet-stream",
    ".eot":"application/octet-stream",

    // compressed formats
    ".zip": "application/octet-stream",
    ".rar": "application/octet-stream",
    ".7z": "application/octet-stream",
    ".gz": "application/octet-stream",
    ".tar": "application/octet-stream",

    // media formats
    ".afl": "video/animaflex",
    ".ai": "application/postscript",
    ".aif": "audio/aiff",
    ".aifc": "audio/aiff",
    ".aiff": "audio/aiff",
    ".aip": "text/x-audiosoft-intra",
    ".art": "image/x-jg",
    ".asf": "video/x-ms-asf",
    ".asm": "text/x-asm",
    ".asx": "video/x-ms-asf",
    ".au": "audio/basic",
    ".avi": "video/avi",
    ".avs": "video/avs-video",
    ".bm": "image/bmp",
    ".bmp": "image/bmp",
    ".dif": "video/x-dv",
    ".dl": "video/dl",
    ".dv": "video/x-dv",
    ".dwg": "image/vnd.dwg",
    ".dxf": "image/vnd.dwg",
    ".fli": "video/fli",
    ".flo": "image/florian",
    ".fmf": "video/x-atomic3d-feature",
    ".fpx": "image/vnd.fpx",
    ".funk": "audio/make",
    ".g3": "image/g3fax",
    ".gif": "image/gif",
    ".gl": "video/gl",
    ".gsd": "audio/x-gsm",
    ".gsm": "audio/x-gsm",
    ".isu": "video/x-isvideo",
    ".it": "audio/it",
    ".jam": "audio/x-jam",
    ".jfif": "image/jpeg",
    ".jfif-tbnl": "image/jpeg",
    ".jpe": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".jps": "image/x-jps",
    ".jut": "image/jutvision",
    ".kar": "audio/midi",
    ".la": "audio/nspaudio",
    ".lam": "audio/x-liveaudio",
    ".lma": "audio/x-nspaudio",
    ".m1v": "video/mpeg",
    ".m2a": "audio/mpeg",
    ".m2v": "video/mpeg",
    ".m3u": "audio/x-mpequrl",
    ".mcf": "image/vasa",
    ".mid": "audio/midi",
    ".midi": "audio/midi",
    ".mjf": "audio/x-vnd.audioexplosion.mjuicemediafile",
    ".mjpg": "video/x-motion-jpeg",
    ".mod": "audio/mod",
    ".moov": "video/quicktime",
    ".mov": "video/quicktime",
    ".movie": "video/x-sgi-movie",
    ".mp2": "video/mpeg",
    ".mp3": "audio/mpeg",
    ".mpa": "audio/mpeg",
    ".mpe": "video/mpeg",
    ".mpeg": "video/mpeg",
    ".mpg": "video/mpeg",
    ".mpga": "audio/mpeg",
    ".mv": "video/x-sgi-movie",
    ".my": "audio/make",
    ".nap": "image/naplps",
    ".naplps": "image/naplps",
    ".nif": "image/x-niff",
    ".niff": "image/x-niff",
    ".pbm": "image/x-portable-bitmap",
    ".pct": "image/x-pict",
    ".pcx": "image/x-pcx",
    ".pfunk": "audio/make",
    ".pgm": "image/x-portable-greymap",
    ".pic": "image/pict",
    ".pict": "image/pict",
    ".pm": "image/x-xpixmap",
    ".png": "image/png",
    ".pnm": "image/x-portable-anymap",
    ".ppm": "image/x-portable-pixmap",
    ".qcp": "audio/vnd.qcelp",
    ".qif": "image/x-quicktime",
    ".qt": "video/quicktime",
    ".qtc": "video/x-qtc",
    ".qti": "image/x-quicktime",
    ".qtif": "image/x-quicktime",
    ".ra": "audio/x-realaudio",
    ".ram": "audio/x-pn-realaudio",
    ".ras": "image/cmu-raster",
    ".rast": "image/cmu-raster",
    ".rf": "image/vnd.rn-realflash",
    ".rgb": "image/x-rgb",
    ".rm": "audio/x-pn-realaudio",
    ".rmi": "audio/mid",
    ".rmm": "audio/x-pn-realaudio",
    ".rmp": "audio/x-pn-realaudio",
    ".rp": "image/vnd.rn-realpix",
    ".rpm": "audio/x-pn-realaudio-plugin",
    ".rv": "video/vnd.rn-realvideo",
    ".s3m": "audio/s3m",
    ".scm": "video/x-scm",
    ".sid": "audio/x-psid",
    ".snd": "audio/x-adpcm",
    ".svf": "image/vnd.dwg",
    ".tif": "image/tiff",
    ".tiff": "image/tiff",
    ".tsi": "audio/tsp-audio",
    ".tsp": "audio/tsplayer",
    ".vdo": "video/vdo",
    ".viv": "video/vivo",
    ".vivo": "video/vivo",
    ".voc": "audio/voc",
    ".vos": "video/vosaic",
    ".vox": "audio/voxware",
    ".vqe": "audio/x-twinvq-plugin",
    ".vqf": "audio/x-twinvq",
    ".vql": "audio/x-twinvq-plugin",
    ".wav": "audio/wav",
    ".wbmp": "image/vnd.wap.wbmp",
    ".xbm": "image/xbm",
    ".xdr": "video/x-amt-demorun",
    ".xif": "image/vnd.xiff",
    ".xm": "audio/xm",
    ".xmz": "xgl/movie",
    ".xpm": "image/xpm",
    ".x-png": "image/png",
    ".xsr": "video/x-amt-showrun"
};
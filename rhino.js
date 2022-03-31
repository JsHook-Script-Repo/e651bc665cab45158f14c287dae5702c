var packageName = common.getcontext().getPackageName();

if (packageName == 'com.dragon.read') {
    common.hookAllMethods('com.dragon.read.user.e', 'k', function (param) {
        param.setResult(true);
    });

    common.hookAllMethods('com.dragon.read.user.e', 'a', function (param) {
        param.setResult(true);
    });

    common.hookAllMethods('com.dragon.read.user.e', 'b', function (param) {
        param.setResult(true);
    });
} else if (packageName == 'com.wsjtd.bk') {
    common.hookAllMethods('d96', 'l', function (param) {
        param.setResult(true);
    });
}

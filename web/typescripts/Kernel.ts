module Kernel {
    angular.module('kernel', [
            'ngAnimate',
            'angular-sortable-view',
            'pascalprecht.translate',
        ])
        .factory('$globalScope', globalScope)
        .factory('resourceLoaderService', ResourceLoader.Factory())
        .factory('processManagerService', ProcessManagerService.Factory())
        .factory('windowManagerService', WindowManager.Factory())
        .factory('filesystemService', FilesystemService.Factory())
        .factory('applicationLauncherService', ApplicationLauncher.Factory())
        .factory('desktopService', DesktopService.Factory())
        .factory('spinnerService', SpinnerService.Factory())

        .controller('applicationController', ApplicationController)
        .controller('DesktopDirectiveController', DesktopDirectiveController)
        .controller('DesktopPanelDirectiveController', DesktopPanelDirectiveController)
        .controller('DesktopGridDirectiveController', DesktopGridDirectiveController)

        .directive('desktop', DesktopDirective.Factory())
        .directive('desktopGrid', DesktopGridDirective.Factory())
        .directive('desktopPanel', DesktopPanelDirective.Factory())
        .run(run)
    ;

    globalScope.$inject = ['$window', '$rootScope'];
    function globalScope($window, $rootScope: ng.IRootScopeService) {
        if (angular.isDefined($window.superScope) === false) {
            $window.superScope = $rootScope;
        }

        return $window.superScope;
    }

    run.$inject = ['$globalScope'];
    function run($globalScope) {}
}
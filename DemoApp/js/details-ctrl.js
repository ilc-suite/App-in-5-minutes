angular.module('ilc.framework.angular')

    .controller('com-ilc-technologies-demoDetailsCtrl', ['$scope', '$sce', function ($scope, $sce) {
        $scope.model = {
            sce: $sce
        };
    }]);
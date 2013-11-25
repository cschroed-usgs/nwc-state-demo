<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>

<html ng-app="stateDemoApp">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <script type="text/javascript" src="webjars/angularjs/1.2.1/angular.js"></script>
        <!--<script type="text/javascript" src="webjars/angularjs/1.2.1/angular-route.js"></script>-->
        <script type="text/javascript" src="webjars/angular-ui-router/0.2.0/angular-ui-router.js"></script>
        <script type="text/javascript" src="js/services/sharedStateServices.js"></script>
        <script type="text/javascript" src="js/controllers/stateDemoControllers.js"></script>
        <script type="text/javascript" src="app.js"></script>
    </head>
    <body>
        <h1>Shared State Demo App</h1>
        <div ui-view></div>
    </body>
</html>

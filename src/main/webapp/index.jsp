<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>

<html ng-app="stateDemoApp">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        
        <link type="text/css" rel="stylesheet" href="webjars/bootstrap/2.3.2/css/bootstrap.css"/>
        <script type="text/javascript" src="webjars/angularjs/1.2.1/angular.js"></script>
        <script type="text/javascript" src="webjars/angular-ui-router/0.2.0/angular-ui-router.js"></script>
        <script type="text/javascript" src="webjars/angular-ui-bootstrap/0.6.0/ui-bootstrap.js"></script>
        <script type="text/javascript" src="webjars/angular-ui-bootstrap/0.6.0/ui-bootstrap-tpls.js"></script>
        <script type="text/javascript" src="webjars/sugar/1.3.8/sugar-full.development.js"></script>
        <script type="text/javascript" src="js/services/sharedStateServices.js"></script>
        <script type="text/javascript" src="js/controllers/stateDemoControllers.js"></script>
        <script type="text/javascript" src="app.js"></script>

    </head>
    <body>
        <h1>National Water Census Portal App</h1>
        <em> ^ this is displayed app-wide ^</em>
        <hr/>
        <div ui-view></div>
        <hr/>
        <h5>App-wide Footer</h5>

    </body>
</html>

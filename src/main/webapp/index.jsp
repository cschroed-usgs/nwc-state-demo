<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>

<html ng-app="stateDemoApp">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        
        <link type="text/css" src="webjars/bootstrap/3.0.2/css/bootstrap.css"/>
        <link type="text/css" src="webjars/bootstrap/3.0.2/css/bootstrap-theme.css"/>
        
        <script type="text/javascript" src="webjars/angularjs/1.2.1/angular.js"></script>
        <script type="text/javascript" src="webjars/angular-ui-router/0.2.0/angular-ui-router.js"></script>
        <script type="text/javascript" src="webjars/jquery/2.0.3/jquery.js"></script>
        <script type="text/javascript" src="webjars/bootstrap/3.0.2/js/bootstrap.js"></script>
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

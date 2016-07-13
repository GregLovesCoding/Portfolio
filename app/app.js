var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/app/pages/home.html'
            , controller: 'mainController'
        })
        .when('/projects/:projectOverview', {
            templateUrl: '/app/pages/projectsOverview.html'
            , controller: 'projectsOverviewController'
        })
        .when('/projects/:projectOverview/details', {
            templateUrl: '/app/pages/projectsDetails.html'
            , controller: 'projectsDetailController'
        })
        .when('/projects', {
            templateUrl: '/app/pages/projects.html'
            , controller: 'projectsController'
        })
        .when('/about', {
            templateUrl: '/app/pages/about.html'
            , controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: '/app/pages/contact.html'
            , controller: 'contactController'
        })
    
        .otherwise({
        redirectTo: '/'
        });

}]);
animateApp.factory('animations', function () {

    var viewProjectsec = document.getElementById("viewProjectSection");
    var projectButton = document.getElementById("projectButton");



    var factory = {};
    factory.viewHome = function () {
        viewProjectsec.style.right = "-6.1%";


    }

    factory.viewProjects = function () {
        viewProjectsec.style.right = "72.3%";

    }
    factory.viewProjectDetail = function () {
        viewProjectsec.style.right = "72.3%";

    }

    factory.viewAbout = function () {
        viewProjectsec.style.right = "72.3%";
    }

    factory.viewContact = function () {
        viewProjectsec.style.right = "72.3%";
    }

    return factory;
});
animateApp.factory('datafactory', function () {

    var projects = [
        {
            name: 'DocAdvisor'
            , type: 'UI/UX | Developer'
            , keywords: 'Website UX UI Front-end Developer Design'
            , descr: ''
            , link: 'www.docadvisor.pl'
            , images: [{
                    name: "Docadvisor"
                    , desc: "Home page design"
                    , loc: "DocAdvisor1"
                }
                , {
                    name: "Docadvisor"
                    , desc: "Search page design"
                    , loc: "DocAdvisor2"
                }
                , {
                    name: "Docadvisor"
                    , desc: "App design"
                    , loc: "DocAdvisor3"
                } ]
        }
        , {
            name: 'Alpin'
            , type: 'UI/UX | Developer'
            , keywords: 'Website UX UI Front-end Developer Design'
            , descr: ''
            , link: 'www.Alpin.be'
            , images: [{
                    name: "Alpin"
                    , desc: "Home page"
                    , loc: "Alpin1"
                },
                       {
                    name: "Alpin"
                    , desc: "Event page"
                    , loc: "Alpin2"
                },
                       {
                    name: "Alpin"
                    , desc: "Climbing tech page"
                    , loc: "Alpin3"
                },
                 ]
        }
        , {
            name: 'Case Design'
            , type: 'Product Design | 3D'
            , keywords: '3D Product Design cinema4d Photoshop Case Clean'
            , descr: ''
            , link: ''
            , images: [{
                    name: "Case Design"
                    , desc: ""
                    , loc: "Case Design1"
                },
                       {
                    name: "Case Design"
                    , desc: ""
                    , loc: "Case Design2"
                },
                        {
                    name: "Case Design"
                    , desc: ""
                    , loc: "Case Design3"
                }
                 ]
        }
        , {
            name: 'Mayan Death Robots'
            , type: 'FX | 2D artist '
            , keywords: 'games 2d concept art unity character Design animation adobe photoshop'
            , descr: ''
            , link: 'www.mayandeathrobots.com'
            , images: [{
                    name: ""
                    , desc: ""
                    , loc: "mdr1"
                },
                       {
                    name: ""
                    , desc: ""
                    , loc: "mdr2"
                },
                        {
                    name: ""
                    , desc: ""
                    , loc: "mdr3"
                }, {
                    name: ""
                    , desc: ""
                    , loc: "mdr4"
                },
                        {
                    name: ""
                    , desc: ""
                    , loc: "mdr5"
                },
                 ]
        },
        {
            name: 'Katoen Natie'
            , type: 'Movie Producer'
            , keywords: 'GoPRO Movie Director Adobe After Effects Premiere Color Grading Editing Filming '
            , descr: ''
            , link: ''
            , images: [{
                    name: "Katoen Natie"
                    , desc: "Loading Video"
                    , loc: "Katoen Natie"
                }]
            , movies: [{
                    name: "Katoen Natie"
                    , link: "https://www.youtube.com/embed/kULXJpH-2Ps"
                    
                }
                 ]
        }
        ,{
            name: 'Orange Box'
            , type: '3D Animation'
            , keywords: '3D Product Design cinema4d Photoshop Case Clean'
            , descr: ''
            , link: ''
            , images: [{
                    name: "Orange Box"
                    , desc: "Loading Video"
                    , loc: "Orange Box"
                }]
            , movies: [{
                    name: "Orange Box"
                    , link: "https://www.youtube.com/embed/RYYkBwsNXOA"
                    
                }
                 ]
        }
        ,
        {
            name: '3D Projects'
            , type: '3D'
            , keywords: '3D Product Design cinema4d Photoshop Case Clean'
            , descr: ''
            , link: ''
            , images: [{
                    name: "Minimal Autumn"
                    , desc: ""
                    , loc: "3D1"
                },
                       {
                    name: "Red Cross Ad"
                    , desc: ""
                    , loc: "3D2"
                },
                        {
                    name: "VW Golf Mark I"
                    , desc: ""
                    , loc: "3D3"
                },
                        {
                    name: "Rock Sunset"
                    , desc: "Zbrush render"
                    , loc: "3D4"
                },
                        {
                    name: "Polygon Forest"
                    , desc: "Game environment"
                    , loc: "3D5"
                },
                        {
                    name: "Zhouzhuang"
                    , desc: "Game environment"
                    , loc: "3D6"
                }
                 ]
        }
        


    ];

    var detailPics = [];
    var stack = new Array();
    stack.push("/");
    var prevPage;
    var scrolled = false;
    var currentproject;
    var currentpage;

    var factory = {};
    factory.getProjects = function () {
        return projects;
    }

    factory.addPercent = function (name) {
        var temp_name = name.replace(/ /g, "%20");
        return temp_name;

    }

    factory.removePercent = function (name) {
        var temp_name = name.replace(/%20/g, " ");
        return temp_name;

    }

    factory.setPrevPage = function (page) {

        prevPage = page;

    }

    factory.setStack = function (page) {

        stack.push(page);

    }
    
    factory.setCurrentProj = function (project) {

        currentproject = project;

    }
    
    factory.getCurrentProj = function () {

        return currentproject;

    }
    
    factory.setCurrentPage = function (page) {

        currentpage = page;

    }
    
    factory.getCurrentPage = function () {

        return currentpage;

    }
    

    factory.checkStack = function (page) {
        var length = stack.length;
        if (stack[length - 2] == page) {
            stack.pop();
            stack.pop();
        }
        for (var i = 0; i < length; i++) {

            if (stack[i] == "") {
                stack.splice(i, 1);
            }

        }
    };

    factory.getPrevPage = function () {
        var last_elem = stack.length - 1;
        return stack[last_elem];
    }

    factory.setScroll = function (bool) {
        scrolled = bool;

    }

    factory.getScroll = function () {

        return scrolled;
    }

    factory.getDetailPics = function (project) {

        return detailPics = project.images;
    }
    
    factory.getDetailMovies = function (project) {

        return detailMovies = project.movies;
    }
    
    

    return factory;
});

animateApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

animateApp.controller('projectBar', function ($scope, datafactory, animations) {
    var lv_projectList = datafactory.getProjects();
    var lv_currentProject;
    var scrollPage;
    var check = false;
    var hide;

    $scope.navigate = 'Projects';
    $scope.projectList = lv_projectList;

    $scope.$on("$routeChangeStart", function getstart() {

        datafactory.setStack(location.pathname);
        if ($scope.projectClass == 'projectView') {
            hide = document.getElementsByClassName("toHide");
            for (var i = 0; i < hide.length; i++) {
                hide[i].style.display = "none";
            }
        }


    });

    $scope.$on("$routeChangeSuccess", function view() {
       var navbar = document.getElementById("myNavbar");
        if(navbar.className == "navbar-collapse navbar-right collapse in")navbar.setAttribute('class',"navbar-collapse navbar-right collapse");
       var arrows = document.getElementsByClassName("arrows");
        for (var i = 0; i < arrows.length; i++) {
                arrows[i].style.display = "none";}

        if (location.pathname == '/') {
            animations.viewHome();
            $scope.projectClass = 'homeView';
            $scope.navigate = 'Projects';
            datafactory.setCurrentPage('home');
            
        }
        if (location.pathname  == '/projects') {
            animations.viewProjects();
            $scope.projectClass = 'projectView';
            $scope.navigate = 'Projects';
            datafactory.setCurrentPage('projects');
           
        };
        if (location.pathname  == '/contact') {
            animations.viewProjects();
            $scope.projectClass = 'contactView';
            $scope.navigate = 'Contact';
            datafactory.setCurrentPage('contact');
        };
        if (location.pathname  == '/about') {
            animations.viewProjects();
            $scope.projectClass = 'aboutView';
            $scope.navigate = 'About';
            datafactory.setCurrentPage('about');
           
        };
        for (var i = 0; i < lv_projectList.length; i++) {


            var overviewUrl = '/projects/' + datafactory.addPercent(lv_projectList[i].name);
            var detailUrl = '/projects/' + datafactory.addPercent(lv_projectList[i].name) + '/details';
            var activeList = document.getElementById(datafactory.removePercent(lv_projectList[i].name));
            activeList.className = '';
            if (location.pathname == detailUrl) {

                $scope.currentProject = lv_projectList[i];
                animations.viewProjectDetail();
                $scope.projectClass = 'projectDetailView';
                $scope.navigate = 'back';
                datafactory.setCurrentProj = lv_projectList[i];
                datafactory.setCurrentPage('details');
                
            
            }
            if (location.pathname == overviewUrl) {
                $scope.currentProject = lv_projectList[i];
                activeList.className = 'active';
                $scope.projectClass = 'projectView';
                $scope.navigate = 'Projects';
                animations.viewProjects();
                
                datafactory.setCurrentPage('overview');
                
                    for (var a = 0; a < arrows.length; a++) {
                arrows[a].style.display = "block";
            }
            }
        }

    });




});

animateApp.controller('footer', function ($scope, datafactory) {
    
    $scope.navTitle = 'View Projects';
    $scope.$on("$routeChangeSuccess", function view() {

        datafactory.checkStack(location.pathname);
        $scope.previousPage = datafactory.getPrevPage();
        var curproj = datafactory.getCurrentProj();
        var curpage = datafactory.getCurrentPage();
        $scope.projClass = ""
        $scope.buttloc = "";
        if (curpage == "home") {
            $scope.projClass = "home"
            $scope.buttloc = "#projects/DocAdvisor";
            $scope.navTitle = 'View Projects';
            
        }
        
        if (curpage == "details") {
            $scope.projClass = "details"
            $scope.buttloc = '#/projects/' + datafactory.addPercent(curproj.name) + '/details';
            $scope.navTitle = curproj.name;
            
        }
        
        
    });
});


animateApp.controller('mainController', function ($scope, datafactory, animations) {



    $scope.pageClass = 'page-home';
    $scope.projects = [];
    datafactory.setCurrentPage('home');
    
});

animateApp.controller('aboutController', function ($scope, animations) {
    $scope.pageClass = 'page-about';
    
    var charts = document.getElementsByClassName('progress-pie-chart');
    var percent;
    var color;
    var deg;
    for(var i = 0;i<charts.length;i++){
        
        percent = parseInt(charts[i].getAttribute("data-percent"));
        color =  charts[i].getAttribute("data-color");
        deg = 360*percent/100;
        
        if(percent > 50){
        charts[i].className += " gt-50";
        charts[i].style.background = color;
        }
        var process = charts[i].getElementsByClassName('ppc-progress-fill');
        process[0].style.transform = 'rotate('+deg+'deg)';
        process[0].style.background = color;
        
        
    }

});

animateApp.controller('contactController', function ($scope, animations) {
    $scope.pageClass = 'page-contact';

});

animateApp.controller('projectsOverviewController', function ($scope, datafactory, $routeParams, $location) {
    $scope.pageClass = 'page-projectOverview';

    var page = $routeParams.projectOverview;
    var projectList = datafactory.getProjects();
    var scrollPage = document.getElementById("scroll");
    var current = 0;
    var scrollprev = 500;
    scrollPage.scrollTop = 500;
    var first = true;
    init();

    function init() {
        for (var i = 0; i < projectList.length; i++) {

            if (projectList[i].name == page) {

                $scope.project = projectList[i];


            }
        }
    }




    scrollPage.onscroll = function () {
        if (first == true) {
            console.log(scrollPage.scrollTop);
            init();
            if (scrollPage.scrollTop - scrollprev > 1 && first == true) {
                if (current < projectList.length - 1) {
                    ++current;
                    first = false;
                    scrollPage.setAttribute("id", "scrollprevious");
                    var path = '/projects/' + datafactory.addPercent(projectList[current].name); + '/details';
                    location.href = path;
                    console.log(scrollPage.scrollTop - scrollprev);
                }
            }

            if (scrollPage.scrollTop - scrollprev < -1 && first == true) {
                if (current > 0) {
                    --current;
                    first = false;
                    scrollPage.setAttribute("id", "scrollprevious");
                    var path = '/projects/' + datafactory.addPercent(projectList[current].name); + '/details';
                    location.href = path;
                    console.log(scrollPage.scrollTop - scrollprev);
                }
            }

        }

    };

});

animateApp.controller('projectsDetailController', function ($scope, datafactory, $routeParams) {
    $scope.pageClass = 'page-projectOverview';
    


    var page = $routeParams.projectOverview;
    var projectList = datafactory.getProjects();
    var pics;
    var movies
    

    for (var i = 0; i < projectList.length; i++) {

        if (projectList[i].name == page) {

            $scope.project = projectList[i];
            pics = datafactory.getDetailPics(projectList[i]);
            $scope.detailPics = pics;
            if(pics == 'undefined'){
                var pictures = document.getElementById("projectspics");
                pictures.style.display = "none";
            }
            movies = datafactory.getDetailMovies(projectList[i]);
            $scope.detailMovies = movies;
            if(movies == 'undefined'){
                var movies = document.getElementById("projectsmovs");
                movies.style.display = "none";
            }
        }
    }

});

animateApp.controller('projectsController', function ($scope, datafactory, animations) {
    init();

    function init() {
        $scope.pageClass = 'page-projects';
        $scope.projects = datafactory.getProjects();
    }



});

animateApp.controller('nav', function ($scope, datafactory, $routeParams, $location) {
            var projectList;
            var page;

            $scope.$on("$routeChangeSuccess", function navigate() {
                projectList = datafactory.getProjects();
                page = $routeParams.projectOverview;
                for (var i = 0; i < projectList.length; i++) {

                    if (projectList[i].name == page) {


                        if (i == 0) {
                            $scope.projectLeft = projectList[projectList.length - 1].name;
                            $scope.projectRight = projectList[i + 1].name;
                        } else if (i == projectList.length - 1) {
                            $scope.projectLeft = projectList[i - 1].name;
                            $scope.projectRight = projectList[0].name;

                        } else if (i > 0 || i < projectList.length - 1) {
                            $scope.projectLeft = projectList[i - 1].name;
                            $scope.projectRight = projectList[i + 1].name;

                        }

                    }
                }
            });
            });
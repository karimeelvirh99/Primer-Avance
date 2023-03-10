// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/genero/',
    	url: 'genero.html',
    	name: 'genero',
  		},
		{
		path: '/audiolibros/',
    	url: 'audiolibros.html',
    	name: 'audiolibros',
  		},
		{
		path: '/vendidos/',
    	url: 'vendidos.html',
    	name: 'vendidos',
  		},
		{
		path: '/nuevos/',
    	url: 'nuevos.html',
    	name: 'nuevos',
  		},
		{
		path: '/genero-a/',
    	url: 'genero-a.html',
    	name: 'genero-a',
  		},
		{
		path: '/vendidos-a/',
    	url: 'vendidos-a.html',
    	name: 'vendidos-a',
  		},
		{
		path: '/nuevos-a/',
    	url: 'nuevos-a.html',
    	name: 'nuevos-a',
  		},
		{
		path: '/categorias/',
    	url: 'categorias.html',
    	name: 'categorias',
  		},
		{
		path: '/privacidad/',
    	url: 'privacidad.html',
    	name: 'privacidad',
  		},
		{
		path: '/condiciones/',
    	url: 'condiciones.html',
    	name: 'condiciones',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		}
		
	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});






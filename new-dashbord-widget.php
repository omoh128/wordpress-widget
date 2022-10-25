<?php
/**
 * Plugin Name:       New dashbord widget
 * Plugin URI:        https:/omomohwebsite.com
 * Description:      Simple widget for WordPress admin dashboard.
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * php version :       7
 * Author:            Omomoh Agiogu
 * Author URI:        https://omomohwebsite.com/
 * 
 */


if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Custom_Dashboard_Widgets {
    public function __construct() {
        $this->init();
    }
    
    public function init(){
        add_action( "wp_dashboard_setup", array( $this, "my_custom_dashboard_widgets" ) );
    }
    
    public function my_custom_dashboard_widgets() {
        wp_add_dashboard_widget( "custom_help_widget", "WordPress Widget", array( $this, "custom_dashboard" ) );
    }
    
    public function custom_dashboard() {
        require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
        
    }
}
/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
add_action( 'admin_enqueue_scripts', 'newidget_admin_enqueue_scripts' );


function newidget_admin_enqueue_scripts() {
    wp_enqueue_style( 'newwidget-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'newwidget-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}

$custom_dashboard_widgets = new Custom_Dashboard_Widgets();
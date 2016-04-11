/* ----------------------------------------------------------------------------
 * Easy!Appointments - Open Source Web Scheduler
 *
 * @package     EasyAppointments
 * @author      A.Tselegidis <alextselegidis@gmail.com>
 * @copyright   Copyright (c) 2013 - 2016, Alex Tselegidis
 * @license     http://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        http://easyappointments.org
 * @since       v1.0.0
 * ---------------------------------------------------------------------------- */

/**
 * This namespace contains functions that implement the book appointment page
 * functionality. Once the initialize() method is called the page is fully
 * functional and can serve the appointment booking process.
 *
 * @namespace FrontendTenant
 */
var FrontendTenantList = {
    /**
     * This method initializes the book appointment page.
     *
     * @param {bool} bindEventHandlers (OPTIONAL) Determines whether the default
     * event handlers will be binded to the dom elements.
     * @param {bool} manageMode (OPTIONAL) Determines whether the customer is going
     * to make  changes to an existing appointment rather than booking a new one.
     */
    initialize: function (bindEventHandlers) {
        if (bindEventHandlers === undefined) {
            bindEventHandlers = true; // Default Value
        }






        /**
         function onFinish() {
         $('#wizard').smartWizard('showMessage', 'Finish Clicked');
         alert('Finish Clicked');
         console.log('finished');
         }
         **/


        // Bind the event handlers (might not be necessary every time
        // we use this class).
        if (bindEventHandlers) {
            FrontendTenantList.bindEventHandlers();
        }

       
       FrontendTenantList.filterTenant();

       $('#hello').click(function (event) {
           window.location.href =  GlobalVariables.baseUrl+'index.php/user/tenant_profile/'; 
           
       });


    },
    /**
     * This method binds the necessary event handlers for the book
     * appointments page.
     */
    bindEventHandlers: function () {



        $('#searchButton').click(function (event) {

            key = $('#searchBoxInput').val();
            
            //window.location.href =  GlobalVariables.baseUrl+'index.php/home/ajax_get_tenants/'+key;
            window.location.href =  GlobalVariables.baseUrl+'index.php/user/our_tenant/'+ key; 
            //FrontendTenantList.filterTenant();
//            var postData = {
//                'csrfToken': GlobalVariables.csrfToken
//            };
//            var postUrl = GlobalVariables.baseUrl + 'index.php/user/our_tenant/' + key;
//            
//            $.post(postUrl, postData, function (response) {
//                
//                //window.location.href =  GlobalVariables.baseUrl+'index.php/user/our_tenant';  
//                console.log(response);
//
//
//            }, 'json');


        });




    },
    
    filterTenant: function(){
        
        $.each(GlobalVariables.tenantList, function (index, tenant) {
            console.log('tenant',tenant);
            var html =
                    '<div class="col-lg-4" id="'+tenant.id_tenant+'">' +
                    '<div class="contact-box">' +
                    '<a href="'+GlobalVariables.baseUrl+'index.php/user/tenant_profile/'+tenant.id_tenant+'">' +
                    '<div class="col-sm-4">' +
                    '<div class="text-center">' +
                    '<img alt="image" class="img-circle m-t-xs img-responsive" src="'+GlobalVariables.baseUrl+'assets/img/Muhammad.jpg">'  +
                    '<div class="m-t-xs font-bold">Graphics designer</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-sm-8">' +
                    '<h3><strong>'+tenant.first_name+' '+tenant.last_name+'</strong></h3>' +
                    ' <p><i class="fa fa-map-marker"></i> '+tenant.city+'</p>' +
                    '<address>' +
                    '<strong>'+tenant.email+'</strong><br>' +
                    ''+tenant.city+'<br>' +
                    ''+tenant.address+'<br>' +
                    '<abbr title="Phone"><i class="fa fa-phone"></i></abbr> '+tenant.phone_number+'<br>' +
                    '<abbr title="Phone"><i class="fa fa-mobile"></i></abbr> '+tenant.mobile_number+'' +
                    '</address>' +
                    '</div>' +
                    '<div class="clearfix"></div>' +
                    '</a>' +
                    '</div>' +
                    '</div>';




            $('#tenantList').append(html);
        });

        
        
    }


};


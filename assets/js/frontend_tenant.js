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
var FrontendTenant = {
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
            FrontendTenant.bindEventHandlers();
        }










    },
    /**
     * This method binds the necessary event handlers for the book
     * appointments page.
     */
    bindEventHandlers: function () {




//        $(document).on('click', '.next', function (e) {
//            $('.form-group .required').each(function () {
//                if ($(this).val() === '') {
//                    $(this).parents('.form-group').addClass('has-error');
//                    missingFields = true;
//                    
//                }
//
//            });
//           e.preventDefault();
//        });
//        var k = 1;
//
//
//
//
//        $('#myWizard .next').attr("id", k);
//
//        $('#' + k).click(function (e) {
//
//
//            missingFields = false;
//            //alert('hello');
//            $('.form-group .required').each(function () {
//                if ($(this).val() === '') {
//                    $(this).parents('.form-group').addClass('has-error');
//                    missingFields = true;
//                    e.preventDefault();
//
//                }
//
//            });
//            if (missingFields === true) {
//                e.preventDefault();
//                //$('#myWizard').easyWizard('prevStep');
//            }
//        });
//
//
//
//
//        $('#myWizard .next').bind('click', function (e) {
//            k++;
//            console.log(k);
//            $('#myWizard .next').attr("id", k);
//            //e.preventDefault();
//
//        });
//        $('#myWizard .prev').bind('click', function (e) {
//            k--;
//            $('#myWizard .next').attr("id", k);
//            //e.preventDefault();
//
//        });


        $('#inscription-form .required').each(function () {
            $(document).on("keypress", ".required", function () {
                $(this).parents('.form-group').removeClass('has-error');
            });

        });



        $(document).on("keypress", "#inputMobileNumber", function (event) {
            // console.log(isNaN(String.fromCharCode(event.which)));

            if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
                event.preventDefault();
            }
        });

        $(document).on("keypress", "#inputPhoneNumber", function (event) {
            // console.log(isNaN(String.fromCharCode(event.which)));

            if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
                event.preventDefault();
            }
        });


        $('#button-new-tenant').click(function (event) {

            var missingFields = false;

            $('#inscription-form .required').each(function () {
                if ($(this).val() == '') {
                    $(this).parents('.form-group').addClass('has-error');


                    missingFields = true;

                }

            });
            if (missingFields == true)
            {
                return false;
            }
            if ($('#inputPassword').val() !== $('#inputConfirmPassword').val())
            {
                $('.alert').text('réécrire votre mot de passe');
                $('.alert').removeClass('hidden').addClass('alert-danger');
                //return false;

            }





            var formData = new Object();
            formData['admin'] = {
                'username': $('#inputUsername').val(),
                'last_name': $('#inputNom').val(),
                'first_name': $('#inputPrenom').val(),
                'password': $('#inputPassword').val(),
                'email': $('#inputEmail').val(),
                'phone_number': $("#inputPhoneNumber").intlTelInput("getNumber"),
                'address': $('#inputAdress').val(),
                'city': $('#inputCity').val()

            };
            formData['services'] = {
                'name': $('#inputServicename').val(),
                'duration': $('#inputDuration').val(),
                'price': $('#inputPrice').val(),
                'categorie': $('#inputCategoriename').val()

            };
            formData['provider'] = {
                'role': $('#inputPersonnelType').val(),
                'username': $('#inputPersonnelUsername').val(),
                'last_name': $('#inputPersonnelNom').val(),
                'first_name': $('#inputPersonnelPrenom').val(),
                'password': $('#inputPersonnelPassword').val(),
                'email': $('#inputPersonnelEmail').val(),
                'phone_number': $("#inputPersonnelPhoneNumber").intlTelInput("getNumber"),
                'address': $('#inputPersonnelAdress').val(),
                'city': $('#inputPersonnelCity').val()

            };
            formData['settings'] = {
                'company_name': $('#inputNomSociete').val(),
                'company_email': $('#inputEmailSociete').val(),
                'company_link': $('#inputLinkSociete').val(),
                'company_domain': $('#inputOccupationSociete').val()

            };
            console.log(formData);
            var postData = {
                'csrfToken': GlobalVariables.csrfToken,
                'admin': JSON.stringify(formData['admin']),
                'settings': JSON.stringify(formData['settings'])
            };
            var postUrl = GlobalVariables.baseUrl + 'index.php/new_tenant/ajax_add_tenant';

            //$('.alert.inscrit').addClass('hidden');

            $.post(postUrl, postData, function (response) {
                ////////////////////////////////////////////////////////////

                console.log(response);

                if (response == GlobalVariables.AJAX_SUCCESS) {
                    window.location.href = GlobalVariables.baseUrl + 'index.php/backend';
                    ;
                } else {
                    json = JSON.parse(response.exceptions);
                    $('.alert').text(json.message);
                    $('.alert').removeClass('hidden')
                            .addClass('alert-danger');

                }

                ////////////////////////////////////////////////////////////
            }, 'json');



        });
    }


};

<link
    rel="stylesheet"
    type="text/css"
    href="<?php echo $this->config->item('base_url'); ?>assets/ext/intl-tel-input/intlTelInput.css">

<script
    type="text/javascript"
src="<?php echo $this->config->item('base_url'); ?>assets/ext/intl-tel-input/intlTelInput.js"></script>  

<script type="text/javascript"
src="<?php echo $base_url; ?>assets/js/frontend_tenant.js"></script>

<style type="text/css">

    .not-logged-avatar {
        width: 100px;
        margin: 0px auto;
        display: block;
        margin-bottom: 20px;
        text-align: center;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    }




    .full-content-center {
        width: 100%;
        max-width: 600px;
        margin: 6% auto;
        text-align: center;
    }
    .full-content {
        background: #E5E9EC;
    }
    .full-content-center h1 {
        font-size: 150px;
        font-family: "Open Sans";
        line-height: 150px;
        font-weight: 700;
        color: #252932;
    }

    .login-wrap {
        margin: 80px 10%;
        text-align: left;
        background: rgba(0,0,0,0.1);
        padding: 20px 20px;
        color: #fff;
    }

    .login-wrap i {
        margin-right: 5px;
    }
    .login-wrap .checkbox {
        margin-left: 0;
        padding-left: 0;
    }
    .login-wrap .btn-block {
        margin: 5px 0;
    }
    .login-wrap .login-input {
        position: relative;
    }
    .login-wrap .login-input .text-input {
        padding-left: 30px;
    }
    .login-wrap .login-input i.overlay {
        position: absolute;
        left: 10px;
        top: 10px;
        color: #aaa;
    }
    .checkbox{

        color : #53a585 ;
    }
    a.forgot-password{
        color : #53a585 !important;

    }
    p{
        color : black !important;
    }
    label{
        color : #53a585 !important;

    }
    .intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name {
        color : #53a585 !important; 
    }


</style>


<script type="text/javascript">
    var GlobalVariables = {
        'csrfToken': <?php echo json_encode($this->security->get_csrf_hash()); ?>,
        'baseUrl': <?php echo '"' . $base_url . '"'; ?>,
        'destUrl': <?php echo '"' . $dest_url . '"'; ?>,
        'destUrlCustomer': <?php echo '"' . $dest_url_customer . '"'; ?>,
        'AJAX_SUCCESS': 'SUCCESS',
        'AJAX_FAILURE': 'FAILURE'
    };

    var EALang = <?php echo json_encode($this->lang->language); ?>;

    $(document).ready(function () {


        FrontendTenant.initialize(true);


        /**
         * Event: sign uo Button "Click"
         *
         * Make an ajax call to the server and check whether the user's informations  are right.
         * If yes then  add him to database and redirect him to his desired page,
         * otherwise display a message.
         */



       




        $('#button-inscrit').click(function (event) {



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



            var formData = new Object();

            formData['customer'] = {
                'last_name': $('#last-name').val(),
                'first_name': $('#first-name').val(),
                'password': $('#newpassword').val(),
                'email': $('#email').val(),
                'phone_number': $("#phone-number").intlTelInput("getNumber"),
                'address': $('#address').val(),
                'city': $('#city').val(),
                'zip_code': $('#zip-code').val(),
                'src_photo': $('#default-image').val()

            };

            var postData = {
                'csrfToken': GlobalVariables.csrfToken,
                'post_data': formData
            };
            var postUrl = GlobalVariables.baseUrl + 'index.php/user/inscription';

            $('.alert.inscrit').addClass('hidden');

            $.post(postUrl, postData, function (response) {
                ////////////////////////////////////////////////////////////

                console.log(response);

                if (response == GlobalVariables.AJAX_SUCCESS) {
                    window.location.href = GlobalVariables.baseUrl + 'index.php/home';
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
    });
</script>








<div class="container login-page">
    <div class="full-content-center">

        <div class="login-wrap animated flipInX">
            <div class="login-block">

                <h3><?php echo $this->lang->line('step_three_title'); ?></h3>
                


                <form id ="inscription-form" action="appointments/book">
                    <div id="wizard-frame-3" class="wizard-frame" > 
                        <div class="frame-container">
                            <div class="alert"></div>
                            <div class="frame-content row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="inputUsername">Nom utilisateur</label>
                                        <input type="text" id="inputUsername" placeholder="Nom utilisateur" class="required form-control">
                                    </div>

                                    <div class="form-group">
                                        <label for="inputNom">Nom</label>
                                        <input type="text" id="inputNom" placeholder="Nom" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPrenom">Prénom</label>
                                        <input type="text" id="inputPrenom" placeholder="Prenom" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail">Adresse email</label>
                                        <input type="email" id="inputEmail" placeholder="Adresse email" class="required form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword">Mot de passe</label>
                                        <input type="password" id="inputPassword" placeholder="Mot de passe" class="required form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputConfirmPassword">Confirmer mot de passe</label>
                                        <input type="password" id="inputConfirmPassword" placeholder="Confirmer mot de passe" class="required form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPhoneNumber">Numéro du telephone</label><br>
                                        <input type="tel" id="inputPhoneNumber" placeholder="Numéro du telephone" class="required form-control" >
                                    </div>
                                    <div class="form-group">
                                        <label for="inputMobileNumber">Numéro du mobile</label><br>
                                        <input type="tel" id="inputMobileNumber" placeholder="Numéro du telephone mobile" class="form-control" >
                                    </div>
                                </div>

                                <div class="col-md-6">


                                    <div class="form-group">
                                        <label for="inputAdress">Adresse</label>
                                        <input type="text" id="inputAdress" placeholder="Adresse" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputCity">Ville</label>
                                        <input type="text" id="inputCity" placeholder="Ville" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputCity">Code postal</label>
                                        <input type="text" id="inputCity" placeholder="Code postal" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputOccupationSociete">Domaine de travail</label>
                                        <input type="text" id="inputOccupationSociete" placeholder="Domaine de travail" class="required form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputNomSociete">Nom Société</label>
                                        <input type="text" id="inputNomSociete" placeholder="Nom société" class="required form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmailSociete">Adresse email Société</label>
                                        <input type="text" id="inputEmailSociete" placeholder="Adresse email Société" class="required form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputLinkSociete">Lien Société</label>
                                        <input type="url" id="inputLinkSociete" placeholder="Lien Société" class="required form-control">
                                    </div>
                                </div>
                                

                            </div>

                        </div>

                        <div class="command-buttons-inscrit text-right">

                            <button type="button" id="button-new-tenant" class="btn button-new-tenant btn-primary" >
                                Inscription
                                <span class="glyphicon glyphicon-ok"></span>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    </div>
</div>

<script type="text/javascript">
    $("#inputPhoneNumber").intlTelInput({
        nationalMode: true,
        utilsScript: "<?php echo $this->config->item('base_url'); ?>assets/ext/intl-tel-input/utils.js", // just for formatting/placeholders etc
        autoPlaceholder: false
    });
    $("#inputMobileNumber").intlTelInput({
        nationalMode: true,
        utilsScript: "<?php echo $this->config->item('base_url'); ?>assets/ext/intl-tel-input/utils.js", // just for formatting/placeholders etc
        autoPlaceholder: false
    });

</script>
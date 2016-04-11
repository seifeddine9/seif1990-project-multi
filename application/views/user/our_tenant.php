<style>

/*css search box*/
    #searchBox{
        
        padding: 30px;
    }

    #searchBoxInput{
        font-family: Verdana, sans-serif;
        font-size: 16px;
        font-style: oblique;
    }



</style>


<script type="text/javascript"
src="<?php echo $base_url; ?>assets/js/frontend_tenantList.js"></script>

<script type="text/javascript">
    var GlobalVariables = {
        csrfToken: <?php echo json_encode($this->security->get_csrf_hash()); ?>,
        baseUrl: <?php echo '"' . $base_url . '"'; ?>,
        AJAX_SUCCESS: 'SUCCESS',
        AJAX_FAILURE: 'FAILURE',
        tenantList: <?php echo json_encode($tenants); ?>,
    };
    $(document).ready(function () {
        
        FrontendTenantList.initialize(true);

        
    });


</script>

<section id="searchBox">
    <div class="input-group" >
        <input type="text" placeholder="Chercher un médecin ou un service " class="input form-control" id="searchBoxInput">
        
        
        <span class="input-group-btn">
            <button type="button" class="btn btn btn-primary" id="searchButton"> <i class="fa fa-search"></i> Chercher</button>
        </span>
    </div>
</section>













<hr>


<!--<div id="page-wrapper" > -->
    <div class="wrapper wrapper-content animated ">
        <div class="row" id="tenantList">
            </div>
    </div>
<!--</div>-->



<!--<script
    type="text/javascript"
src="<?php echo $this->config->item('base_url'); ?>assets/ext/Inspinia/inspinia.js"></script>
<script
    type="text/javascript"
src="<?php echo $this->config->item('base_url'); ?>assets/ext/Inspinia/pace.min.js"></script>-->

<link
    rel="stylesheet"
    type="text/css"
    href="<?php echo $this->config->item('base_url'); ?>assets/ext/Inspinia/animate.css">
<link
    rel="stylesheet"
    type="text/css"
    href="<?php echo $this->config->item('base_url'); ?>assets/ext/Inspinia/style.css">
jQuery(document).ready( ($) => {
    console.log($( "#magic-login-mail-create-login-link" ));
    $( "#magic-login-mail-create-login-link" ).on( "click", (self) => {
        const create_button = $( "#magic-login-mail-create-login-link" );
        const ajax_url = create_button.data( "url" );
        const uid = create_button.data( "uid" );
        console.log(ajax_url);
        $.post(ajax_url, {
            action: "magic_login_mail_create_link",
            uid: uid
        }).then(res => {
            const json = JSON.parse( res );
            const notice_class = json.success ? 'notice-success' : 'notice-error';
            $('<div>', {
                class: 'notice inlines ' + notice_class,
                html: $( '<p>', {html: json.data}),
            }).insertBefore( create_button );
        });;
    });
});

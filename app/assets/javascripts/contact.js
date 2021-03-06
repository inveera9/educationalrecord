$(document).ready(function() {
$('#new_message').bootstrapValidator({
    framework: 'bootstrap',
    fields: {
        'message[name]': {
            validators: {
                notEmpty: {
                    message: 'Full Name is required'
                },
                stringLength: {
                    message: 'Name must be less than 50 characters',
                    max: 50
                }
            }
        },
        'message[email]': {
            validators: {
                notEmpty: {
                    message: 'Email is required'
                },
                regexp: {
                    regexp: '^[^\.][^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                    message: 'This is not a valid email address'
                }
            }
        },
        'message[phnumber]': {
            validators: {
                stringLength: {
                    message: 'Phone Number should be less than 15 characters',
                    max: 15
                },
                phone: {
                    country: 'US',
                    message: 'The value is not valid %s phone number'
                }
            }
        },
        'message[content]': {
            validators: {
                stringLength: {
                    message: 'Description should be less than 160 characters',
                    max: 160
                }
            }
        }
    }
});
})
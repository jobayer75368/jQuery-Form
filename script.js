$(document).ready(function () {
    $("#main_form").submit(function (e) {
        e.preventDefault()

        $inputNameValue = $(".name").val()
        $inputEmailValue = $(".email").val()
        $inputSubjectValue = $(".subject").val()
        $TextareaValue = $("textarea").val()
        let isValue = true;


        if ($inputNameValue == "") {
            $(".name_alert").text("Please fill out the name field!")
            isValue = false
        }
        else {
            $(".name_alert").text("")
        }

        if ($inputEmailValue == "") {
            $(".email_alert").text("Please fill out the email field!")
            isValue = false
        }
        else {
            $(".email_alert").text("")
        }

        if ($inputSubjectValue == "") {
            $(".subject_alert").text("Please fill out the subject field!")
            isValue = false
        }
        else {
            $(".subject_alert").text("")
        }

        if ($TextareaValue == "") {
            $(".msg_alert").text("Please fill out the message field!")
            isValue = false
        }
        else {
            $(".msg_alert").text("")
        }

        if (isValue) {
            alert(` Name: ${$inputNameValue} \n Email: ${$inputEmailValue} \n Subject: ${$inputSubjectValue}\n Message: ${$TextareaValue}`)
            $(".name").val("")
            $(".email").val("")
            $(".subject").val("")
            $("textarea").val("")
        }
    })
})
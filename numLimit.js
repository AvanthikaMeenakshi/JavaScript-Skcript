$("#addText").keyup(function () {
            var text = $(this).val();
            var textLength = text.length;
            var maxLength = 120;
            if (textLength >= maxLength) {
                $("#exceed").text(" You're about to exceed the limit ");;
            }
            else {
                $("#number").text((maxLength - textLength) + " characters left.");

            }
        });
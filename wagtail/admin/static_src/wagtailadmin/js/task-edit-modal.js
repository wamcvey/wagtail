TASK_EDIT_MODAL_ONLOAD_HANDLERS = {
    'chooser': function(modal, jsonData) {
        $('form.task-edit', modal.body).on('submit', function() {
            var formdata = new FormData(this);

            $.ajax({
                url: this.action,
                data: formdata,
                processData: false,
                contentType: false,
                type: 'POST',
                dataType: 'text',
                success: modal.loadResponseText,
                error: function(response, textStatus, errorThrown) {
                    var message = jsonData['error_message'] + '<br />' + errorThrown + ' - ' + response.status;
                    $('form.task-edit').append(
                        '<div class="help-block help-critical">' +
                        '<strong>' + jsonData['error_label'] + ': </strong>' + message + '</div>');
                }
            });

            return false;
        });
    },
    'task_chosen': function(modal, jsonData) {
        modal.respond('taskChosen', jsonData['result']);
        modal.close();
    }
};

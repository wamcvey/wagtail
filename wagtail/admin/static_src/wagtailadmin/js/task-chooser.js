function createTaskChooser(id) {
    var chooserElement = $('#' + id + '-chooser');
    var taskName = chooserElement.find('.name');
    var input = $('#' + id);
    var editAction = chooserElement.find('.action-edit');

    $('.action-choose', chooserElement).on('click', function() {
        ModalWorkflow({
            url: window.chooserUrls.taskChooser,
            onload: TASK_CHOOSER_MODAL_ONLOAD_HANDLERS,
            responses: {
                taskChosen: function(data) {
                    input.val(data.id);
                    taskName.text(data.name);
                    chooserElement.removeClass('blank');
                    editAction.data('taskEditUrl', data.edit_url);
                }
            }
        });
    });

    $('.action-edit', chooserElement).on('click', function() {
        ModalWorkflow({
            url: $(this).data('taskEditUrl'),
            onload: TASK_EDIT_MODAL_ONLOAD_HANDLERS,
            responses: {
                taskChosen: function(data) {
                    input.val(data.id);
                    taskName.text(data.name);
                    chooserElement.removeClass('blank');
                    editAction.data('taskEditUrl', data.edit_url);
                }
            }
        });
    });
}

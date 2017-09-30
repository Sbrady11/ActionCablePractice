App.room = App.cable.subscriptions.create("RoomChannel", {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {
        $('#messages').append(data['message']);
        return $('#messages2').append(data['message']);
    },
    speak: function(message) {
        return this.perform('speak', {
            message: message
        });
    }
});

$(document).on('click', '[data-behavior~=room_speaker]', function(event) {
    let text = $(this).siblings('textarea').val();
    App.room.speak(text);
    console.log(text);
    event.preventDefault();
});
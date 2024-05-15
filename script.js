// This will create a comment, when the main submit button is clicked.
$("#submitComment").click(function() {
    const name = $("#displayName"),
        comment = $("#commentInput");

    if (name.val() === "") {
        alert("You must enter a display name inorder to make a comment.");
    }
    else if (comment.val() === "") {
        alert("You must enter something in the comment box inorder to make a comment.");
    }
    else {
        // The HTML code inside of the prepend() method is structure of each comment.
        $("#commentSection").prepend(`
            <div class="post">
                <img src="personIcon.png">
                <div class="postInnerContainer">
                    <div class="postTopRow">
                        <div>${name.val()}</div>
                        <div>
                            <span class="edit blue">Edit</span>
                            <span class="delete blue">Delete</span>
                        </div>
                    </div>
                    <div class="commentDisplay">${comment.val()}</div>
                </div>
            </div>
        `);
        name.val("");
        comment.val("");
    }
});

// This will delete a comment when its delete button is clicked.
$("#commentSection").on("click", ".delete", function() {
    $($(this).parents()[3]).remove();
});

// This will display a new text box and submit button when the edit button is clicked.
$("#commentSection").on("click", ".edit", function() {
    if ($("#editContainer").length === 0) {
        $($(this).parents()[2]).append(`
            <div id="editContainer" class="flexContainer">
                <input id="reviseComment" type="text" value="${$($(this).parents()[1]).next().text()}">
                <span class="blue">Submit</span>
            </div>
        `);
    }
});
// After the submit button within #editContainer is pressed, then this will update the post and remove the new test box (and submit button).
$("#commentSection").on("click", "#editContainer span", function() {
    $(this).parent().prev().text($(this).prev().val());
    $("#editContainer").remove();
});
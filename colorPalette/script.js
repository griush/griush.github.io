window.addEventListener('load', function () {
    // Canvases
    var first_canvas = document.getElementById("first_canvas");
    var first_ctx = first_canvas.getContext("2d");

    var second_canvas = document.getElementById("second_canvas");
    var second_ctx = second_canvas.getContext("2d");

    var third_canvas = document.getElementById("third_canvas");
    var third_ctx = third_canvas.getContext("2d");

    var fourth_canvas = document.getElementById("fourth_canvas");
    var fourth_ctx = fourth_canvas.getContext("2d");

    // Sliders
    var s_first_r = this.document.getElementById("first_r");
    var s_first_g = this.document.getElementById("first_g");
    var s_first_b = this.document.getElementById("first_b");

    var s_second_r = this.document.getElementById("second_r");
    var s_second_g = this.document.getElementById("second_g");
    var s_second_b = this.document.getElementById("second_b");

    var s_third_r = this.document.getElementById("third_r");
    var s_third_g = this.document.getElementById("third_g");
    var s_third_b = this.document.getElementById("third_b");

    var s_fourth_r = this.document.getElementById("fourth_r");
    var s_fourth_g = this.document.getElementById("fourth_g");
    var s_fourth_b = this.document.getElementById("fourth_b");

    // Slider updates
    var c_first_r = s_first_r.value;
    var c_first_g = s_first_g.value;
    var c_first_b = s_first_b.value;

    var c_second_r = s_second_r.value;
    var c_second_g = s_second_g.value;
    var c_second_b = s_second_b.value;

    var c_third_r = s_third_r.value;
    var c_third_g = s_third_g.value;
    var c_third_b = s_third_b.value;

    var c_fourth_r = s_fourth_r.value;
    var c_fourth_g = s_fourth_g.value;
    var c_fourth_b = s_fourth_b.value;

    s_first_r.oninput = function() {
        c_first_r = this.value;
        updateColours();
        updateOutputf();
    }
    s_first_g.oninput = function() {
        c_first_g = this.value;
        updateColours();
        updateOutputf();
    }
    s_first_b.oninput = function() {
        c_first_b = this.value;
        updateColours();
        updateOutputf();
    }

    s_second_r.oninput = function() {
        c_second_r = this.value;
        updateColours();
        updateOutputs();
    }
    s_second_g.oninput = function() {
        c_second_g = this.value;
        updateColours();
        updateOutputs();
    }
    s_second_b.oninput = function() {
        c_second_b = this.value;
        updateColours();
        updateOutputs();
    }

    s_third_r.oninput = function() {
        c_third_r = this.value;
        updateColours();
        updateOutputt();
    }
    s_third_g.oninput = function() {
        c_third_g = this.value;
        updateColours();
        updateOutputt();
    }
    s_third_b.oninput = function() {
        c_third_b = this.value;
        updateColours();
        updateOutputt();
    }

    s_fourth_r.oninput = function() {
        c_fourth_r = this.value;
        updateColours();
        updateOutputfo();
    }
    s_fourth_g.oninput = function() {
        c_fourth_g = this.value;
        updateColours();
        updateOutputfo();
    }
    s_fourth_b.oninput = function() {
        c_fourth_b = this.value;
        updateColours();
        updateOutputfo();
    }

    // Colours
    first_ctx.beginPath();
    first_ctx.font = "30px Arial";
    first_ctx.fillText("Hello World", first_canvas.width / 2, first_canvas.height / 2);
    first_ctx.fillStyle = "rgb(" + c_first_r + ", " + c_first_g + ", " + c_first_b + ")";
    first_ctx.fillRect(0, 0, first_canvas.width, first_canvas.height);

    second_ctx.beginPath();
    second_ctx.fillStyle = "rgb(" + c_second_r + ", " + c_second_g + ", " + c_second_b + ")";
    second_ctx.fillRect(0, 0, second_canvas.width, second_canvas.height);

    third_ctx.beginPath();
    third_ctx.fillStyle = "rgb(" + c_third_r + ", " + c_third_g + ", " + c_third_b + ")";
    third_ctx.fillRect(0, 0, third_canvas.width, third_canvas.height);

    fourth_ctx.beginPath();
    fourth_ctx.fillStyle = "rgb(" + c_fourth_r + ", " + c_fourth_g + ", " + c_fourth_b + ")";
    fourth_ctx.fillRect(0, 0, fourth_canvas.width, fourth_canvas.height);


    function updateColours() {
        // Colours
        first_ctx.beginPath();
        first_ctx.fillStyle = "rgb(" + c_first_r + ", " + c_first_g + ", " + c_first_b + ")";
        first_ctx.fillRect(0, 0, first_canvas.width, first_canvas.height);
    
        second_ctx.beginPath();
        second_ctx.fillStyle = "rgb(" + c_second_r + ", " + c_second_g + ", " + c_second_b + ")";
        second_ctx.fillRect(0, 0, second_canvas.width, second_canvas.height);
    
        third_ctx.beginPath();
        third_ctx.fillStyle = "rgb(" + c_third_r + ", " + c_third_g + ", " + c_third_b + ")";
        third_ctx.fillRect(0, 0, third_canvas.width, third_canvas.height);
    
        fourth_ctx.beginPath();
        fourth_ctx.fillStyle = "rgb(" + c_fourth_r + ", " + c_fourth_g + ", " + c_fourth_b + ")";
        fourth_ctx.fillRect(0, 0, fourth_canvas.width, fourth_canvas.height);
    }

    function updateOutputf() {
        var output = document.getElementById("first_o");
        output.innerHTML = "(" + c_first_r + ", " + c_first_g + ", " + c_first_b + ")";
    }
    function updateOutputs() {
        var output = document.getElementById("second_o");
        output.innerHTML = "(" + c_second_r + ", " + c_second_g + ", " + c_second_b + ")";
    }
    function updateOutputt() {
        var output = document.getElementById("third_o");
        output.innerHTML = "(" + c_third_r + ", " + c_third_g + ", " + c_third_b + ")";
    }
    function updateOutputfo() {
        var output = document.getElementById("fourth_o");
        output.innerHTML = "(" + c_fourth_r + ", " + c_fourth_g + ", " + c_fourth_b + ")";
    }
});
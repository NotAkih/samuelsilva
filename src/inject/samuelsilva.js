
(function ($) {

    var self = {
        nCageImgs: [
            'https://images.uncyc.org/pt/4/47/Samuel.JPG'    
        ],
        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        self.handleImg(item, lstImgs);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                self.handleImg(item, lstImgs);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },
        handleImg: function (item, lstImgs) {
            $(item).error(function () {
                //Handle broken imgs
                self.handleBrokenImg(item, lstImgs);
            });

            self.setRandomImg(item, lstImgs);
        },
        setRandomImg: function (item, lstImgs) {
            var h = $(item).height();
            var w = $(item).width();
            $(item).css('width', w + 'px').css('height', h + 'px');
            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
        },
        handleBrokenImg: function (item, lstImgs) {

            var brokenImg = $(item).attr('src');
            var index = lstImgs.indexOf(brokenImg);
            if (index > -1) {
                lstImgs.splice(index, 1);
            }
            self.setRandomImg(item, lstImgs);
        },
    };

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nCageImgs, 3000);
    });

    //Set global variable
    $.nCage = self;
	
    var nome = Element.textContent = "Samuel Silva ";
	
	//Change all text to the var "nome"
	$('address').text(nome);
	$('article').text(nome);
	$('aside').text(nome);
	$('footer').text(nome);
	$('header').text(nome);
	$('h1').text(nome);
	$('h2').text(nome);
	$('h3').text(nome);
	$('h4').text(nome);
	$('h5').text(nome);
	$('h6').text(nome);
	$('main').text(nome);
	$('nav').text(nome);
	$('section').text(nome);
	$('hr').text(nome);
	$('li').text(nome);
	$('ol').text(nome);
	$('p').text(nome);
	$('pre').text(nome);
	$('ul').text(nome);
	$('abbr').text(nome);
	$('em').text(nome);
	$('i').text(nome);
	$('mark').text(nome);
	$('span').text(nome);
	$('strong').text(nome);
	$('label').text(nome);
	$('input').text(nome);
	$('legend').text(nome);
	$('option').text(nome);
	$('cite').text(nome);
	$('select').text(nome);
	$('details').text(nome);
	$('fl').text(nome);
	$('nobr').text(nome);
	$('q').text(nome);
    
	if ($('a').attr('img', '/Samuel.jpg')) {
        $('a').text(nome).innerText().attr('href', 'https://www.youtube.com/watch?v=sSQH1Hin9-I');
    }

})(jQuery);
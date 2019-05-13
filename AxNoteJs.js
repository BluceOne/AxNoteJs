// 加载js
javascript: $(function() {
	function setBg(a) {
		$("head").append('<style type="text/css">#axp-note-container{background:' + a.trim() + "!important}</style>")
	}
	var js = [[AxNoteJS]];
	var bg = "[[AxNoteBg]]";
	js && eval(js), bg && setBg(bg);
	if (!$('body').attr('axp-add-done')) {
		$('body').attr('axp-add-done', true);
		try {
			[
				[AxNoteAdd]
			]
		} catch (e) {}
	}
});

// AxNoteJs
$(function() {
	function removeAxPlusVar() {
		var a = axDebugHost.find("#variablesDiv>div");
		a.each(function() {
			/axplus/gi.test($(this).text()) && $(this).remove()
		})
	}

	function shake(a, b, c, d) {
		var e, f;
		for (a.stop(!0, !0), e = a.position().left, a.attr("ori-left") ? e = parseInt(a.attr("ori-left")) : a.attr("ori-left", a.position().left), f = 1; b >= f; f++) a.animate({
			left: e + -1 * c
		}, d / b / 4).animate({
			left: e + c
		}, d / b / 2).animate({
			left: e
		}, d / b / 4);
		return a
	}

	function getBgColor(e) {
		var rgb, img, canvas, ctx, centerPoint;
		if (e.is("div")) {
			if (rgb = e.css("background-color"), rgb >= 0) return rgb;
			rgb = rgb.match(eval("/^rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)$/")), rgb = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
		} else if (e.is("img")) try {
			img = e[0], canvas = document.createElement("canvas"), canvas.width = 1, canvas.height = 1, ctx = canvas.getContext("2d"), ctx.drawImage(img, parseInt(img.width / 2), parseInt(img.height / 2), 1, 1, 0, 0, 1, 1), centerPoint = ctx.getImageData(0, 0, 1, 1).data, rgb = "#" + hex(centerPoint[0]) + hex(centerPoint[1]) + hex(centerPoint[2])
		} catch (e) {}
		return rgb ? rgb : defaultBgColor
	}

	function hex(a) {
		return ("0" + parseInt(a).toString(16)).slice(-2)
	}

	function toast(a, b) {
		$("#toast").text(a).show().css("marginLeft", -$("#toast").width() / 2 + "px"), setTimeout(function() {
			$("#toast").text("").hide()
		}, b ? b : 3e3)
	}

	function addValidIndex(a, b, c, d, e) {
		void 0 == d && (d = 0), void 0 == e && (e = 0);
		var f = $('<div class="axp-index" axp-for="' + c + '" style="color:' + defaultBgColor + ";background-color:" + defaultColor + ";border:1px solid " + defaultBgColor + '">' + b + "</div>");
		a.append(f), f.css({
			left: f.position().left + d,
			top: f.position().top + e
		})
	}

	function addInvalidIndex(a) {
		a.append('<div class="axp-index">-</div>')
	}

	function getWHCss(a, b, c) {
		void 0 == b && (b = 0), void 0 == c && (c = 0);
		var d = 0,
			e = 0;
		return a.find("div").each(function() {
			var a, b;
			$(this).is(":hidden") || "none" == $(this).css("display") || (a = $(this).position().left + $(this).outerWidth(), d = a > d ? a : d, b = $(this).position().top + $(this).outerHeight(), e = b > e ? b : e)
		}), {
			width: d - b,
			height: e - c
		}
	}

	function startNote() {
		function i(a, c) {
			h[a] && (window.axpData.colorSet[a] ^ c ? ($.each(h[a], function(a, c) {
				c.parent().is(noteContainer) && "none" != c.css("display") ? b -= c.outerHeight() : "axp-marker" == c.attr("data-label") && (c.parent().find(">div").not(c).addClass("hide"), $('div[for="' + c.attr("id") + '"]').addClass("hide")), c.addClass("hide")
			}), window.axpData.colorSet[a] = !1, g.find('[color="' + a + '"]').width(4)) : ($.each(h[a], function(a, c) {
				c.parent().is(noteContainer) && "none" == c.css("display") ? b += c.outerHeight() : "axp-marker" == c.attr("data-label") && (c.parent().find(">div").not(c).removeClass("hide"), $('div[for="' + c.attr("id") + '"]').removeClass("hide")), c.removeClass("hide")
			}), window.axpData.colorSet[a] = !0, g.find('[color="' + a + '"]').width(14)), s())
		}

		function m(a, b) {
			window.axpData.isNoteShow = a, window.axpData.noteWidth = b, n()
		}

		function n() {
			sessionStorage.setItem("axpData", JSON.stringify(window.axpData))
		}

		function o() {
			a || (a = !0, noteContainer.find(".axp-note-item").each(function() {
				b += $(this).outerHeight()
			}), b += 200, b > $(window).height() && j.css("height", b + "px"))
		}

		function p() {
			if ($("body").attr("data-addedWidth")) {
				if ($("body").attr("scrolled4note")) {
					var a = $("html").scrollLeft() > $("body").scrollLeft() ? $("html").scrollLeft() : $("body").scrollLeft();
					$("html,body").animate({
						scrollLeft: a - noteContainer.outerWidth()
					}, 0), $("body").removeAttr("scrolled4note")
				}
				$("body").width($("body").width() - parseFloat($("body").attr("data-addedWidth"))).removeAttr("data-addedWidth"), e.each(function() {
					$(this).attr("oriLeft") && $(this).removeAttr("oriLeft"), $(this).attr("oriRight") && $(this).css("right", $(this).attr("oriRight")).removeAttr("oriRight")
				})
			}
			noteContainer.hide(), f.find("path").attr("fill", "#6D6D6D"), m(!1, noteContainer.width())
		}

		function q() {
			noteContainer.show(), o(), f.find("path").attr("fill", "#0099ff"), $("body").attr("data-addedWidth") || ($("body").attr("oriWidth", $("body").width()).width($("body").width() + noteContainer.outerWidth()).attr("data-addedWidth", noteContainer.outerWidth()), e.each(function() {
				var b = "50%" == $(this).css("left") ? !0 : !1,
					c = "auto" == $(this).css("left") ? !0 : !1,
					d = parseFloat($(this).css("left")),
					e = parseFloat($(this).css("right"));
				d == $(window).width() / 2 || b ? ($(this).hasClass("pin_center") || $(this).addClass("pin_center"), $(this).attr("oriLeft", $(window).width() / 2 + "px").attr("hPin", "center")) : (d > e || c) && ($(this).css("right", e + noteContainer.outerWidth() + "px"), $(this).attr("oriRight", e + "px").attr("hPin", "right"))
			})), m(!0, noteContainer.width())
		}

		function r(a) {
			$("body").width(parseFloat($("body").attr("oriWidth")) + a).attr("data-addedWidth", a), e.each(function() {
				"center" == $(this).attr("hPin") ? $(this).attr("oriLeft", $(window).width() / 2 + "px") : "right" == $(this).attr("hPin") && $(this).css("right", parseFloat($(this).attr("oriRight")) + a + "px")
			})
		}

		function s() {
			b > $(window).height() ? j.css("height", b + "px") : j.css("height", "100%")
		}

		function t(a, b) {
			if (void 0 == b && (b = !1), c && (c.removeClass("marker_checked"), "axp-marker" != c.attr("data-label") || c.is(a) || c.parent().find('>div:not([data-label^="axp-"])').hide()), c = a, a.addClass("marker_checked"), "axp-marker" == a.attr("data-label")) {
				var d = a.parent().find('>div:not([data-label^="axp-"])');
				b ? d.is(":hidden") || "none" == d.css("display") ? d.show() : d.hide() : d.show()
			}
		}

		function u(a) {
			var b, c;
			d && (b = $("#" + d.attr("axp-for")).attr("bgColor"), d.css({
				backgroundColor: "#ffffff",
				borderColor: b,
				color: b
			})), d = a, c = $("#" + a.attr("axp-for")), b = c.attr("bgColor"), a.css({
				backgroundColor: b,
				borderColor: "#ffffff",
				color: "#ffffff"
			})
		}
		var a, b, c, d, e, f, g, h, j, k, l;
		oldMarkers.add(axpMarkers).each(function() {
			var b = getBgColor($(this).find("[id^=" + $(this).attr("id") + "_]:first"));
			noteContainer.find('.axp-index[axp-for="' + $(this).attr("id") + '"]').css({
				color: b,
				backgroundColor: $(this).css("color"),
				borderColor: b
			}), $(this).attr("bgColor", b)
		}), a = !1, b = 0, c = null, d = null, e = $(".panelstate"), f = $('<svg id="note-toggle" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M151.893333 0h720.213334c60.32384 0 109.226667 48.902827 109.226666 109.226667v805.546666c0 60.32384-48.902827 109.226667-109.226666 109.226667H151.893333c-60.32384 0-109.226667-48.902827-109.226666-109.226667V109.226667C42.666667 48.902827 91.569493 0 151.893333 0z m692.906667 267.946667c0-33.931947-27.508053-61.44-61.44-61.44H240.64c-33.931947 0-61.44 27.508053-61.44 61.44s27.508053 61.44 61.44 61.44h542.72c33.931947 0 61.44-27.508053 61.44-61.44z m0 245.76c0-33.931947-27.508053-61.44-61.44-61.44H240.64c-33.931947 0-61.44 27.508053-61.44 61.44s27.508053 61.44 61.44 61.44h542.72c33.931947 0 61.44-27.508053 61.44-61.44zM527.36 759.466667c0-33.931947-27.508053-61.44-61.44-61.44H240.64c-33.931947 0-61.44 27.508053-61.44 61.44s27.508053 61.44 61.44 61.44h225.28c33.931947 0 61.44-27.508053 61.44-61.44z" fill="#6D6D6D"></path></svg>'), $("body").append(f), f.click(function() {
			window.axpData.isNoteShow ? p() : q()
		}), g = $('<div style="position:fixed;top:42px;right:16px;width:18px;background-color:#FCFCFC;padding:1px 0;border-radius:3px;z-index: 600"></div>'), $("body").append(g), h = {}, oldMarkers.add(axpMarkers).each(function() {
			var a = $(this).attr("bgColor");
			h[a] || (h[a] = [], g.append('<div class="item-wrap"><div class="color-selector-item" style="background-color:' + a + '" color="' + a + '"></div></div>'), window.axpData.colorSet[a] = !0), h[a].push($(this))
		}), noteContainer.find(".axp-index").click(function() {
			var a, b, c, d, e, f;
			if ($(this).attr("axp-for")) {
				if (a = $("#" + $(this).attr("axp-for")), u($(this)), t(a), a.is(":hidden") || "none" == a.css("display")) return toast("该注释对应的标记隐藏中，请显示后查看"), void 0;
				b = a[0].getBoundingClientRect(), c = $("html").scrollLeft() > $("body").scrollLeft() ? $("html").scrollLeft() : $("body").scrollLeft(), d = $("html").scrollTop() > $("body").scrollTop() ? $("html").scrollTop() : $("body").scrollTop(), e = 0, b.left < 0 ? e = b.left : b.right > $(window).width() - noteContainer.outerWidth() && (e = b.right - ($(window).width() - noteContainer.outerWidth())), f = 0, b.top < 0 ? f = b.top : b.bottom > $(window).height() && (f = b.bottom - $(window).height()), 0 == e && 0 == f ? shake(a, 4, 5, 600) : $("html,body").animate({
					scrollLeft: c + e
				}, {
					duration: 400,
					queue: !1
				}).animate({
					scrollTop: d + f
				}, {
					duration: 400,
					queue: !1,
					complete: function() {
						shake(a, 4, 5, 600)
					}
				})
			} else toast("该注释没有对应的标记，请检查")
		}).each(function() {
			$(this).attr("axp-for") ? h[$("#" + $(this).attr("axp-for")).attr("bgColor")].push($(this).parent()) : (h["#cecece"] || (h["#cecece"] = [], g.append('<div class="item-wrap"><div class="color-selector-item" color="#cecece"></div></div>'), window.axpData.colorSet["#cecece"] = !0), h["#cecece"].push($(this).parent()))
		}), g.find("div.color-selector-item").each(function() {
			var a = $(this).attr("color");
			$(this).parent().click(function() {
				i(a, !1), n()
			})
		}), noteContainer.resizable({
			handles: "w",
			minWidth: parseFloat(noteContainer.css("min-width")),
			resize: function(a, b) {
				m(!0, b.size.width), r(b.size.width)
			}
		}), j = noteContainer.find(">.ui-resizable-w"), sessionStorage.getItem("axpData") ? (k = JSON.parse(sessionStorage.getItem("axpData")), window.axpData.isNoteShow = k.isNoteShow, window.axpData.noteWidth = k.noteWidth, $.extend(window.axpData.colorSet, k.colorSet), noteContainer.css("width", window.axpData.noteWidth + "px"), l = window.axpData.isNoteShow, q(), $.each(window.axpData.colorSet, function(a) {
			i(a, !0)
		}), l || p()) : (q(), p()), $(window).resize(function() {
			$("body").attr("data-addedWidth") && r(noteContainer.width()), s()
		}), noteContainer.scroll(function() {
			j.css("left", noteContainer.scrollLeft() + "px")
		}), oldMarkers.add(axpMarkers).click(function() {
			var b, c, d, e, f, a = $.trim($(this).text());
			return re.test(a) || "axp-marker" == $(this).attr("data-label") ? (b = noteContainer.find('[axp-for="' + $(this).attr("id") + '"]'), 0 == b.length ? (toast("标记“" + a + "”" + "没有对应的注释，请检查"), void 0) : (t($(this), !0), u(noteContainer.find('[axp-for="' + $(this).attr("id") + '"]')), q(), c = b.parent(), d = 0, e = 0, c.attr("axp-top") && c.attr("axp-left") && (d = parseInt(c.attr("axp-top")), e = parseInt(c.attr("axp-left"))), noteContainer.animate({
				scrollTop: noteContainer.scrollTop() + c.position().top + d,
				scrollLeft: noteContainer.scrollLeft() + c.position().left + e
			}, 300, function() {
				shake(b, 4, 5, 600)
			}), $(this).offset().left + $(this).width() > noteContainer.offset().left && (f = $("html").scrollLeft() > $("body").scrollLeft() ? $("html").scrollLeft() : $("body").scrollLeft(), $("html,body").animate({
				scrollLeft: f + noteContainer.outerWidth()
			}, 400), $("body").attr("scrolled4note", !0)), void 0)) : (toast("标记“" + a + "”" + "不符合要求，必须使用正整数"), void 0)
		}), axpMarkers.each(function() {
			var a = $(this),
				b = $('<div for="' + $(this).attr("id") + '" style="position:absolute;left:' + ($(this).position().left + $(this).width() / 2 - 10) + "px;top:" + ($(this).position().top + $(this).height() / 2 - 10) + 'px;width:20px;height:20px;border-radius:10px;cursor:pointer"/>');
			a.parent().parent().after(b), b.click(function() {
				a.click()
			}).hover(function() {
				a.addClass("marker_hover")
			}, function() {
				a.removeClass("marker_hover")
			})
		}), setAd('<div class="copyright">The Notes feature is designed by <a href="mailto:86436886@163.com" target="_blank">86436886@163.com</a></div>')
	}

	function addTip(a) {
		noteContainer.find("#axp_tip").append(a).show()
	}

	function setAd(a) {
		noteContainer.find("#axp_ad").html(a).show()
	}
	var axDebugHost, traces, oriLen, defaultBgColor, defaultColor, oldMarkers, axpMarkers, oldMarkerMap, re, axpIndex, noteContainer, oldNotes, pngSrcs, img, flag, imgTotal, i;
	if (!$("body").attr("axp-done")) {
		$("body").attr("axp-done", !0);
		try {
			axDebugHost = $("#debugHost", window.parent.document), axDebugHost.length > 0 && (removeAxPlusVar(), axDebugHost.find("#variablesClearLink").on("click", function() {
				removeAxPlusVar()
			}), traces = axDebugHost.find("#traceDiv>div"), oriLen = traces.length, traces.each(function() {
				/axp-/gi.test($(this).text()) && ($(this).remove(), oriLen--)
			}), 0 >= oriLen && (axDebugHost.find("#traceEmptyState").show(), axDebugHost.find("#traceClearLinkContainer").hide()))
		} catch (e) {}
		if ($("head").append('<style type="text/css">div[data-label="AxurePlus-Marker"],div[data-label="axp-markerN"],div[data-label="axp-marker"]{cursor:pointer;z-index:99}.marker-highlight{-moz-box-shadow:0 0 5px 1px #09f;-webkit-box-shadow:0 0 5px 1px #09f;box-shadow:0 0 5px 1px #09f;border-radius:50px}div[data-label="axp-marker"]:hover,.marker_checked,.marker_hover{-moz-box-shadow:0 0 10px 3px #09f !important;-webkit-box-shadow:0 0 10px 3px #09f !important;box-shadow:0 0 10px 3px #09f !important;border-radius:50px}.marker-area{border-radius:3px;-moz-box-shadow:0 0 10px 2px #09f;-webkit-box-shadow:0 0 10px 2px #09f;box-shadow:0 0 10px 2px #09f}#axp-note-container{position:fixed;display:block;left:auto !important;top:0;right:0;width:450px;min-width:450px;height:100% !important;background-color:#fcfcfc;overflow:auto;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;z-index:599}.axp-note-item{position:relative;min-height:20px;border:10px solid rgba(0,0,0,0) !important;border-left-width:36px !important;border-right-width:50px !important;overflow:visible !important}div[data-label="axp-note"]{position:absolute;z-index:99}#axp_tip{display:none;padding:8px;margin:8px 50px 8px 8px;font-size:14px;text-align:left;background:#fbf1ef;border:1px solid #f8d9d7;border-radius:3px;color:#de5c41}#axp_ad{display:none;padding:8px;margin:20px 8px 8px 8px;color:#b8b8b8}#note-toggle{position:fixed;top:5px;right:11px;height:24px;padding:6px;border-radius:3px;cursor:pointer;background-color:#fcfcfc;z-index:600}#note-toggle:hover{background-color:#dcdcdc !important}#axp-note-container>.ui-resizable-w{position:absolute;display:block;visibility:visible;cursor:col-resize;width:5px;left:0;top:0;height:100%;border-left:1px solid #8f949a}#axp-note-container>.ui-resizable-w:hover{border-left-width:3px}.axp-index{position:absolute;left:-28px;width:18px;height:18px;line-height:18px;text-align:center;border:1px solid white;border-radius:18px;font-size:12px;color:white;background-color:#cecece;-moz-box-shadow:1px 1px 5px #333;-webkit-box-shadow:1px 1px 5px #333;box-shadow:1px 1px 5px #333;cursor:pointer;z-index:99}.axp-index:hover{-moz-box-shadow:1px 1px 1px #333;-webkit-box-shadow:1px 1px 1px #333;box-shadow:1px 1px 1px #333}.item-wrap{float:right;width:14px;height:26px;padding:1px;margin:1px;border-radius:3px;cursor:pointer}.item-wrap:hover{background:#dcdcdc}.color-selector-item{float:right;width:14px;height:100%;background-color:#cecece;border-radius:3px}.copyright{font-size:12px;color:#efefef;margin-top:50px;text-align:center}.copyright:hover{color:#b2b2b2}.hide{display:none !important}#toast{position:fixed;top:30px;background:#dd4b39;color:white;padding: 6px 16px;border-radius:5px;box-shadow:0 0 5px grey;left:50%;z-index:999}</style>'), defaultBgColor = "#0099ff", defaultColor = "#ffffff", $("body").append('<div id="toast" style="display:none"></div>'), window.axpData = {
			isNoteShow: !1,
			noteWidth: 450,
			colorSet: {}
		}, oldMarkers = $('div[data-label="AxurePlus-Marker"]').add('div[data-label="axp-markerN"]'), axpMarkers = $('div[data-label="axp-marker"]'), oldMarkerMap = {}, re = /^\d+$/, axpIndex = 0, oldMarkers.each(function() {
			var b = $.trim($(this).text());
			re.test(b) && (oldMarkerMap[b] = $(this), parseInt(b) > axpIndex && (axpIndex = parseInt(b)))
		}), axpMarkers.each(function() {
			var a = $(this).parent().find('div:has(".panel_state")');
			(a.width() > 25 || a.height() > 25) && a.addClass("marker-area"), $(this).parent().find('>div:not([data-label^="axp-"])').hide(), $(this).find("[id^=" + $(this).attr("id") + "_]:first").is("div") && 1 == $(this).parent().find('>div[data-label^="axp-"]').length && $(this).addClass("marker-highlight")
		}), noteContainer = $('<div id="axp-note-container"/>').appendTo($("body")), oldNotes = $('div[data-label="AxurePlus-Note"]').add('div[data-label="axp-notes"]'), newNotes = $('div[data-label="axp-note"]'), oldNotes.find('[data-label="--help"]').remove(), oldNotes.find(">.panel_state").each(function() {
			var b, a = $(this).attr("data-label").match(/\d+/),
				c = $(this).find(">div:first");
			a && oldMarkerMap[a] ? (b = $('<div data-label="axp-note"/>').append(c.find(">*")), parseInt(a) > axpIndex && (axpIndex = parseInt(a))) : b = $('<div data-label="axp-note"/>').append(c.find(">*")), $('<div class="axp-note-item" ori-state="' + $(this).attr("data-label") + '"/>').append(b).appendTo(noteContainer).css(getWHCss(b)), a && oldMarkerMap[a] ? addValidIndex(b.parent(), a, oldMarkerMap[a].attr("id")) : addInvalidIndex(b.parent())
		}), oldMarkerMap = null, newNotes.each(function() {
			var a, b, c, d, e, f;
			$(this).parent().find(">div").not($(this)).each(function() {
				0 == $(this).find('[data-label="axp-marker"]').length && $(this).hide()
			}), axpIndex++, a = $(this).parent().find('[data-label="axp-marker"]').attr("axp-index", axpIndex).attr("id"), b = $(this).find('[data-label="axp-line"]:first'), c = $(this).find(">div").not(b), d = c.first().find(">.panel_state:first"), 1 == c.length && 1 == d.length ? (e = $('<div data-label="axp-note"/>').append(d.find(">div:first>*")), $('<div class="axp-note-item"/>').append(e).appendTo(noteContainer).css(getWHCss(e)), addValidIndex(e.parent(), axpIndex, a)) : (f = {
				left: -b.position().left,
				top: -b.position().top
			}, $('<div class="axp-note-item" axp-left="' + -f.left + '" axp-top="' + -f.top + '"/>').append($(this)).appendTo(noteContainer).css($.extend(f, getWHCss($(this), -f.left, -f.top))), addValidIndex($(this).parent(), axpIndex, a, -f.left, -f.top)), b.hide()
		}), noteContainer.prepend('<div id="axp_tip"><div>'), noteContainer.append('<div id="axp_ad"></div>'), pngSrcs = [], oldMarkers.add(axpMarkers).each(function() {
			var b = $(this).find("[id^=" + $(this).attr("id") + "_]:first");
			b.is("img") && pngSrcs.push(b.attr("src"))
		}), 0 == pngSrcs.length) startNote();
		else for (img = [], flag = 0, imgTotal = pngSrcs.length, i = 0; imgTotal > i; i++) img[i] = new Image, img[i].onload = function() {
			var a, b;
			if (flag++, flag == imgTotal && (startNote(), /^file:[\s\S]+$/.test(document.URL))) try {
				a = document.createElement("img"), a.src = pngSrcs[0], b = document.createElement("canvas").getContext("2d"), b.drawImage(a, 1, 1), b.getImageData(0, 0, 1, 1)
			} catch (c) {
				addTip("你的原型在本地查看时无法完全支持颜色分类，请使用Axure的预览功能查看，或使用Firefox浏览器")
			}
		}, img[i].src = pngSrcs[i];
	}
});

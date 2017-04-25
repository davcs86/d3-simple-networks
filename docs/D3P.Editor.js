(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["D3P"] = factory();
	else
		root["D3P"] = factory();
})(this, function() {
return webpackJsonpD3P([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 *
	 * D3-based node directed network modeler.
	 *
	 * @license MIT
	 * @author David Castillo <davcs86@gmail.com>
	 *
	 */
	
	var inherits = __webpack_require__(2),
	  Viewer = __webpack_require__(3).Viewer;
	
	/**
	 * An editor for node networks
	 *
	 * @param {Object} options
	 */
	function Editor(options) {
	  Viewer.call(this, options);
	}
	
	inherits(Editor, Viewer);
	
	module.exports = {
	  Editor: Editor
	};
	
	Editor.prototype.createDiagram = function () {
	  return this.importDiagram(this.initialDiagram);
	};
	
	Editor.prototype._interactionModules = [
	  __webpack_require__(1642),
	  __webpack_require__(1644)
	];
	
	Editor.prototype._editionModules = [
	  __webpack_require__(1646),
	  __webpack_require__(1656),
	  __webpack_require__(1674),
	  __webpack_require__(1679),
	  __webpack_require__(1681),
	  __webpack_require__(1683),
	  __webpack_require__(1608),
	  __webpack_require__(1696),
	  __webpack_require__(2012),
	  __webpack_require__(2048),
	  __webpack_require__(2486)
	];
	
	Editor.prototype._modules = [].concat(
	  Editor.prototype._modules,
	  Editor.prototype._interactionModules,
	  Editor.prototype._editionModules
	);
	
	Editor.prototype.initialDiagram = '<?xml version="1.0" encoding="UTF-8"?>' +
	  '<pfdn:diagram xmlns:pfdn="http://pfdn">' +
	  '<settings>' +
	  '    <author>No Author</author>' +
	  '    <name>No Name Diagram</name>' +
	  '    <zoom>' +
	  '        <offset x="0" y="0" />' +
	  '        <scale>1</scale>' +
	  '    </zoom>' +
	  '    <grid />' +
	  '</settings>' +
	  '<node id="node_1" label="label_1">' +
	  '    <position x="20" y="100" />' +
	  '</node>' +
	  '<label id="label_1" fontSize="12">' +
	  '    <position x="33" y="140" />' +
	  '    <text>Node 1</text>' +
	  '</label>' +
	  '</pfdn:diagram>';

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */,
/* 1052 */,
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */,
/* 1072 */,
/* 1073 */,
/* 1074 */,
/* 1075 */,
/* 1076 */,
/* 1077 */,
/* 1078 */,
/* 1079 */,
/* 1080 */,
/* 1081 */,
/* 1082 */,
/* 1083 */,
/* 1084 */,
/* 1085 */,
/* 1086 */,
/* 1087 */,
/* 1088 */,
/* 1089 */,
/* 1090 */,
/* 1091 */,
/* 1092 */,
/* 1093 */,
/* 1094 */,
/* 1095 */,
/* 1096 */,
/* 1097 */,
/* 1098 */,
/* 1099 */,
/* 1100 */,
/* 1101 */,
/* 1102 */,
/* 1103 */,
/* 1104 */,
/* 1105 */,
/* 1106 */,
/* 1107 */,
/* 1108 */,
/* 1109 */,
/* 1110 */,
/* 1111 */,
/* 1112 */,
/* 1113 */,
/* 1114 */,
/* 1115 */,
/* 1116 */,
/* 1117 */,
/* 1118 */,
/* 1119 */,
/* 1120 */,
/* 1121 */,
/* 1122 */,
/* 1123 */,
/* 1124 */,
/* 1125 */,
/* 1126 */,
/* 1127 */,
/* 1128 */,
/* 1129 */,
/* 1130 */,
/* 1131 */,
/* 1132 */,
/* 1133 */,
/* 1134 */,
/* 1135 */,
/* 1136 */,
/* 1137 */,
/* 1138 */,
/* 1139 */,
/* 1140 */,
/* 1141 */,
/* 1142 */,
/* 1143 */,
/* 1144 */,
/* 1145 */,
/* 1146 */,
/* 1147 */,
/* 1148 */,
/* 1149 */,
/* 1150 */,
/* 1151 */,
/* 1152 */,
/* 1153 */,
/* 1154 */,
/* 1155 */,
/* 1156 */,
/* 1157 */,
/* 1158 */,
/* 1159 */,
/* 1160 */,
/* 1161 */,
/* 1162 */,
/* 1163 */,
/* 1164 */,
/* 1165 */,
/* 1166 */,
/* 1167 */,
/* 1168 */,
/* 1169 */,
/* 1170 */,
/* 1171 */,
/* 1172 */,
/* 1173 */,
/* 1174 */,
/* 1175 */,
/* 1176 */,
/* 1177 */,
/* 1178 */,
/* 1179 */,
/* 1180 */,
/* 1181 */,
/* 1182 */,
/* 1183 */,
/* 1184 */,
/* 1185 */,
/* 1186 */,
/* 1187 */,
/* 1188 */,
/* 1189 */,
/* 1190 */,
/* 1191 */,
/* 1192 */,
/* 1193 */,
/* 1194 */,
/* 1195 */,
/* 1196 */,
/* 1197 */,
/* 1198 */,
/* 1199 */,
/* 1200 */,
/* 1201 */,
/* 1202 */,
/* 1203 */,
/* 1204 */,
/* 1205 */,
/* 1206 */,
/* 1207 */,
/* 1208 */,
/* 1209 */,
/* 1210 */,
/* 1211 */,
/* 1212 */,
/* 1213 */,
/* 1214 */,
/* 1215 */,
/* 1216 */,
/* 1217 */,
/* 1218 */,
/* 1219 */,
/* 1220 */,
/* 1221 */,
/* 1222 */,
/* 1223 */,
/* 1224 */,
/* 1225 */,
/* 1226 */,
/* 1227 */,
/* 1228 */,
/* 1229 */,
/* 1230 */,
/* 1231 */,
/* 1232 */,
/* 1233 */,
/* 1234 */,
/* 1235 */,
/* 1236 */,
/* 1237 */,
/* 1238 */,
/* 1239 */,
/* 1240 */,
/* 1241 */,
/* 1242 */,
/* 1243 */,
/* 1244 */,
/* 1245 */,
/* 1246 */,
/* 1247 */,
/* 1248 */,
/* 1249 */,
/* 1250 */,
/* 1251 */,
/* 1252 */,
/* 1253 */,
/* 1254 */,
/* 1255 */,
/* 1256 */,
/* 1257 */,
/* 1258 */,
/* 1259 */,
/* 1260 */,
/* 1261 */,
/* 1262 */,
/* 1263 */,
/* 1264 */,
/* 1265 */,
/* 1266 */,
/* 1267 */,
/* 1268 */,
/* 1269 */,
/* 1270 */,
/* 1271 */,
/* 1272 */,
/* 1273 */,
/* 1274 */,
/* 1275 */,
/* 1276 */,
/* 1277 */,
/* 1278 */,
/* 1279 */,
/* 1280 */,
/* 1281 */,
/* 1282 */,
/* 1283 */,
/* 1284 */,
/* 1285 */,
/* 1286 */,
/* 1287 */,
/* 1288 */,
/* 1289 */,
/* 1290 */,
/* 1291 */,
/* 1292 */,
/* 1293 */,
/* 1294 */,
/* 1295 */,
/* 1296 */,
/* 1297 */,
/* 1298 */,
/* 1299 */,
/* 1300 */,
/* 1301 */,
/* 1302 */,
/* 1303 */,
/* 1304 */,
/* 1305 */,
/* 1306 */,
/* 1307 */,
/* 1308 */,
/* 1309 */,
/* 1310 */,
/* 1311 */,
/* 1312 */,
/* 1313 */,
/* 1314 */,
/* 1315 */,
/* 1316 */,
/* 1317 */,
/* 1318 */,
/* 1319 */,
/* 1320 */,
/* 1321 */,
/* 1322 */,
/* 1323 */,
/* 1324 */,
/* 1325 */,
/* 1326 */,
/* 1327 */,
/* 1328 */,
/* 1329 */,
/* 1330 */,
/* 1331 */,
/* 1332 */,
/* 1333 */,
/* 1334 */,
/* 1335 */,
/* 1336 */,
/* 1337 */,
/* 1338 */,
/* 1339 */,
/* 1340 */,
/* 1341 */,
/* 1342 */,
/* 1343 */,
/* 1344 */,
/* 1345 */,
/* 1346 */,
/* 1347 */,
/* 1348 */,
/* 1349 */,
/* 1350 */,
/* 1351 */,
/* 1352 */,
/* 1353 */,
/* 1354 */,
/* 1355 */,
/* 1356 */,
/* 1357 */,
/* 1358 */,
/* 1359 */,
/* 1360 */,
/* 1361 */,
/* 1362 */,
/* 1363 */,
/* 1364 */,
/* 1365 */,
/* 1366 */,
/* 1367 */,
/* 1368 */,
/* 1369 */,
/* 1370 */,
/* 1371 */,
/* 1372 */,
/* 1373 */,
/* 1374 */,
/* 1375 */,
/* 1376 */,
/* 1377 */,
/* 1378 */,
/* 1379 */,
/* 1380 */,
/* 1381 */,
/* 1382 */,
/* 1383 */,
/* 1384 */,
/* 1385 */,
/* 1386 */,
/* 1387 */,
/* 1388 */,
/* 1389 */,
/* 1390 */,
/* 1391 */,
/* 1392 */,
/* 1393 */,
/* 1394 */,
/* 1395 */,
/* 1396 */,
/* 1397 */,
/* 1398 */,
/* 1399 */,
/* 1400 */,
/* 1401 */,
/* 1402 */,
/* 1403 */,
/* 1404 */,
/* 1405 */,
/* 1406 */,
/* 1407 */,
/* 1408 */,
/* 1409 */,
/* 1410 */,
/* 1411 */,
/* 1412 */,
/* 1413 */,
/* 1414 */,
/* 1415 */,
/* 1416 */,
/* 1417 */,
/* 1418 */,
/* 1419 */,
/* 1420 */,
/* 1421 */,
/* 1422 */,
/* 1423 */,
/* 1424 */,
/* 1425 */,
/* 1426 */,
/* 1427 */,
/* 1428 */,
/* 1429 */,
/* 1430 */,
/* 1431 */,
/* 1432 */,
/* 1433 */,
/* 1434 */,
/* 1435 */,
/* 1436 */,
/* 1437 */,
/* 1438 */,
/* 1439 */,
/* 1440 */,
/* 1441 */,
/* 1442 */,
/* 1443 */,
/* 1444 */,
/* 1445 */,
/* 1446 */,
/* 1447 */,
/* 1448 */,
/* 1449 */,
/* 1450 */,
/* 1451 */,
/* 1452 */,
/* 1453 */,
/* 1454 */,
/* 1455 */,
/* 1456 */,
/* 1457 */,
/* 1458 */,
/* 1459 */,
/* 1460 */,
/* 1461 */,
/* 1462 */,
/* 1463 */,
/* 1464 */,
/* 1465 */,
/* 1466 */,
/* 1467 */,
/* 1468 */,
/* 1469 */,
/* 1470 */,
/* 1471 */,
/* 1472 */,
/* 1473 */,
/* 1474 */,
/* 1475 */,
/* 1476 */,
/* 1477 */,
/* 1478 */,
/* 1479 */,
/* 1480 */,
/* 1481 */,
/* 1482 */,
/* 1483 */,
/* 1484 */,
/* 1485 */,
/* 1486 */,
/* 1487 */,
/* 1488 */,
/* 1489 */,
/* 1490 */,
/* 1491 */,
/* 1492 */,
/* 1493 */,
/* 1494 */,
/* 1495 */,
/* 1496 */,
/* 1497 */,
/* 1498 */,
/* 1499 */,
/* 1500 */,
/* 1501 */,
/* 1502 */,
/* 1503 */,
/* 1504 */,
/* 1505 */,
/* 1506 */,
/* 1507 */,
/* 1508 */,
/* 1509 */,
/* 1510 */,
/* 1511 */,
/* 1512 */,
/* 1513 */,
/* 1514 */,
/* 1515 */,
/* 1516 */,
/* 1517 */,
/* 1518 */,
/* 1519 */,
/* 1520 */,
/* 1521 */,
/* 1522 */,
/* 1523 */,
/* 1524 */,
/* 1525 */,
/* 1526 */,
/* 1527 */,
/* 1528 */,
/* 1529 */,
/* 1530 */,
/* 1531 */,
/* 1532 */,
/* 1533 */,
/* 1534 */,
/* 1535 */,
/* 1536 */,
/* 1537 */,
/* 1538 */,
/* 1539 */,
/* 1540 */,
/* 1541 */,
/* 1542 */,
/* 1543 */,
/* 1544 */,
/* 1545 */,
/* 1546 */,
/* 1547 */,
/* 1548 */,
/* 1549 */,
/* 1550 */,
/* 1551 */,
/* 1552 */,
/* 1553 */,
/* 1554 */,
/* 1555 */,
/* 1556 */,
/* 1557 */,
/* 1558 */,
/* 1559 */,
/* 1560 */,
/* 1561 */,
/* 1562 */,
/* 1563 */,
/* 1564 */,
/* 1565 */,
/* 1566 */,
/* 1567 */,
/* 1568 */,
/* 1569 */,
/* 1570 */,
/* 1571 */,
/* 1572 */,
/* 1573 */,
/* 1574 */,
/* 1575 */,
/* 1576 */,
/* 1577 */,
/* 1578 */,
/* 1579 */,
/* 1580 */,
/* 1581 */,
/* 1582 */,
/* 1583 */,
/* 1584 */,
/* 1585 */,
/* 1586 */,
/* 1587 */,
/* 1588 */,
/* 1589 */,
/* 1590 */,
/* 1591 */,
/* 1592 */,
/* 1593 */,
/* 1594 */,
/* 1595 */,
/* 1596 */,
/* 1597 */,
/* 1598 */,
/* 1599 */,
/* 1600 */,
/* 1601 */,
/* 1602 */,
/* 1603 */,
/* 1604 */,
/* 1605 */,
/* 1606 */,
/* 1607 */,
/* 1608 */,
/* 1609 */,
/* 1610 */,
/* 1611 */,
/* 1612 */,
/* 1613 */,
/* 1614 */,
/* 1615 */,
/* 1616 */,
/* 1617 */,
/* 1618 */,
/* 1619 */,
/* 1620 */,
/* 1621 */,
/* 1622 */,
/* 1623 */,
/* 1624 */,
/* 1625 */,
/* 1626 */,
/* 1627 */,
/* 1628 */,
/* 1629 */,
/* 1630 */,
/* 1631 */,
/* 1632 */,
/* 1633 */,
/* 1634 */,
/* 1635 */,
/* 1636 */,
/* 1637 */,
/* 1638 */,
/* 1639 */,
/* 1640 */,
/* 1641 */,
/* 1642 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['zoomScroll'],
	  zoomScroll: ['type', __webpack_require__(1643)]
	};

/***/ }),
/* 1643 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Enables the zoom.
	 *
	 * @class
	 * @constructor
	 *
	 * @param {Zoom} zoom
	 */
	function ZoomScroll(zoom) {
	  zoom.setZoomable(true);
	}
	
	ZoomScroll.$inject = ['zoom'];
	
	module.exports = ZoomScroll;


/***/ }),
/* 1644 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['mouseEvents'],
	  mouseEvents: ['type', __webpack_require__(1645)],
	  __depends__: [
	    __webpack_require__(1492)
	  ]
	};


/***/ }),
/* 1645 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(555),
	  getLocalName = __webpack_require__(1561);
	
	/**
	 * MouseEvents description
	 *
	 * @class
	 * @constructor
	 *
	 * @param {EventEmitter} eventBus
	 * @param canvas
	 */
	
	function MouseEvents(eventBus, canvas) {
	  
	  this._eventBus = eventBus;
	  this._canvas = canvas;
	  this._init();
	}
	
	MouseEvents.$inject = [
	  'eventBus',
	  'canvas'
	];
	
	module.exports = MouseEvents;
	
	MouseEvents.prototype._addListeners = function (element, definition, className) {
	  var type = className ? className: getLocalName(definition),
	      that = this
	  ;
	  d3.select(element.node().parentNode).on('mouseenter', function () {
	    that._eventBus.emit(type + '.mouseenter', element, definition, d3.event);
	  });
	  d3.select(element.node().parentNode).on('mouseover', function () {
	    that._eventBus.emit(type + '.mouseover', element, definition, d3.event);
	  });
	  d3.select(element.node().parentNode).on('mousedown', function () {
	    that._eventBus.emit(type + '.mousedown', element, definition, d3.event);
	  });
	  d3.select(element.node().parentNode).on('mouseup', function () {
	    that._eventBus.emit(type + '.mouseup', element, definition, d3.event);
	  });
	  d3.select(element.node().parentNode).on('click', function () {
	    that._eventBus.emit(type + '.click', element, definition, d3.event);
	  });
	  d3.select(element.node().parentNode).on('dblclick', function () {
	    that._eventBus.emit(type + '.dblclick', element, definition, d3.event);
	  });
	  d3.select(element.node().parentNode).on('mouseleave', function () {
	    that._eventBus.emit(type + '.mouseleave', element, definition, d3.event);
	  });
	  d3.select(element.node().parentNode).on('mouseout', function () {
	    that._eventBus.emit(type + '.mouseout', element, definition, d3.event);
	  });
	  d3.select(element.node().parentNode).on('contextmenu', function () {
	    that._eventBus.emit(type + '.contextmenu', element, definition, d3.event);
	  });
	};
	
	MouseEvents.prototype._init = function () {
	  var that = this;
	  this._eventBus.on('label.created', function () {
	    that._addListeners.apply(that, arguments);
	  });
	  this._eventBus.on('link.created', function () {
	    that._addListeners.apply(that, arguments);
	  });
	  this._eventBus.on('node.created', function () {
	    that._addListeners.apply(that, arguments);
	  });
	  this._eventBus.on('zone.created', function () {
	    that._addListeners.apply(that, arguments);
	  });
	  // this._canvas.getRootLayer().on('mousedown', function(){
	  //   console.log('_canvas.getRootLayer()on(\'click\')', arguments);
	  //   if (d3.event.eventPhase === 2) {
	  //     that._eventBus.emit('background.click');
	  //   }
	  // });
	};

/***/ }),
/* 1646 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['drag'],
	  drag: ['type', __webpack_require__(1647)],
	  __depends__: [
	    __webpack_require__(1650),
	    __webpack_require__(1654)
	  ]
	};


/***/ }),
/* 1647 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(555),
	    forIn = __webpack_require__(6).forIn,
	    getLocalName = __webpack_require__(1561);
	
	__webpack_require__(1648);
	
	/**
	 * Drag description
	 *
	 * @class
	 * @constructor
	 *
	 * @param canvas
	 * @param {EventEmitter} eventBus
	 * @param {DrawingRegistry} drawingRegistry
	 * @param selection
	 */
	
	function Drag(canvas, eventBus, drawingRegistry, selection) {
	  
	  this._canvas = canvas;
	  this._eventBus = eventBus;
	  this._drawingRegistry = drawingRegistry;
	  this._selection = selection;
	  
	  this._init();
	}
	
	Drag.$inject = [
	  'canvas',
	  'eventBus',
	  'drawingRegistry',
	  'selection'
	];
	
	module.exports = Drag;
	
	Drag.prototype._applyOffset = function (elem, def, dX, dY) {
	  var x = (elem.attr('x') * 1.0) + dX,
	      y = (elem.attr('y') * 1.0) + dY,
	      translate = 'translate(' + x + ',' + y + ')';
	  elem
	    .attr('x', x)
	    .attr('y', y)
	    .attr('transform', translate);
	  // update business object
	  def.position.x = x;
	  def.position.y = y;
	  def.change = 1;
	  this._eventBus.emit(getLocalName(def) + '.moved', elem, def);
	};
	
	Drag.prototype._applyOffsetToSelected = function (dX, dY) {
	  var updateDrag = function (v) {
	    if (getLocalName(v.definition) !== 'link') {
	      this._applyOffset(d3.select(v.element.node().parentNode), v.definition, dX, dY);
	      // drag associated label
	      if (v.definition.label) {
	        this._applyOffset(d3.select(this._drawingRegistry.get(v.definition.label.id).node().parentNode), v.definition.label, dX, dY);
	      }
	    }
	  }.bind(this);
	  forIn(this._selection._currentSelection, updateDrag);
	};
	
	Drag.prototype._setElemToDrag = function (element) {
	  var that = this;
	  d3.select(element.node().parentNode).call(
	    d3.drag()
	      .on('start', function () {
	        if (!that._canvas.getRootLayer().classed('no-drag')) {
	          that._canvas.getRootLayer().classed('cursor-grabbing', true);
	          d3.event
	            .on('end', function () {
	              that._canvas.getRootLayer().classed('cursor-grabbing', false);
	
	            })
	            .on('drag', function () {
	              that._applyOffsetToSelected(d3.event.dx, d3.event.dy);
	            });
	        }
	      })
	  );
	};
	
	Drag.prototype._init = function () {
	  var that = this;
	  // set to drag outlined elements
	  this._eventBus.on('outline.created', function (element, definition) {
	    if (getLocalName(definition) !== 'link') {
	      that._setElemToDrag.apply(that, arguments);
	    }
	  });
	};

/***/ }),
/* 1648 */
[3229, 1649],
/* 1649 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1485)();
	// imports
	
	
	// module
	exports.push([module.id, ".cursor-grabbing {\n  cursor: move; }\n", ""]);
	
	// exports


/***/ }),
/* 1650 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['outline'],
	  outline: ['type', __webpack_require__(1651)],
	  __depends__: [
	    //''
	  ]
	};


/***/ }),
/* 1651 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(555),
	  forEach = __webpack_require__(1496).forEach,
	  getLocalName = __webpack_require__(1561);
	
	__webpack_require__(1652);
	
	/**
	 * Outline description
	 *
	 * @class
	 * @constructor
	 *
	 * @param {Canvas} canvas
	 */
	
	function Outline(canvas, eventBus) {
	  
	  this._canvas = canvas;
	  this._eventBus = eventBus;
	  
	  this._init();
	}
	
	Outline.$inject = [
	  'canvas',
	  'eventBus',
	];
	
	module.exports = Outline;
	
	Outline.prototype._getElemBBox = function (element) {
	  return element.node().getBBox();
	};
	
	Outline.prototype._createOutline = function (element, definition) {
	  // add the outline to every node created
	  var that = this,
	    type = getLocalName(definition),
	    elemSize = this._getElemBBox(element);
	  if (type === 'link'){
	    var x = Infinity,
	      y = Infinity;
	    forEach(definition.waypoint, function(v){
	      x = Math.min(x, v.x);
	      y = Math.min(y, v.y);
	    });
	  }
	  var outline = d3.select(element.node().parentNode)
	      .append('rect')
	      .attr('class', 'element-outline')
	      .attr('x', function () {
	        var rt = 0;
	        if (type === 'label') {
	          rt = elemSize.width / -2.0;
	        } else if (type === 'link') {
	          rt = x;
	        }
	        return rt;
	      })
	      .attr('y', function () {
	        var rt = 0;
	        if (type === 'label') {
	          rt = elemSize.height / -1.33333333;
	        } else if (type === 'link') {
	          rt = y;
	        }
	        return rt;
	      })
	      .attr('fill', 'none')
	      .attr('stroke', 'red')
	      .attr('stroke-width', 0)
	      .attr('stroke-dasharray', '3')
	      .attr('width', elemSize.width + 6)
	      .attr('height', elemSize.height + 6);
	  that._eventBus.emit('outline.created', element, definition, outline);
	};
	
	Outline.prototype._init = function () {
	  var that = this;
	  this._eventBus.on('node.created', function () {
	    that._createOutline.apply(that, arguments);
	  });
	  this._eventBus.on('label.created', function () {
	    that._createOutline.apply(that, arguments);
	  });
	  this._eventBus.on('zone.created', function () {
	    that._createOutline.apply(that, arguments);
	  });
	  this._eventBus.on('link.created', function () {
	    that._createOutline.apply(that, arguments);
	  });
	};

/***/ }),
/* 1652 */
[3229, 1653],
/* 1653 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1485)();
	// imports
	
	
	// module
	exports.push([module.id, ".pfdjs-container .element > .element-outline {\n  stroke-width: 0; }\n\n.pfdjs-container .element.selected > .element-outline, .pfdjs-container .element:hover > .element-outline {\n  stroke-width: 1px; }\n", ""]);
	
	// exports


/***/ }),
/* 1654 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['selection'],
	  selection: ['type', __webpack_require__(1655)],
	  __depends__: [
	    //
	  ]
	};


/***/ }),
/* 1655 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(555),
	    forIn = __webpack_require__(6).forIn,
	    valuesIn = __webpack_require__(6).valuesIn,
	    getLocalName = __webpack_require__(1561);
	
	/**
	 * Selection description
	 *
	 * @class
	 * @constructor
	 *
	 * @param {EventEmitter} eventBus
	 * @param {Canvas} canvas
	 * @param {ElementRegistry} elementRegistry
	 */
	
	function Selection(eventBus, canvas) {
	  
	  this._eventBus = eventBus;
	  this._canvas = canvas;
	  this._currentSelection = {};
	  
	  this._init();
	}
	
	Selection.$inject = [
	  'eventBus',
	  'canvas'
	];
	
	module.exports = Selection;
	
	Selection.prototype._unSelectElement = function (element, definition, emitChange) {
	  var prevSelection = valuesIn(this._currentSelection);
	  delete this._currentSelection[definition.id];
	  d3.select(element.node().parentNode).classed('selected', false);
	  if (emitChange){
	    var curSelection = valuesIn(this._currentSelection);
	    this._eventBus.emit('selection.changed', prevSelection, curSelection);
	  }
	};
	
	Selection.prototype._selectElement = function (element, definition, event) {
	  if (!event || !event.ctrlKey) {
	    // overwrite the selected elements with the clicked element
	    this._unSelectAllElements(true);
	  }
	  //console.log(element);
	  // append the clicked element to the selected elements
	  d3.select(element.node().parentNode).classed('selected', true);
	  var prevSelection = valuesIn(this._currentSelection);
	  this._currentSelection[definition.id] = {
	    element: element,
	    definition: definition
	  };
	  var curSelection = valuesIn(this._currentSelection);
	  this._eventBus.emit('selection.changed', prevSelection, curSelection);
	};
	
	Selection.prototype._unSelectAllElements = function (cancelEmitChange) {
	  var that = this;
	  forIn(this._currentSelection, function (v) {
	    that._unSelectElement(v.element, v.definition, !cancelEmitChange);
	  });
	};
	
	Selection.prototype.deleteSelected = function () {
	  var that = this;
	  forIn(this._currentSelection, function (v) {
	    that._unSelectElement(v.element, v.definition);
	    that._eventBus.emit(getLocalName(v.definition) + '.deleted', v.element, v.definition);
	  });
	};
	
	Selection.prototype.getSelectedElements = function () {
	  return valuesIn(this._currentSelection);
	};
	
	Selection.prototype._init = function () {
	  var that = this;
	  this._eventBus.on('label.mousedown', function () {
	    that._selectElement.apply(that, arguments);
	  });
	  this._eventBus.on('link.mousedown', function () {
	    that._selectElement.apply(that, arguments);
	  });
	  this._eventBus.on('node.mousedown', function () {
	    that._selectElement.apply(that, arguments);
	  });
	  this._eventBus.on('zone.mousedown', function () {
	    that._selectElement.apply(that, arguments);
	  });
	  this._eventBus.on('background.click', function () {
	    that._unSelectAllElements.apply(that);
	  });
	};

/***/ }),
/* 1656 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['palette'],
	  palette: ['type', __webpack_require__(1657)],
	  __depends__: [
	    __webpack_require__(1660)
	  ]
	};


/***/ }),
/* 1657 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(945).isFunction,
	  forIn = __webpack_require__(6).forIn,
	  domify = __webpack_require__(1636),
	  domQuery = __webpack_require__(4),
	  domAttr = __webpack_require__(1626),
	  domClear = __webpack_require__(1630),
	  domClasses = __webpack_require__(1627),
	  domDelegate = __webpack_require__(1634),
	  domEvent = __webpack_require__(1003)
	  ;
	
	__webpack_require__(1658);
	
	/**
	 * Palette description
	 *
	 * @class
	 * @constructor
	 *
	 * @param {Canvas} canvas
	 * @param selection
	 * @param paletteProvider
	 */
	
	function Palette(canvas, selection, paletteProvider) {
	  
	  this._canvas = canvas;
	  this._selection = selection;
	  this._paletteContainer = null;
	  this._paletteProvider = paletteProvider;
	  
	  this._init();
	}
	
	Palette.$inject = [
	  'canvas',
	  'selection',
	  'paletteProvider'
	];
	
	module.exports = Palette;
	
	Palette.prototype._drawContainer = function () {
	  var container = this._canvas.getContainer();
	  
	  this._paletteContainer = domify(Palette.HTML_MARKUP);
	  
	  container.insertBefore(this._paletteContainer, container.childNodes[0]);
	  
	  this._entriesContainer = domQuery('.pfdjs-entries', this._paletteContainer);
	  
	};
	
	Palette.prototype._deactivateTools = function () {
	  this._tools = this._paletteProvider.getPaletteTools();
	  forIn(this._tools, function(v){
	    v.deactivate.call(v);
	  });
	};
	
	Palette.prototype._createDelegates = function () {
	  var that = this;
	  
	  domDelegate.bind(this._paletteContainer, '.pfdjs-entry', 'click', function (event) {
	    that.trigger('click', event);
	    event.stopImmediatePropagation();
	  });
	  
	  // // prevent drag propagation
	  domEvent.bind(this._paletteContainer, 'mousedown', function(event) {
	    that._deactivateTools();
	  });
	  //
	  // // prevent drag propagation
	  // domDelegate.bind(this._paletteContainer, '.pfdjs-entry', 'dragstart', function(event) {
	  //   var rects = event.delegateTarget.getBoundingClientRect();
	  //   event.lastPosition = lastPosition = {x: rects.left, y: rects.top };
	  //   event.delta = {x: 0, y: 0};
	  //
	  //   that.trigger('dragstart', event);
	  // });
	  //
	  // domDelegate.bind(this._paletteContainer, '.pfdjs-entry', 'dragend', function(event) {
	  //   var rects = {left: event.pageX, top: event.pageY};
	  //   event.delta = {x: rects.left - lastPosition.x, y: rects.top - lastPosition.y};
	  //   event.lastPosition = lastPosition = {x: rects.left, y: rects.top };
	  //
	  //   that.trigger('dragend', event);
	  // });
	  //
	  // domDelegate.bind(this._paletteContainer, '.pfdjs-entry', 'drag', function(event) {
	  //   var rects = {left: event.pageX, top: event.pageY};
	  //   event.delta = {x: rects.left - lastPosition.x, y: rects.top - lastPosition.y};
	  //   event.lastPosition = lastPosition = {x: rects.left, y: rects.top };
	  //
	  //   that.trigger('drag', event);
	  // });
	  
	};
	
	Palette.prototype.trigger = function (action, event) {
	  var entries = this._actions,
	    entry,
	    handler,
	    originalEvent,
	    button = event.delegateTarget || event.target;
	  
	  this._deactivateTools();
	  
	  if (!button) {
	    return event.preventDefault();
	  }
	  
	  entry = entries[domAttr(button, 'data-action')];
	  
	  // when user clicks on the palette and not on an action
	  if (!entry) {
	    return;
	  }
	  
	  handler = entry.action;
	  
	  originalEvent = event.originalEvent || event;
	  
	  // simple action (via callback function)
	  if (isFunction(handler)) {
	    if (action === 'click') {
	      handler(originalEvent);
	    }
	  } else {
	    if (handler[action]) {
	      handler[action](originalEvent);
	    }
	  }
	  
	  // if was click or drag finished, silence other actions
	  if (action === 'click' || action === 'dragend') {
	    event.preventDefault();
	  }
	};
	
	Palette.prototype._drawEntry = function (entry, id) {
	  
	  var grouping = entry.group || 'default';
	  
	  var container = domQuery('[data-group=' + grouping + ']', this._entriesContainer);
	  if (!container) {
	    container = domify('<div class="pfdjs-entries-group" data-group="' + grouping + '"></div>');
	    this._entriesContainer.appendChild(container);
	  }
	  var html = entry.html || '<div class="pfdjs-entry"></div>';
	  
	  var control = domify(html);
	  container.appendChild(control);
	  
	  domAttr(control, 'data-action', id);
	  
	  if (entry.title) {
	    domAttr(control, 'title', entry.title);
	  }
	  
	  if (entry.className) {
	    domClasses(control).add(entry.className);
	  }
	  
	  if (entry.iconClassName) {
	    control.appendChild(domify('<span class="' + entry.iconClassName + '"/>'));
	  }
	  
	};
	
	Palette.prototype._drawEntries = function () {
	  var that = this,
	    actions = this._actions = this._paletteProvider.getPaletteEntries();
	  forIn(actions, function (action, id) {
	    that._drawEntry.call(that, action, id);
	  });
	};
	
	Palette.prototype._update = function () {
	  if (this._paletteEntries) {
	    domClear(this._paletteEntries);
	  }
	  this._drawEntries();
	};
	
	Palette.prototype._init = function () {
	  this._drawContainer();
	  this._update();
	  this._createDelegates();
	};
	
	/* markup definition */
	
	Palette.HTML_MARKUP =
	  '<div class="pfdjs-palette">' +
	  '  <div class="pfdjs-entries">' +
	  '  </div>' +
	  '</div>';

/***/ }),
/* 1658 */
[3229, 1659],
/* 1659 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1485)();
	// imports
	
	
	// module
	exports.push([module.id, ".pfdjs-container .pfdjs-palette {\n  position: absolute;\n  margin: 6px;\n  padding: 3px 6px;\n  background: #fafafa;\n  border: solid 1px #cccccc;\n  border-radius: 2px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);\n  z-index: 1; }\n  .pfdjs-container .pfdjs-palette .pfdjs-entries .pfdjs-entries-group {\n    margin: 3px 0;\n    height: 26px;\n    float: left; }\n    .pfdjs-container .pfdjs-palette .pfdjs-entries .pfdjs-entries-group .pfdjs-entry {\n      float: left;\n      width: 24px;\n      color: #333333;\n      padding: 3px 0;\n      font-size: 20px;\n      cursor: pointer;\n      margin: 0 4px;\n      text-align: center; }\n      .pfdjs-container .pfdjs-palette .pfdjs-entries .pfdjs-entries-group .pfdjs-entry:hover {\n        color: #ff4800; }\n  .pfdjs-container .pfdjs-palette .pfdjs-entries .pfdjs-entries-group:not(:last-of-type) {\n    border-right: 1px solid #cccccc;\n    padding-right: 7px; }\n", ""]);
	
	// exports


/***/ }),
/* 1660 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['paletteProvider'],
	  paletteProvider: ['type', __webpack_require__(1661)],
	  __depends__: [
	    __webpack_require__(1662),
	    __webpack_require__(1666),
	    __webpack_require__(1668)
	  ]
	};


/***/ }),
/* 1661 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * PaletteProvider description
	 *
	 * @class
	 * @constructor
	 *
	 * @param d3polytree
	 * @param {EventEmitter} eventBus
	 * @param localStorage
	 * @param uploader
	 * @param exporting
	 * @param axes
	 * @param selection
	 * @param addNodeHandler
	 * @param addLabelHandler
	 * @param addLinkTool
	 * @param notifications
	 */
	
	function PaletteProvider(d3polytree,
	                         eventBus,
	                         localStorage,
	                         uploader,
	                         exporting,
	                         axes,
	                         selection,
	                         addNodeHandler,
	                         addLabelHandler,
	                         addLinkTool,
	                         notifications) {
	  
	  this._d3polytree = d3polytree;
	  this._eventBus = eventBus;
	  this._localStorage = localStorage;
	  this._uploader = uploader;
	  this._exporting = exporting;
	  this._axes = axes;
	  this._selection = selection;
	  this._addNodeHandler = addNodeHandler;
	  this._addLabelHandler = addLabelHandler;
	  this._notifications = notifications;
	  this._tools = {
	    'addLinkTool': addLinkTool
	  };
	}
	
	PaletteProvider.$inject = [
	  'd3polytree',
	  'eventBus',
	  'localStorage',
	  'upload',
	  'exporting',
	  'axes',
	  'selection',
	  'addNodeHandler',
	  'addLabelHandler',
	  'addLinkTool',
	  'notifications'
	];
	
	module.exports = PaletteProvider;
	
	PaletteProvider.prototype.getPaletteTools = function () {
	  return this._tools;
	};
	
	PaletteProvider.prototype.getPaletteEntries = function () {
	  var that = this;
	  return {
	    'new': {
	      title: 'New diagram',
	      group: 'file-ops',
	      iconClassName: 'icon-doc',
	      action: {
	        click: function () {
	          that._notifications.warning({
	            'title': 'Are you sure?',
	            'text': 'All current progress will be unrecoverable.'
	          }, function(result){
	            if (result){
	              that._d3polytree.createDiagram();
	            }
	          });
	        }
	      },
	    },
	    'save': {
	      title: 'Save diagram',
	      group: 'file-ops',
	      iconClassName: 'icon-floppy',
	      action: {
	        click: function () {
	          that._localStorage.save();
	        }
	      }
	    },
	    'open': {
	      title: 'Open diagram',
	      group: 'file-ops',
	      iconClassName: 'icon-folder-open-empty',
	      action: {
	        click: function () {
	          that._uploader.openDialog();
	        }
	      },
	    },
	    'download': {
	      title: 'Download diagram',
	      group: 'file-ops',
	      iconClassName: 'icon-download',
	      action: {
	        click: function () {
	          that._exporting.trigger('pfdn');
	        }
	      },
	    },
	    'export-svg': {
	      title: 'Download as SVG image',
	      group: 'file-export',
	      iconClassName: 'icon-file-code',
	      action: {
	        click: function () {
	          that._exporting.trigger('svg');
	        }
	      },
	    },
	    'export-png': {
	      title: 'Download as PNG image',
	      group: 'file-export',
	      iconClassName: 'icon-image',
	      action: {
	        click: function () {
	          that._exporting.trigger('png');
	        }
	      },
	    },
	    'new-connection': {
	      title: 'New connection',
	      group: 'drawing',
	      iconClassName: 'icon-arrow',
	      action: {
	        click: function () {
	          that._tools.addLinkTool.activate();
	        }
	      },
	    },
	    'new-label': {
	      title: 'New label',
	      group: 'drawing',
	      iconClassName: 'icon-text',
	      action: {
	        click: function () {
	          that._addLabelHandler.append();
	        }
	      },
	    },
	    'new-node': {
	      title: 'New node',
	      group: 'drawing',
	      iconClassName: 'icon-check-empty',
	      action: {
	        click: function () {
	          that._addNodeHandler.append();
	        }
	      },
	    },
	    'delete-item': {
	      title: 'Delete selected item(s)',
	      group: 'utils',
	      iconClassName: 'icon-trash',
	      action: {
	        click: function () {
	          that._selection.deleteSelected();
	        }
	      },
	    },
	    'toggle-grid': {
	      title: 'Show/hide grid',
	      group: 'settings',
	      iconClassName: 'icon-grid',
	      action: {
	        click: function () {
	          that._axes.toggleVisible();
	        }
	      },
	    }
	  };
	};

/***/ }),
/* 1662 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['addNodeHandler'],
	  addNodeHandler: ['type', __webpack_require__(1663)],
	  __depends__: [
	    __webpack_require__(1604)
	  ]
	};


/***/ }),
/* 1663 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(2),
	    baseAddHandler = __webpack_require__(1664);
	
	function AddNodeHandler(drawingRegistry, selection, canvas, modelling, moddle, nodes) {
	  baseAddHandler.call(this, 'node', drawingRegistry, selection, canvas, modelling);
	  this._moddle = moddle;
	  this._nodes = nodes;
	}
	
	AddNodeHandler.$inject = [
	  'drawingRegistry',
	  'selection',
	  'canvas',
	  'modelling',
	  'd3polytree.moddle',
	  'nodes'
	];
	
	module.exports = AddNodeHandler;
	
	inherits(AddNodeHandler, baseAddHandler);


/***/ }),
/* 1664 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1665);

/***/ }),
/* 1665 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(555),
	    valuesIn = __webpack_require__(6).valuesIn,
	    isUndefined = __webpack_require__(945).isUndefined;
	
	function BaseAddHandler(className, drawingRegistry, selection, canvas, modelling) {
	  this._className = className;
	  this._drawingRegistry = drawingRegistry;
	  this._selection = selection;
	  this._canvas = canvas;
	  this._modelling = modelling;
	}
	
	module.exports = BaseAddHandler;
	
	BaseAddHandler.prototype._getElemOfReference = function () {
	  var elements = valuesIn(this._drawingRegistry.getAll()),
	      pointOfRef = false;
	  
	  if (elements.length > 0) {
	    pointOfRef = d3.select(elements[0].node().parentNode);
	  } else {
	    pointOfRef = this._canvas.getDrawingLayer();
	  }
	  
	  return pointOfRef;
	};
	
	BaseAddHandler.prototype._calculatePosition = function () {
	  var elemOfRef = this._getElemOfReference(),
	      position = this._canvas.getContainer().getBoundingClientRect(),
	      dLayerRect = elemOfRef.node().getBoundingClientRect(),
	      elemOfRefTransform = this._canvas.getTransform(elemOfRef),
	      canvasTransform = this._canvas.getTransform(),
	      translateX = elemOfRefTransform.e,
	      translateY = elemOfRefTransform.f,
	      scale = canvasTransform.a;
	  
	  return {
	    x: -1.0 * (dLayerRect.left - (translateX * scale) - (position.left + (position.width / 2))) / scale,
	    y: -1.0 * (dLayerRect.top - (translateY * scale) - (position.top + (position.height / 2))) / scale
	  };
	};
	
	BaseAddHandler.prototype._create = function () {
	  return this._modelling.doAction(this._className, 'create', [].slice.call(arguments));
	};
	
	BaseAddHandler.prototype.append = function (parameters) {
	  parameters = isUndefined(parameters) ? {} : parameters;
	  parameters.position = this._calculatePosition();
	  var newElementDef = this._create(parameters),
	      newElement = this._drawingRegistry.get(newElementDef.id);
	  // select it
	  this._selection._selectElement(newElement, newElementDef, {});
	};

/***/ }),
/* 1666 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['addLabelHandler'],
	  addLabelHandler: ['type', __webpack_require__(1667)],
	  __depends__: [
	    __webpack_require__(1604)
	  ]
	};


/***/ }),
/* 1667 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(2),
	    baseAddHandler = __webpack_require__(1664);
	
	function AddLabelHandler(drawingRegistry, selection, canvas, modelling, moddle, labels) {
	  baseAddHandler.call(this, 'label', drawingRegistry, selection, canvas, modelling);
	  this._moddle = moddle;
	  this._labels = labels;
	}
	
	AddLabelHandler.$inject = [
	  'drawingRegistry',
	  'selection',
	  'canvas',
	  'modelling',
	  'd3polytree.moddle',
	  'labels'
	];
	
	module.exports = AddLabelHandler;
	
	inherits(AddLabelHandler, baseAddHandler);


/***/ }),
/* 1668 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['addLinkTool'],
	  addLinkTool: ['type', __webpack_require__(1669)],
	  __depends__: [
	    __webpack_require__(1604)
	  ]
	};


/***/ }),
/* 1669 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(245).Promise,
	    inherits = __webpack_require__(2),
	    ITool = __webpack_require__(1670),
	    d3 = __webpack_require__(555);
	
	__webpack_require__(1672);
	
	function AddLinkTool(eventBus, canvas, modelling) {
	  ITool.call(this);
	  this._eventBus = eventBus;
	  this._canvas = canvas;
	  this._modelling = modelling;
	  
	  this._selectedNodes = [];
	  this._fakeLink = this._canvas.getDrawingLayer()
	    .insert('path', '.node') // send under the nodes layer
	    .attr('class', 'fake-link')
	    .attr('d', 'M0,0L0,0')
	    .style('stroke', 'black')
	    .style('fill', 'none');
	}
	
	AddLinkTool.$inject = [
	  'eventBus',
	  'canvas',
	  'modelling'
	];
	
	module.exports = AddLinkTool;
	
	inherits(AddLinkTool, ITool);
	
	AddLinkTool.prototype._registerEvent = function () {
	  var that = this;
	  this._eventBus.once('node.mousedown', 100, function (element, definition, event) {
	    if (!that.active) return;
	    return Promise(function (resolve, reject) {
	      event.stopImmediatePropagation();
	      reject();
	      if (that._selectedNodes.length === 0 ||
	        (that._selectedNodes.length === 1 && that._selectedNodes[0]['element'] !== element)) {
	        // set the selected node
	        that._selectedNodes.push({
	          'element': element,
	          'definition': definition
	        });
	      }
	      if (that._selectedNodes.length === 2) {
	        // create link
	        that._appendLink();
	        // deactivate
	        that.deactivate();
	      } else {
	        if (that._selectedNodes.length === 1) {
	          // append the fake link
	          that._showFakeLink();
	        }
	        // register event
	        that._registerEvent();
	      }
	    });
	  });
	};
	
	AddLinkTool.prototype._showFakeLink = function () {
	  // get the first node
	  var sourceElemDef = this._selectedNodes[0]['definition'],
	      x = sourceElemDef.position.x,
	      y = sourceElemDef.position.y;
	  
	  this._fakeLink
	    .attr('d', 'M' + x + ',' + y + 'L' + x + ',' + y);
	};
	
	AddLinkTool.prototype._resetFakeLink = function () {
	  // return to original position
	  this._fakeLink
	    .attr('d', 'M0,0L0,0');
	};
	
	AddLinkTool.prototype._registerMouseMoveEvent = function () {
	  var that = this;
	  this._canvas.getRootLayer().on('mousemove', function () {
	    if (!that.active) return;
	    if (that._selectedNodes.length === 1) {
	      // move the fake link
	      var sourceElemDef = that._selectedNodes[0]['definition'],
	          dL = that._canvas.getDrawingLayer().node(),
	          x = sourceElemDef.position.x + (sourceElemDef.size / 2),
	          y = sourceElemDef.position.y + (sourceElemDef.size / 2),
	          x1 = d3.mouse(dL)[0],
	          y1 = d3.mouse(dL)[1];
	      
	      that._fakeLink
	        .attr('d', 'M' + x + ',' + y + 'L' + x1 + ',' + y1);
	    }
	  });
	};
	
	AddLinkTool.prototype._appendLink = function () {
	  // create link
	  this._modelling.doAction(
	    'link',
	    'create',
	    [this._selectedNodes[0]['definition'], this._selectedNodes[1]['definition']]
	  );
	};
	
	AddLinkTool.prototype.deactivate = function () {
	  this.active = false;
	  // remove class
	  this._canvas.getRootLayer().classed('no-drag', false);
	  this._canvas.getRootLayer().classed('cursor-add-link', false);
	  // reset the fake link
	  this._resetFakeLink();
	};
	
	AddLinkTool.prototype.activate = function () {
	  this.active = true;
	  this._selectedNodes = [];
	  this._canvas.getRootLayer().classed('no-drag', true);
	  this._canvas.getRootLayer().classed('cursor-add-link', true);
	  this._registerMouseMoveEvent();
	  this._registerEvent();
	};
	


/***/ }),
/* 1670 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1671);

/***/ }),
/* 1671 */
/***/ (function(module, exports) {

	'use strict';
	
	function ITool() {
	}
	
	ITool.$inject = [
	];
	
	module.exports = ITool;
	
	ITool.prototype.activate = function(){
	  console.error('This method must be implemented');
	};
	
	ITool.prototype.deactivate = function(){
	  console.error('This method must be implemented');
	};

/***/ }),
/* 1672 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(1673);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(1486)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 1673 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1485)();
	// imports
	
	
	// module
	exports.push([module.id, ".cursor-add-link {\n  cursor: crosshair; }\n  .cursor-add-link .zone, .cursor-add-link .label, .cursor-add-link .link {\n    opacity: 0.1; }\n  .cursor-add-link .fake-link {\n    display: block; }\n\n.fake-link {\n  display: none; }\n", ""]);
	
	// exports


/***/ }),
/* 1674 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['localStorage'],
	  localStorage: ['type', __webpack_require__(1675)],
	  __depends__: [
	    //''
	  ]
	};


/***/ }),
/* 1675 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ls = __webpack_require__(1676),
	  _done = false;
	
	/**
	 * LocalStorage description
	 *
	 * @class
	 * @constructor
	 *
	 * @param {EventEmitter} eventBus
	 * @param d3polytree
	 * @param notifications
	 */
	
	function LocalStorage(eventBus, d3polytree, notifications) {
	  
	  this._eventBus = eventBus;
	  this._d3polytree = d3polytree;
	  this._notifications = notifications;
	
	  this._init();
	}
	
	LocalStorage.$inject = [
	  'eventBus',
	  'd3polytree',
	  'notifications'
	];
	
	module.exports = LocalStorage;
	
	LocalStorage.prototype.loadSaved = function () {
	  if (_done) {
	    return;
	  } else {
	    _done = true;
	  }
	  var diagram = ls('diagram');
	  if (!diagram) {
	    diagram = this._d3polytree.initialDiagram;
	  }
	  this._d3polytree.importDiagram(diagram);
	};
	
	LocalStorage.prototype._init = function () {
	  var that = this;
	  this._eventBus.once('diagram.ready', function () {
	    that.loadSaved.call(that);
	  });
	};
	
	LocalStorage.prototype.save = function () {
	  var that = this;
	  this._d3polytree.exportDiagram()
	    .then(function (diagram) {
	      ls('diagram', diagram);
	      that._notifications.success({title: 'Sucess', text: 'Diagram saved'});
	    });
	};


/***/ }),
/* 1676 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var stub = __webpack_require__(1677);
	var tracking = __webpack_require__(1678);
	var ls = 'localStorage' in global && global.localStorage ? global.localStorage : stub;
	
	function accessor (key, value) {
	  if (arguments.length === 1) {
	    return get(key);
	  }
	  return set(key, value);
	}
	
	function get (key) {
	  return JSON.parse(ls.getItem(key));
	}
	
	function set (key, value) {
	  try {
	    ls.setItem(key, JSON.stringify(value));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}
	
	function remove (key) {
	  return ls.removeItem(key);
	}
	
	function clear () {
	  return ls.clear();
	}
	
	accessor.set = set;
	accessor.get = get;
	accessor.remove = remove;
	accessor.clear = clear;
	accessor.on = tracking.on;
	accessor.off = tracking.off;
	
	module.exports = accessor;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1677 */
/***/ (function(module, exports) {

	'use strict';
	
	var ms = {};
	
	function getItem (key) {
	  return key in ms ? ms[key] : null;
	}
	
	function setItem (key, value) {
	  ms[key] = value;
	  return true;
	}
	
	function removeItem (key) {
	  var found = key in ms;
	  if (found) {
	    return delete ms[key];
	  }
	  return false;
	}
	
	function clear () {
	  ms = {};
	  return true;
	}
	
	module.exports = {
	  getItem: getItem,
	  setItem: setItem,
	  removeItem: removeItem,
	  clear: clear
	};


/***/ }),
/* 1678 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var listeners = {};
	var listening = false;
	
	function listen () {
	  if (global.addEventListener) {
	    global.addEventListener('storage', change, false);
	  } else if (global.attachEvent) {
	    global.attachEvent('onstorage', change);
	  } else {
	    global.onstorage = change;
	  }
	}
	
	function change (e) {
	  if (!e) {
	    e = global.event;
	  }
	  var all = listeners[e.key];
	  if (all) {
	    all.forEach(fire);
	  }
	
	  function fire (listener) {
	    listener(JSON.parse(e.newValue), JSON.parse(e.oldValue), e.url || e.uri);
	  }
	}
	
	function on (key, fn) {
	  if (listeners[key]) {
	    listeners[key].push(fn);
	  } else {
	    listeners[key] = [fn];
	  }
	  if (listening === false) {
	    listen();
	  }
	}
	
	function off (key, fn) {
	  var ns = listeners[key];
	  if (ns.length > 1) {
	    ns.splice(ns.indexOf(fn), 1);
	  } else {
	    listeners[key] = [];
	  }
	}
	
	module.exports = {
	  on: on,
	  off: off
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1679 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['upload'],
	  upload: ['type', __webpack_require__(1680)],
	  __depends__: [
	    //''
	  ]
	};


/***/ }),
/* 1680 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var domify = __webpack_require__(1636),
	  assign = __webpack_require__(6).assign,
	  domEvent = __webpack_require__(1003)
	;
	
	/**
	 * Upload description
	 *
	 * @class
	 * @constructor
	 *
	 * @param {EventBus} eventBus
	 */
	
	function Upload(canvas, d3polytree) {
	  
	  this._canvas = canvas;
	  this._d3polytree = d3polytree;
	  
	  this._init();
	}
	
	Upload.$inject = [
	  'canvas',
	  'd3polytree'
	];
	
	module.exports = Upload;
	
	Upload.prototype._init = function () {
	  var that = this,
	    container = this._canvas.getContainer();
	  
	  this._fileInput = domify('<input type="file" />');
	  
	  assign(this._fileInput.style, {
	    width: 1,
	    height: 1,
	    display: 'none',
	    overflow: 'hidden'
	  });
	  
	  container.insertBefore(this._fileInput, container.childNodes[0]);
	  
	  domEvent.bind(this._fileInput, 'change', function (e) {
	    that._openFile(e.target.files[0], that._openDiagram, that);
	  });
	  
	};
	
	Upload.prototype.openDialog = function () {
	  this._fileInput.click();
	};
	
	Upload.prototype._openDiagram = function (diagram) {
	  this._d3polytree.importDiagram(diagram);
	};
	
	Upload.prototype._openFile = function (file, callback, context) {
	  // check file api availability
	  if (!window.FileReader) {
	    return window.alert(
	      'Looks like you use an older browser that does not support upload. ' +
	      'Try using a modern browser such as Chrome, Firefox or Internet Explorer > 10.');
	  }
	  
	  // no file chosen
	  if (!file) {
	    return;
	  }
	  
	  var reader = new FileReader();
	  
	  reader.onload = function (e) {
	    var xml = e.target.result;
	    callback.call(context, xml);
	  };
	  
	  reader.readAsText(file);
	};

/***/ }),
/* 1681 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['exporting'],
	  exporting: ['type', __webpack_require__(1682)],
	  __depends__: [
	    //''
	  ]
	};


/***/ }),
/* 1682 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var domify = __webpack_require__(1636),
	  assign = __webpack_require__(6).assign,
	  Promise = __webpack_require__(245).Promise
	;
	
	/**
	 * Exporting description
	 *
	 * @class
	 * @constructor
	 *
	 * @param {d3polytree} d3polytree
	 */
	
	function Exporting(canvas, d3polytree) {
	
	  this._canvas = canvas;
	  this._d3polytree = d3polytree;
	  this._init();
	
	}
	
	Exporting.$inject = [
	  'canvas',
	  'd3polytree'
	];
	
	module.exports = Exporting;
	
	Exporting.prototype._encode = function (data) {
	  return new Promise(function(resolve){
	    resolve('data:application/xml;base64,' + btoa( unescape( encodeURIComponent(data))));
	  });
	};
	
	Exporting.prototype._svgToImage = function (data) {
	  var that = this;
	  //console.log(data);
	  return new Promise(function(resolve) {
	
	    var imgSrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(data)));
	    var canvas = document.createElement('canvas');
	    var context = canvas.getContext('2d');
	    var bBox = that._canvas.getSVG().node().parentNode;
	    var width = bBox.offsetWidth;
	    var height = bBox.offsetHeight;
	
	    canvas.width = width;
	    canvas.height = height;
	
	    var image = new Image();
	    image.onload = function () {
	      context.clearRect(0, 0, width, height);
	      context.drawImage(image, 0, 0, width, height);
	      resolve(canvas.toDataURL('image/png'));
	    };
	
	    image.src = imgSrc;
	  });
	};
	
	Exporting.prototype.trigger = function (fileType, options) {
	  var fn, fnEncode, that = this;
	  if (fileType === 'pfdn') {
	    fn = this._d3polytree.exportDiagram;
	    fnEncode = this._encode;
	  } else if (fileType === 'svg') {
	    fn = this._d3polytree.exportSVG;
	    fnEncode = this._encode;
	  } else if (fileType === 'png') {
	    fn = this._d3polytree.exportSVG;
	    fnEncode = this._svgToImage;
	  } else {
	    console.error('Format not supported');
	  }
	  fn.call(this._d3polytree, options).then(function (str) {
	    fnEncode.call(that, str).then(function(exportStr){
	      that._exporter.setAttribute('href', exportStr);
	      that._exporter.setAttribute('download', 'diagram.' + fileType);
	      that._exporter.click();
	    });
	  }, function (e) {
	    console.error(e);
	  });
	};
	
	Exporting.prototype._init = function () {
	  var container = this._canvas.getContainer();
	
	  this._exporter = domify('<a/>');
	
	  assign(this._exporter.style, {
	    width: 1,
	    height: 1,
	    display: 'none',
	    overflow: 'hidden'
	  });
	
	  container.insertBefore(this._exporter, container.childNodes[0]);
	};

/***/ }),
/* 1683 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['modelling'],
	  modelling: ['type', __webpack_require__(1684)],
	  __depends__: [
	    __webpack_require__(1685),
	    __webpack_require__(1690),
	    __webpack_require__(1692),
	    __webpack_require__(1694),
	    __webpack_require__(1492)
	  ]
	};
	


/***/ }),
/* 1684 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Updates model
	 *
	 * @class
	 * @constructor
	 *
	 * @param {EventEmitter} eventBus
	 * @param {ModdleElement} definitions
	 * @param modellingNodes
	 * @param modellingLabels
	 * @param modellingZones
	 * @param modellingLinks
	 */
	
	function Modelling(eventBus, definitions, modellingNodes, modellingLabels, modellingZones, modellingLinks) {
	  this._eventBus = eventBus;
	  this._definitions = definitions;
	  
	  this._elements = {
	    'label': modellingLabels,
	    'node': modellingNodes,
	    'zone': modellingZones,
	    'link': modellingLinks,
	  };
	  
	  this._init();
	}
	
	module.exports = Modelling;
	
	Modelling.$inject = [
	  'eventBus',
	  'd3polytree.definitions',
	  'modellingNodes',
	  'modellingLabels',
	  'modellingZones',
	  'modellingLinks'
	];
	
	Modelling.prototype.doAction = function(elementClassName, action, parameters){
	  var actionElem = this._elements[elementClassName];
	  if (actionElem){
	    var actionFunc = actionElem[action];
	    if (actionFunc){
	      return actionFunc.apply(actionElem, parameters);
	    }
	  }
	  return null;
	};
	
	Modelling.prototype._init = function () {
	  var that = this;
	  
	  this._eventBus.on('label.created', function () {
	    that.doAction.apply(that, ['label', 'saveToModel', [].slice.call(arguments)]);
	  });
	  
	  this._eventBus.on('link.created', function () {
	    that.doAction.apply(that, ['link', 'saveToModel', [].slice.call(arguments)]);
	  });
	  
	  this._eventBus.on('node.created', function () {
	    that.doAction.apply(that, ['node', 'saveToModel', [].slice.call(arguments)]);
	  });
	  
	  this._eventBus.on('zone.created', function () {
	    that.doAction.apply(that, ['zone', 'saveToModel', [].slice.call(arguments)]);
	  });
	  
	  this._eventBus.on('label.deleted', function () {
	    that.doAction.apply(that, ['label', 'delete', [].slice.call(arguments)]);
	  });
	  
	  this._eventBus.on('link.deleted', function () {
	    that.doAction.apply(that, ['link', 'delete', [].slice.call(arguments)]);
	  });
	  
	  this._eventBus.on('node.deleted', function () {
	    that.doAction.apply(that, ['node', 'delete', [].slice.call(arguments)]);
	  });
	  
	  this._eventBus.on('zone.deleted', function () {
	    that.doAction.apply(that, ['zone', 'delete', [].slice.call(arguments)]);
	  });
	};


/***/ }),
/* 1685 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['modellingLabels'],
	  modellingLabels: ['type', __webpack_require__(1686)],
	  __depends__: [
	  ]
	};

/***/ }),
/* 1686 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(2),
	    base = __webpack_require__(1687),
	    isUndefined = __webpack_require__(945).isUndefined;
	
	function Labels(definitions, moddle, drawingRegistry, notifications, labels) {
	  base.call(this, definitions, labels, drawingRegistry, notifications);
	  this._moddle = moddle;
	  this._labels = labels;
	}
	
	Labels.$inject = [
	  'd3polytree.definitions',
	  'd3polytree.moddle',
	  'drawingRegistry',
	  'notifications',
	  'labels'
	];
	
	module.exports = Labels;
	
	inherits(Labels, base);
	
	Labels.prototype.create = function (parameters) {
	  parameters.position = isUndefined(parameters.position) ? {x: 0, y: 0} : parameters.position;
	  var newNodePosDef = this._moddle.create('pfdn:Coordinates', parameters.position);
	  var newNodeDef = this._moddle.create('pfdn:Label', {position: newNodePosDef});
	  this._labels._builder(newNodeDef);
	  // console.log(newNodeDef.id+"-");
	  // newNodeDef.text = newNodeDef.id+'+';
	  // console.log(newNodeDef);
	  // this._labels._builder(newNodeDef);
	  // return the element
	  return newNodeDef;
	};

/***/ }),
/* 1687 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1688);


/***/ }),
/* 1688 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getLocalName = __webpack_require__(1561),
	    collections = __webpack_require__(1689);
	
	/**
	 * Updates element's model
	 *
	 * @class
	 * @constructor
	 *
	 * @param {ModdleElement} definitions
	 * @param elements
	 * @param drawingRegistry
	 * @param notifications
	 */
	
	function Base(definitions, elements, drawingRegistry, notifications) {
	  this._definitions = definitions;
	  this._elements = elements;
	  this._drawingRegistry = drawingRegistry;
	  this._notifications = notifications;
	}
	
	module.exports = Base;
	
	Base.prototype.create = function () {
	  console.error('This method must be implemented');
	};
	
	Base.prototype.saveToModel = function (element, definition) {
	  var localName = getLocalName(definition);
	  collections.add(this._definitions.get(localName), definition);
	};
	
	Base.prototype.delete = function (element, definition) {
	  var localName = getLocalName(definition);
	  if (localName === 'label' && definition.isReadOnly === true) {
	    this._notifications.error({
	      text: 'You can\'t delete an associated label, you should remove the main element',
	      title: 'Not allowed!'
	    });
	    return;
	  } else if (localName !== 'label' && definition.get('label') && definition.get('label').$instanceOf('pfdn:Label')) {
	    // also delete the associated label
	    definition.label.isReadOnly = false;
	    var lblElement = this._drawingRegistry.get(definition.label.id);
	    //console.log(lblElement, definition.label);
	    this._eventBus.emit('label.deleted', lblElement, definition.label);
	  }
	  collections.remove(this._definitions.get(localName), definition);
	  this._elements.removeElement.apply(this._elements, arguments);
	};

/***/ }),
/* 1689 */
/***/ (function(module, exports) {

	'use strict';
	
	// from https://github.com/bpmn-io/diagram-js/blob/master/lib/util/Collections.js (BPMN.io License)
	
	/**
	 * Failsafe remove an element from a collection
	 *
	 * @param  {Array<Object>} [collection]
	 * @param  {Object} [element]
	 *
	 * @return {Number} the previous index of the element
	 */
	module.exports.remove = function (collection, element) {
	  
	  if (!collection || !element) {
	    return -1;
	  }
	  
	  var idx = collection.indexOf(element);
	  
	  if (idx !== -1) {
	    collection.splice(idx, 1);
	  }
	  
	  return idx;
	};
	
	/**
	 * Fail save add an element to the given connection, ensuring
	 * it does not yet exist.
	 *
	 * @param {Array<Object>} collection
	 * @param {Object} element
	 * @param {Number} idx
	 */
	module.exports.add = function (collection, element, idx) {
	  
	  if (!collection || !element) {
	    return;
	  }
	  
	  if (typeof idx !== 'number') {
	    idx = -1;
	  }
	  
	  var currentIdx = collection.indexOf(element);
	  
	  if (currentIdx !== -1) {
	    
	    if (currentIdx === idx) {
	      // nothing to do, position has not changed
	      return;
	    } else {
	      
	      if (idx !== -1) {
	        // remove from current position
	        collection.splice(currentIdx, 1);
	      } else {
	        // already exists in collection
	        return;
	      }
	    }
	  }
	  
	  if (idx !== -1) {
	    // insert at specified position
	    collection.splice(idx, 0, element);
	  } else {
	    // push to end
	    collection.push(element);
	  }
	};
	
	
	/**
	 * Fail save get the index of an element in a collection.
	 *
	 * @param {Array<Object>} collection
	 * @param {Object} element
	 *
	 * @return {Number} the index or -1 if collection or element do
	 *                  not exist or the element is not contained.
	 */
	module.exports.indexOf = function (collection, element) {
	  
	  if (!collection || !element) {
	    return -1;
	  }
	  
	  return collection.indexOf(element);
	};

/***/ }),
/* 1690 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['modellingLinks'],
	  modellingLinks: ['type', __webpack_require__(1691)],
	  __depends__: [
	  ]
	};

/***/ }),
/* 1691 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(2),
	    base = __webpack_require__(1687),
	    forEach = __webpack_require__(1496).forEach,
	    sortBy = __webpack_require__(1496).sortBy;
	
	function Links(definitions, moddle, links, eventBus, drawingRegistry, notifications, modellingLabels) {
	  base.call(this, definitions, links, drawingRegistry, notifications);
	  this._moddle = moddle;
	  this._links = links;
	  this._eventBus = eventBus;
	  this._drawingRegistry = drawingRegistry;
	  this._modellingLabels = modellingLabels;
	  this.init();
	}
	
	Links.$inject = [
	  'd3polytree.definitions',
	  'd3polytree.moddle',
	  'links',
	  'eventBus',
	  'drawingRegistry',
	  'notifications',
	  'modellingLabels'
	];
	
	module.exports = Links;
	
	inherits(Links, base);
	
	Links.prototype.create = function (nodeADef, nodeBDef) {
	  var x = nodeADef.position.x + (nodeADef.size / 2),
	      y = nodeADef.position.y + (nodeADef.size / 2),
	      x1 = nodeBDef.position.x + (nodeBDef.size / 2),
	      y1 = nodeBDef.position.y + (nodeBDef.size / 2);
	  
	  var waypoint1 = this._moddle.create('pfdn:Coordinates', {x: x, y: y}),
	      waypoint2 = this._moddle.create('pfdn:Coordinates', {x: x1, y: y1}),
	      newLinkDef = this._moddle.create('pfdn:Link', {
	        source: nodeADef,
	        target: nodeBDef,
	        waypoint: [
	          waypoint1,
	          waypoint2
	        ]
	      });
	  this._links._builder(newLinkDef);
	  var targetElem = this._drawingRegistry.get(newLinkDef.target.id);
	  this.updateNodeLinks(targetElem, newLinkDef.target);
	  var sourceElem = this._drawingRegistry.get(newLinkDef.source.id);
	  this.updateNodeLinks(sourceElem, newLinkDef.source);
	
	  // create the associated
	  var linkLabel = this._modellingLabels.create({
	    position: {
	      x: (waypoint1.x + waypoint2.x) / 2.0,
	      y: (waypoint1.y + waypoint2.y) / 2.0
	    }
	  });
	  linkLabel.set('text', newLinkDef.id);
	  linkLabel.isReadOnly = true;
	  newLinkDef.label = linkLabel;
	  //console.log(newLinkDef);
	  this._modellingLabels._labels._builder(linkLabel) ;
	  // return the element
	  return newLinkDef;
	};
	
	Links.prototype.init = function () {
	  var updateLinksFn = function (element, definition) {
	    this.updateNodeLinks(element, definition);
	  }.bind(this);
	  this._eventBus.on('node.created', updateLinksFn);
	  this._eventBus.on('node.moved', updateLinksFn);
	  this._eventBus.on('node.updated', updateLinksFn);
	};
	
	Links.prototype._calculateAngle = function (a, b) {
	  // angle between 2 vectors (lines)
	  var dotProduct = (a.x * b.x) + (a.y * b.y);
	  var vectorAModule = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
	  var vectorBModule = Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2));
	  return Math.acos(dotProduct / (vectorAModule * vectorBModule));
	};
	
	Links.prototype._sortSide = function (sides, sideIdx, s) {
	  // set reference vector and angle factor
	  var vector = {x: 1, y: 1},
	      factor = 1.0,
	      that = this;
	  if (sideIdx === 0) {
	    vector.x = -1.0;
	  } else if (sideIdx === 1) {
	    factor = -1.0;
	  } else if (sideIdx === 2) {
	    vector.y = -1.0;
	    factor = -1.0;
	  } else if (sideIdx === 3) {
	    vector.x = -1.0;
	    vector.y = -1.0;
	  }
	  return sortBy(sides[sideIdx], function (o) {
	    var vectorB = {
	      x: o.pos.x - s.x,
	      y: o.pos.y - s.y
	    };
	    return factor * that._calculateAngle(vector, vectorB);
	  });
	};
	
	Links.prototype._setQuadrants = function (sides, s, t, toSave, isTarget) {
	  var sideIdx = false;
	  if (t.x >= s.x && t.y >= s.y) {
	    if (Math.abs(t.x - s.x) >= Math.abs(t.y - s.y)) {
	      // left side
	      sideIdx = 3;
	      if (isTarget && Math.abs(t.y - s.y) > 80)
	        sideIdx = 0;
	    } else {
	      // upside
	      sideIdx = 0;
	      if (isTarget && Math.abs(t.x - s.x) > 80)
	        sideIdx = 3;
	    }
	  } else if (t.x < s.x && t.y >= s.y) {
	    if (Math.abs(t.x - s.x) >= Math.abs(t.y - s.y)) {
	      // right side
	      sideIdx = 1;
	      if (isTarget && Math.abs(t.y - s.y) > 80)
	        sideIdx = 0;
	    } else {
	      // upside
	      sideIdx = 0;
	      if (isTarget && Math.abs(t.x - s.x) > 80)
	        sideIdx = 1;
	    }
	  } else if (t.x >= s.x && t.y < s.y) {
	    if (Math.abs(t.x - s.x) >= Math.abs(t.y - s.y)) {
	      // right side
	      sideIdx = 3;
	      if (isTarget && Math.abs(t.y - s.y) > 80)
	        sideIdx = 2;
	    } else {
	      // downside
	      sideIdx = 2;
	      if (isTarget && Math.abs(t.x - s.x) > 80)
	        sideIdx = 3;
	    }
	  } else if (t.x < s.x && t.y < s.y) {
	    if (Math.abs(t.x - s.x) >= Math.abs(t.y - s.y)) {
	      // right side
	      sideIdx = 1;
	      if (isTarget && Math.abs(t.y - s.y) > 80)
	        sideIdx = 2;
	    } else {
	      // downside
	      sideIdx = 2;
	      if (isTarget && Math.abs(t.x - s.x) > 80)
	        sideIdx = 1;
	    }
	  }
	  
	  if (sideIdx === false) {
	    return;
	  }
	  sides[sideIdx].push({
	    obj: toSave,
	    pos: s
	  });
	  sides[sideIdx] = this._sortSide(sides, sideIdx, t);
	  
	};
	
	Links.prototype._setSideConnectors = function (definition, isTarget) {
	  var sides = [[], [], [], []],
	      that = this,
	      element = this._drawingRegistry.get(definition.id);
	  if (element) {
	    this._fillPredAndSuc(element, definition);
	    forEach(element.predecessorList, function (link) {
	      var sourceData = link.source;
	      that._setQuadrants(sides, sourceData.position, definition.position, sourceData.id, isTarget);
	    });
	    forEach(element.sucessorList, function (link) {
	      var targetData = link.target;
	      that._setQuadrants(sides, targetData.position, definition.position, targetData.id, false);
	    });
	    element.sides = sides;
	  }
	};
	
	Links.prototype.updateNodeLinks = function (element, definition) {
	  var that = this;
	  
	  // update the positions of the links related to the node.
	  this._fillPredAndSuc(element, definition);
	
	  forEach(element.predecessorList, function (link) {
	    that._updateLink(link);
	  });
	
	  forEach(element.sucessorList, function (link) {
	    that._updateLink(link);
	  });
	};
	
	Links.prototype._createWaypoint = function(x, y) {
	  return this._moddle.create('pfdn:Coordinates', {x: x, y: y});
	};
	
	Links.prototype._updateLink = function (link) {
	  // update the positions of the links related to the node.
	  this._setSideConnectors(link.source, false);
	  this._setSideConnectors(link.target, true);
	
	  var sourcePoint = {x: link.source.position.x, y: link.source.position.y},
	      targetPoint = {x: link.target.position.x, y: link.target.position.y},
	      sourceElem = this._drawingRegistry.get(link.source.id),
	      targetElem = this._drawingRegistry.get(link.target.id),
	      sourceSide = {idx: 0},
	      targetSide = {idx: 0},
	      waypoints = [],
	      curve1RefPoint = false,
	      curve2RefPoint = false,
	      midPoint = false;
	  
	  this._adjustSidePoint(sourcePoint, sourceElem.sides, link.target.id,  link.source.size, sourceSide);
	  this._adjustSidePoint(targetPoint, targetElem.sides, link.source.id,  link.target.size, targetSide);
	  
	  waypoints.push(this._createWaypoint(sourcePoint.x, sourcePoint.y));
	  if (sourceSide.idx === 1 || sourceSide.idx === 3){
	    // source point starts from left or right
	    if (targetSide.idx === 0 || targetSide.idx === 2){
	      // target point arrives to top or bottom, draw a curve line
	      curve1RefPoint = {
	        x: targetPoint.x,
	        y: sourcePoint.y
	      };
	    } else {
	      if (Math.abs(sourcePoint.y - targetPoint.y) > 20) {
	        // if distance allows to create a quadratic bezier curve, then draw it; else, show a straight line
	        midPoint = {
	          x: (targetPoint.x + sourcePoint.x) / 2,
	          y: (targetPoint.y + sourcePoint.y) / 2
	        };
	        curve1RefPoint = {
	          x: midPoint.x,
	          y: sourcePoint.y
	        };
	        curve2RefPoint = {
	          x: midPoint.x,
	          y: targetPoint.y
	        };
	      }
	    }
	  } else {
	    // source point starts from top or bottom
	    if (targetSide.idx === 1 || targetSide.idx === 3){
	      // target point arrives to left or right, draw a curve line
	      curve1RefPoint = {
	        x: sourcePoint.x,
	        y: targetPoint.y
	      };
	    } else {
	      if (Math.abs(sourcePoint.x - targetPoint.x) > 20) {
	        // if distance allows to create a quadratic bezier curve, then draw it; else, show a straight line
	        midPoint = {
	          x: (targetPoint.x + sourcePoint.x) / 2,
	          y: (targetPoint.y + sourcePoint.y) / 2
	        };
	        curve1RefPoint = {
	          x: sourcePoint.x,
	          y: midPoint.y
	        };
	        curve2RefPoint = {
	          x: targetPoint.x,
	          y: midPoint.y
	        };
	      }
	    }
	  }
	  
	  if (curve1RefPoint !== false){
	    waypoints.push(this._createWaypoint(curve1RefPoint.x, curve1RefPoint.y));
	  }
	  if (curve2RefPoint !== false){
	    waypoints.push(this._createWaypoint(curve2RefPoint.x, curve2RefPoint.y));
	  }
	  waypoints.push(this._createWaypoint(targetPoint.x, targetPoint.y));
	
	
	  link.waypoint = waypoints;
	  this._links._builder(link);
	};
	
	Links.prototype._adjustSidePoint = function(point, sides, referencePoint, elemSize, saveIndex){
	  var found = false;
	  elemSize = elemSize * 1.0;
	  forEach(sides, function(side, sideIdx){
	    var sideLen = side.length;
	    if (found || sideLen===0){return;}
	    var distBtwArrows = elemSize * 0.8 / (sideLen + 1);
	    var origin = (elemSize / 2.0) - (distBtwArrows * (sideLen + 1) / 2);
	    forEach(side, function(v) {
	      origin += distBtwArrows;
	      if (v.obj === referencePoint){
	        saveIndex.idx = sideIdx;
	        if (sideIdx === 0) {
	          point.x += origin;
	          point.y -= 5;
	          //point.y -= elemSize / 2.0;
	        } else if (sideIdx === 1) {
	          point.x += elemSize + 5;
	          point.y += origin;
	        } else if (sideIdx === 2) {
	          point.x += origin;
	          point.y += elemSize + 5;
	        } else if (sideIdx === 3) {
	          //point.x += elemSize / 2.0;
	          point.x -= 5;
	          point.y += origin;
	        }
	        found = true;
	      }
	    });
	  });
	};
	
	Links.prototype._fillPredAndSuc = function (element, definition) {
	  element.predecessorList = [];
	  element.sucessorList = [];
	  
	  forEach(this._links.getAll(), function (link) {
	    if (link.target === definition) {
	      element.predecessorList.push(link);
	    }
	    if (link.source === definition) {
	      element.sucessorList.push(link);
	    }
	  });
	};
	


/***/ }),
/* 1692 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['modellingNodes'],
	  modellingNodes: ['type', __webpack_require__(1693)],
	  __depends__: [
	  ]
	};

/***/ }),
/* 1693 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(2),
	    base = __webpack_require__(1687),
	    isUndefined = __webpack_require__(945).isUndefined;
	
	function Nodes(definitions, moddle, drawingRegistry, notifications, nodes, modellingLabels) {
	  base.call(this, definitions, nodes, drawingRegistry, notifications);
	  this._moddle = moddle;
	  this._nodes = nodes;
	  this._modellingLabels = modellingLabels;
	}
	
	Nodes.$inject = [
	  'd3polytree.definitions',
	  'd3polytree.moddle',
	  'drawingRegistry',
	  'notifications',
	  'nodes',
	  'modellingLabels'
	];
	
	module.exports = Nodes;
	
	inherits(Nodes, base);
	
	Nodes.prototype.create = function (parameters) {
	  parameters.type = isUndefined(parameters.type) ? 'default' : parameters.type;
	  parameters.position = isUndefined(parameters.position) ? {x: 0, y: 0} : parameters.position;
	  var newNodePosDef = this._moddle.create('pfdn:Coordinates', parameters.position),
	      newNodeDef = this._moddle.create('pfdn:Node', {type: parameters.type, position: newNodePosDef});
	  this._nodes._builder(newNodeDef);
	  // create the associated
	  var nodeLabel = this._modellingLabels.create({
	    position: {
	      x: newNodeDef.position.x + (newNodeDef.size / 2.0),
	      y: newNodeDef.position.y + newNodeDef.size + 15
	    }
	  });
	  nodeLabel.set('text', newNodeDef.id);
	  nodeLabel.isReadOnly = true;
	  newNodeDef.label = nodeLabel;
	  //console.log(newLinkDef);
	  this._modellingLabels._labels._builder(nodeLabel) ;
	  // return the element
	  return newNodeDef;
	};

/***/ }),
/* 1694 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['modellingZones'],
	  modellingZones: ['type', __webpack_require__(1695)],
	  __depends__: [
	  ]
	};

/***/ }),
/* 1695 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var inherits = __webpack_require__(2),
	    base = __webpack_require__(1687)//,
	;//isUndefined = require('lodash/lang').isUndefined;
	
	function Zones(definitions, moddle, drawingRegistry, notifications, zones) {
	  base.call(this, definitions, zones, drawingRegistry, notifications);
	  this._moddle = moddle;
	  this._zones = zones;
	}
	
	Zones.$inject = [
	  'd3polytree.definitions',
	  'd3polytree.moddle',
	  'drawingRegistry',
	  'notifications',
	  'zones'
	];
	
	module.exports = Zones;
	
	inherits(Zones, base);
	
	Zones.prototype.create = function () {
	  console.error('TODO: Do it!');
	};

/***/ }),
/* 1696 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['sideTabs', 'sideTabsProvider'],
	  sideTabs: ['type', __webpack_require__(1697)],
	  sideTabsProvider: ['type', __webpack_require__(2011)],
	  __depends__: [
	    //''
	  ]
	};


/***/ }),
/* 1697 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var forEach = __webpack_require__(1698).forEach,
	  isFunction = __webpack_require__(1911).isFunction,
	  isUndefined = __webpack_require__(1911).isUndefined,
	  toSafeInteger = __webpack_require__(1911).toSafeInteger,
	  domify = __webpack_require__(1993),
	  domQuery = __webpack_require__(1995),
	  domAttr = __webpack_require__(1997),
	  domClear = __webpack_require__(1998),
	  domClasses = __webpack_require__(1999),
	  domDelegate = __webpack_require__(2002)
	  ;
	
	__webpack_require__(2007);
	
	function SideTabs(canvas, sideTabsProvider, eventBus) {
	  this._canvas = canvas;
	  this._sideTabsProvider = sideTabsProvider;
	  this._eventBus = eventBus;
	  this._init();
	}
	
	SideTabs.$inject = [
	  'canvas',
	  'sideTabsProvider',
	  'eventBus'
	];
	
	
	SideTabs.prototype._init = function () {
	  var that = this;
	  this._drawContainer();
	  this._update();
	  this._eventBus.on('sidetab.registered', function () {
	    that._update();
	  });
	  this._createDelegates();
	};
	
	SideTabs.prototype._createDelegates = function () {
	  // create delegates
	  var that = this;
	
	  domDelegate.bind(this._sidetabsEntries, '.pfdjs-st-tab', 'click', function (event) {
	    that.trigger('click', event);
	    event.stopImmediatePropagation();
	  });
	
	  domDelegate.bind(this._sidetabsContents, '.icon-cancel', 'click', function (event) {
	    that.trigger('close', event);
	    event.stopImmediatePropagation();
	  });
	
	};
	
	SideTabs.prototype._readjustTabs = function(id) {
	  var that = this;
	  if (isUndefined(id)){
	    id = null;
	    domClasses(this._sidetabsContainer).remove('open');
	  } else {
	    id = toSafeInteger(id);
	    domClasses(this._sidetabsContainer).add('open');
	  }
	  forEach(this._actions, function (action, n) {
	    var tab = domQuery('[data-action="' + n + '"]', that._sidetabsEntries);
	    var content = domQuery('.pfdjs-st-content[data-action="' + n + '"]', that._sidetabsContents);
	    if (n === id) {
	      domClasses(tab).add('active');
	      domClasses(content).remove('hidden');
	    } else {
	      domClasses(tab).remove('active');
	      domClasses(content).add('hidden');
	    }
	  });
	};
	
	SideTabs.prototype.trigger = function (action, event, targetId) {
	  var entries = this._actions,
	    entry,
	    handler,
	    content,
	    button = event ? (event.delegateTarget || event.target) : false;
	
	  if (!button && action !== 'created') {
	    return event.preventDefault();
	  }
	
	  var id = button ? domAttr(button, 'data-action') : targetId;
	
	  entry = entries[id];
	
	  if (!entry) {
	    return;
	  }
	
	  if (action === 'click'){
	    this._readjustTabs(id);
	  } else if (action === 'close'){
	    this._readjustTabs();
	  }
	
	  handler = entry.action;
	
	  content = domQuery('.pfdjs-st-content[data-action="' + id + '"] > .content-body', this._sidetabsContents);
	
	  // simple action (via callback function)
	  if (isFunction(handler)) {
	    if (action === 'click') {
	      handler(content);
	    }
	  } else {
	    if (handler[action]) {
	      handler[action](content);
	    }
	  }
	
	};
	
	SideTabs.prototype._drawContainer = function () {
	  var container = this._canvas.getContainer();
	
	  this._sidetabsContainer = domify(SideTabs.HTML_MARKUP);
	
	  container.insertBefore(this._sidetabsContainer, container.childNodes[0]);
	
	  this._sidetabsEntries = domQuery('.pfdjs-st-tabs', this._sidetabsContainer);
	  this._sidetabsContents = domQuery('.pfdjs-st-contents', this._sidetabsContainer);
	};
	
	SideTabs.prototype._drawEntry = function (entry, id) {
	
	  // draw tab
	
	  var control = domify('<div class="pfdjs-st-tab"></div>');
	  this._sidetabsEntries.appendChild(control);
	
	  domAttr(control, 'data-action', id);
	
	  if (entry.title) {
	    domAttr(control, 'title', entry.title);
	  }
	
	  if (entry.iconClassName) {
	    control.appendChild(domify('<span class="' + entry.iconClassName + '"/>'));
	  }
	
	  // draw container
	  control = domify('<div class="pfdjs-st-content hidden">' +
	    '  <div class="content-title">' +
	    '    <span class="content-title-span">' + entry.title + '</span>' +
	    '    <span class="icon-cancel" title="Close"></span>' +
	    '    <span>&nbsp;</span>' +
	    '  </div>' +
	    '  <div class="content-body" ></div>' +
	    '</div>');
	  this._sidetabsContents.appendChild(control);
	
	  domAttr(control, 'data-action', id);
	
	  // close button
	  control = domQuery('.icon-cancel', control);
	  domAttr(control, 'data-action', id);
	
	  this.trigger('created', null, id);
	
	};
	
	SideTabs.prototype._drawEntries = function () {
	  var that = this,
	    actions = this._actions = this._sideTabsProvider.getSideTabsEntries();
	  forEach(actions, function (action, n) {
	    that._drawEntry.call(that, action, n);
	  });
	};
	
	SideTabs.prototype._update = function () {
	  if (this._sidetabsEntries) {
	    domClear(this._sidetabsEntries);
	    domClear(this._sidetabsContents);
	  }
	  this._drawEntries();
	};
	
	/* markup definition */
	
	SideTabs.HTML_MARKUP =
	  '<div class="pfdjs-st-container">' +
	  '  <div class="pfdjs-st-tabs">' +
	  '  </div>' +
	  '  <div class="pfdjs-st-contents">' +
	  '  </div>' +
	  '</div>';
	
	module.exports = SideTabs;

/***/ }),
/* 1698 */
[3128, 1699, 1824, 1828, 1834, 1838, 1840, 1847, 1849, 1854, 1855, 1825, 1829, 1856, 1857, 1864, 1876, 1852, 1877, 1882, 1883, 1886, 1888, 1890, 1894, 1900, 1903, 1908, 1910],
/* 1699 */
[3129, 1700, 1716],
/* 1700 */
[2899, 1701],
/* 1701 */
[2900, 1702],
/* 1702 */
[2901, 1703, 1715],
/* 1703 */
[2902, 1704, 1712, 1711, 1714],
/* 1704 */
[2903, 1705, 1711],
/* 1705 */
[2904, 1706, 1709, 1710],
/* 1706 */
[2905, 1707],
/* 1707 */
[2906, 1708],
/* 1708 */
17,
/* 1709 */
[2907, 1706],
/* 1710 */
19,
/* 1711 */
20,
/* 1712 */
[2908, 1713],
/* 1713 */
[2909, 1707],
/* 1714 */
23,
/* 1715 */
24,
/* 1716 */
[3130, 1717, 1718, 1744, 1729],
/* 1717 */
581,
/* 1718 */
[3131, 1719],
/* 1719 */
[3132, 1720, 1743],
/* 1720 */
[3008, 1721, 1723],
/* 1721 */
[2982, 1722],
/* 1722 */
122,
/* 1723 */
[2918, 1724, 1738, 1742],
/* 1724 */
[2919, 1725, 1726, 1729, 1730, 1732, 1733],
/* 1725 */
43,
/* 1726 */
[2920, 1727, 1728],
/* 1727 */
[2921, 1705, 1728],
/* 1728 */
46,
/* 1729 */
47,
/* 1730 */
[2922, 1707, 1731],
/* 1731 */
50,
/* 1732 */
39,
/* 1733 */
[2923, 1734, 1736, 1737],
/* 1734 */
[2924, 1705, 1735, 1728],
/* 1735 */
38,
/* 1736 */
53,
/* 1737 */
[2925, 1708],
/* 1738 */
[2926, 1739, 1740],
/* 1739 */
40,
/* 1740 */
[2927, 1741],
/* 1741 */
57,
/* 1742 */
[2917, 1704, 1735],
/* 1743 */
[3133, 1742],
/* 1744 */
[3009, 1745, 1804, 1820, 1729, 1821],
/* 1745 */
[3010, 1746, 1801, 1803],
/* 1746 */
[3011, 1747, 1777],
/* 1747 */
[2978, 1748, 1756, 1757, 1758, 1759, 1760],
/* 1748 */
[2951, 1749, 1750, 1753, 1754, 1755],
/* 1749 */
84,
/* 1750 */
[2952, 1751],
/* 1751 */
[2953, 1752],
/* 1752 */
25,
/* 1753 */
[2954, 1751],
/* 1754 */
[2955, 1751],
/* 1755 */
[2956, 1751],
/* 1756 */
[2979, 1748],
/* 1757 */
116,
/* 1758 */
117,
/* 1759 */
118,
/* 1760 */
[2980, 1748, 1761, 1762],
/* 1761 */
[2957, 1702, 1707],
/* 1762 */
[2943, 1763, 1771, 1774, 1775, 1776],
/* 1763 */
[2944, 1764, 1748, 1761],
/* 1764 */
[2945, 1765, 1767, 1768, 1769, 1770],
/* 1765 */
[2946, 1766],
/* 1766 */
[2947, 1702],
/* 1767 */
79,
/* 1768 */
[2948, 1766],
/* 1769 */
[2949, 1766],
/* 1770 */
[2950, 1766],
/* 1771 */
[2958, 1772],
/* 1772 */
[2959, 1773],
/* 1773 */
93,
/* 1774 */
[2960, 1772],
/* 1775 */
[2961, 1772],
/* 1776 */
[2962, 1772],
/* 1777 */
[3012, 1778, 1728],
/* 1778 */
[3013, 1747, 1779, 1785, 1789, 1796, 1729, 1730, 1733],
/* 1779 */
[3014, 1780, 1783, 1784],
/* 1780 */
[3015, 1762, 1781, 1782],
/* 1781 */
160,
/* 1782 */
161,
/* 1783 */
162,
/* 1784 */
163,
/* 1785 */
[3016, 1706, 1786, 1752, 1779, 1787, 1788],
/* 1786 */
[2987, 1707],
/* 1787 */
144,
/* 1788 */
165,
/* 1789 */
[3017, 1790],
/* 1790 */
[3018, 1791, 1793, 1723],
/* 1791 */
[3019, 1792, 1729],
/* 1792 */
104,
/* 1793 */
[3020, 1794, 1795],
/* 1794 */
170,
/* 1795 */
171,
/* 1796 */
[2998, 1797, 1761, 1798, 1799, 1800, 1705, 1714],
/* 1797 */
[2999, 1702, 1707],
/* 1798 */
[3000, 1702, 1707],
/* 1799 */
[3001, 1702, 1707],
/* 1800 */
[3002, 1702, 1707],
/* 1801 */
[3021, 1802, 1723],
/* 1802 */
[3022, 1711],
/* 1803 */
174,
/* 1804 */
[3023, 1777, 1805, 1817, 1808, 1802, 1803, 1816],
/* 1805 */
[2935, 1806],
/* 1806 */
[2936, 1807, 1816],
/* 1807 */
[2937, 1729, 1808, 1810, 1813],
/* 1808 */
[2938, 1729, 1809],
/* 1809 */
[2939, 1705, 1728],
/* 1810 */
[2940, 1811],
/* 1811 */
[2941, 1812],
/* 1812 */
[2942, 1762],
/* 1813 */
[2963, 1814],
/* 1814 */
[2964, 1706, 1815, 1729, 1809],
/* 1815 */
99,
/* 1816 */
[2965, 1809],
/* 1817 */
[3024, 1818, 1819],
/* 1818 */
177,
/* 1819 */
[3025, 1807, 1726, 1729, 1732, 1735, 1816],
/* 1820 */
29,
/* 1821 */
[3026, 1822, 1823, 1808, 1816],
/* 1822 */
180,
/* 1823 */
[3027, 1806],
/* 1824 */
[3134, 1825],
/* 1825 */
[3135, 1826, 1719, 1827, 1729],
/* 1826 */
209,
/* 1827 */
[3032, 1820],
/* 1828 */
[3136, 1829],
/* 1829 */
[3137, 1830, 1831, 1827, 1729],
/* 1830 */
694,
/* 1831 */
[3138, 1832, 1743],
/* 1832 */
[3029, 1833, 1723],
/* 1833 */
[3030, 1722],
/* 1834 */
[3139, 1835, 1836, 1744, 1729, 1837],
/* 1835 */
699,
/* 1836 */
[3140, 1719],
/* 1837 */
[2916, 1752, 1742, 1732, 1711],
/* 1838 */
[3141, 1794, 1839, 1744, 1729],
/* 1839 */
[3142, 1719],
/* 1840 */
[3143, 1841, 1842],
/* 1841 */
[3144, 1744, 1742, 1723],
/* 1842 */
[3145, 1843, 1744, 1844],
/* 1843 */
707,
/* 1844 */
[3104, 1845],
/* 1845 */
[3105, 1846],
/* 1846 */
[3090, 1711, 1809],
/* 1847 */
[3146, 1841, 1848],
/* 1848 */
[3147, 1843, 1744, 1844],
/* 1849 */
[3148, 1850, 1852],
/* 1850 */
[2968, 1792, 1851],
/* 1851 */
[2969, 1706, 1726, 1729],
/* 1852 */
[3149, 1815, 1744, 1853, 1729],
/* 1853 */
[3150, 1719, 1742],
/* 1854 */
[3151, 1850, 1852],
/* 1855 */
[3152, 1850, 1852, 1844],
/* 1856 */
[3153, 1700, 1716],
/* 1857 */
[3154, 1858, 1742, 1861, 1844, 1862],
/* 1858 */
[3155, 1843, 1859, 1860],
/* 1859 */
723,
/* 1860 */
724,
/* 1861 */
[3119, 1705, 1729, 1728],
/* 1862 */
[3078, 1863, 1723],
/* 1863 */
[3079, 1815],
/* 1864 */
[3156, 1865, 1719, 1866, 1870, 1742],
/* 1865 */
31,
/* 1866 */
[3045, 1865, 1807, 1867, 1868, 1816],
/* 1867 */
201,
/* 1868 */
[3046, 1806, 1869],
/* 1869 */
203,
/* 1870 */
[2912, 1820, 1871, 1872],
/* 1871 */
[2913, 1865],
/* 1872 */
[2914, 1873, 1875],
/* 1873 */
[2915, 1874, 1701, 1820],
/* 1874 */
34,
/* 1875 */
35,
/* 1876 */
[3157, 1700, 1716],
/* 1877 */
[3158, 1878, 1729],
/* 1878 */
[3159, 1815, 1744, 1853, 1879, 1736, 1880, 1820],
/* 1879 */
743,
/* 1880 */
[3160, 1881],
/* 1881 */
[3161, 1809],
/* 1882 */
[3162, 1716],
/* 1883 */
[3163, 1884, 1719, 1744, 1885, 1729],
/* 1884 */
220,
/* 1885 */
749,
/* 1886 */
[3164, 1887, 1831, 1744, 1885, 1729],
/* 1887 */
751,
/* 1888 */
[3165, 1794, 1839, 1744, 1729, 1889],
/* 1889 */
228,
/* 1890 */
[3166, 1891, 1893, 1729],
/* 1891 */
[3167, 1892],
/* 1892 */
756,
/* 1893 */
[3168, 1891, 1862],
/* 1894 */
[3169, 1895, 1899, 1729, 1837, 1844],
/* 1895 */
[3170, 1896, 1897, 1898],
/* 1896 */
443,
/* 1897 */
128,
/* 1898 */
[3171, 1892],
/* 1899 */
[3172, 1896, 1898, 1862],
/* 1900 */
[3173, 1901, 1902, 1729],
/* 1901 */
[3174, 1897, 1898],
/* 1902 */
[3175, 1898, 1862],
/* 1903 */
[3176, 1738, 1796, 1742, 1861, 1904],
/* 1904 */
[3177, 1905, 1906, 1907],
/* 1905 */
[3178, 1822],
/* 1906 */
437,
/* 1907 */
771,
/* 1908 */
[3179, 1783, 1744, 1909, 1729, 1837],
/* 1909 */
[3180, 1719],
/* 1910 */
[3181, 1850, 1878, 1870, 1837],
/* 1911 */
[3081, 1912, 1913, 1941, 1942, 1943, 1944, 1752, 1946, 1949, 1726, 1729, 1950, 1742, 1952, 1953, 1730, 1954, 1956, 1958, 1959, 1960, 1961, 1962, 1704, 1963, 1735, 1964, 1966, 1967, 1968, 1970, 1972, 1973, 1969, 1711, 1728, 1957, 1974, 1976, 1977, 1861, 1809, 1733, 1979, 1980, 1981, 1982, 1984, 1985, 1845, 1844, 1990, 1846, 1991, 1992, 1813],
/* 1912 */
[3082, 1729],
/* 1913 */
[3083, 1914],
/* 1914 */
[3051, 1747, 1826, 1915, 1916, 1918, 1922, 1897, 1923, 1924, 1790, 1927, 1796, 1928, 1929, 1939, 1729, 1730, 1711, 1723],
/* 1915 */
[2898, 1700, 1752],
/* 1916 */
[2971, 1917, 1723],
/* 1917 */
[2910, 1915, 1700],
/* 1918 */
[3052, 1917, 1919],
/* 1919 */
[2929, 1724, 1920, 1742],
/* 1920 */
[2930, 1711, 1739, 1921],
/* 1921 */
61,
/* 1922 */
[2984, 1707],
/* 1923 */
[3053, 1917, 1793],
/* 1924 */
[3054, 1917, 1925],
/* 1925 */
[3055, 1792, 1926, 1793, 1795],
/* 1926 */
[2989, 1741],
/* 1927 */
[3056, 1791, 1925, 1919],
/* 1928 */
215,
/* 1929 */
[3057, 1930, 1931, 1932, 1934, 1935, 1937, 1938],
/* 1930 */
[2986, 1786],
/* 1931 */
[3058, 1930],
/* 1932 */
[3059, 1933, 1884, 1787],
/* 1933 */
219,
/* 1934 */
221,
/* 1935 */
[3060, 1936, 1884, 1788],
/* 1936 */
223,
/* 1937 */
[3061, 1706],
/* 1938 */
[2985, 1930],
/* 1939 */
[2988, 1940, 1926, 1739],
/* 1940 */
[2972, 1711],
/* 1941 */
[3084, 1914],
/* 1942 */
[3085, 1914],
/* 1943 */
[3086, 1914],
/* 1944 */
[3087, 1945, 1723],
/* 1945 */
375,
/* 1946 */
[3088, 1947, 1948],
/* 1947 */
377,
/* 1948 */
[3089, 1846],
/* 1949 */
[3091, 1948],
/* 1950 */
[3092, 1951, 1736, 1737],
/* 1951 */
[3093, 1705, 1728],
/* 1952 */
[2990, 1742, 1728],
/* 1953 */
[3094, 1705, 1728],
/* 1954 */
[3095, 1955, 1736, 1737],
/* 1955 */
[3096, 1705, 1728],
/* 1956 */
[3097, 1728, 1957],
/* 1957 */
[2991, 1705, 1926, 1728],
/* 1958 */
[3098, 1738, 1796, 1726, 1729, 1742, 1730, 1739, 1733],
/* 1959 */
[3099, 1777],
/* 1960 */
[3100, 1777],
/* 1961 */
[3101, 1705, 1728, 1957],
/* 1962 */
[3102, 1707],
/* 1963 */
[3103, 1844],
/* 1964 */
[3106, 1965, 1736, 1737],
/* 1965 */
[3107, 1796, 1728],
/* 1966 */
[3108, 1746, 1801],
/* 1967 */
[3109, 1746, 1801],
/* 1968 */
[3110, 1969],
/* 1969 */
[3111, 1705, 1728],
/* 1970 */
[3112, 1703, 1971],
/* 1971 */
[3113, 1713, 1704, 1731],
/* 1972 */
419,
/* 1973 */
420,
/* 1974 */
[3114, 1975, 1736, 1737],
/* 1975 */
[3115, 1705, 1728],
/* 1976 */
[3116, 1963],
/* 1977 */
[3117, 1978, 1736, 1737],
/* 1978 */
[3118, 1796, 1728],
/* 1979 */
427,
/* 1980 */
[3120, 1796, 1728],
/* 1981 */
[3121, 1705, 1728],
/* 1982 */
[3122, 1983, 1948],
/* 1983 */
431,
/* 1984 */
[3123, 1948],
/* 1985 */
[3124, 1706, 1897, 1796, 1742, 1861, 1986, 1787, 1788, 1987, 1862],
/* 1986 */
434,
/* 1987 */
[3125, 1988, 1906, 1989],
/* 1988 */
436,
/* 1989 */
438,
/* 1990 */
[3126, 1896, 1844],
/* 1991 */
[2992, 1917, 1919],
/* 1992 */
[3127, 1896, 1844],
/* 1993 */
[3236, 1994],
/* 1994 */
1637,
/* 1995 */
[2895, 1996],
/* 1996 */
5,
/* 1997 */
1626,
/* 1998 */
1630,
/* 1999 */
[3230, 2000],
/* 2000 */
[3231, 2001, 2001],
/* 2001 */
1629,
/* 2002 */
[3234, 2003],
/* 2003 */
[3235, 2004, 2004, 2006, 2006],
/* 2004 */
[3232, 2005],
/* 2005 */
[3233, 1996, 1996],
/* 2006 */
1004,
/* 2007 */
[2893, 2008, 2010],
/* 2008 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2009)();
	// imports
	
	
	// module
	exports.push([module.id, ".pfdjs-container .pfdjs-palette {\n  margin: 6px 64px 6px 6px; }\n\n.pfdjs-container .pfdjs-st-container {\n  width: 0;\n  z-index: 2;\n  position: absolute;\n  right: -3px;\n  top: 0;\n  bottom: 0;\n  background: #fafafa;\n  border: solid 1px #cccccc;\n  border-left: solid 2px #cccccc; }\n  .pfdjs-container .pfdjs-st-container .pfdjs-st-tabs {\n    position: absolute;\n    width: 36px;\n    top: 6px;\n    bottom: 6px;\n    left: -37px; }\n    .pfdjs-container .pfdjs-st-container .pfdjs-st-tabs .pfdjs-st-tab {\n      overflow: hidden;\n      height: 40px;\n      margin-bottom: 5px;\n      background: #fafafa;\n      border: solid 1px #cccccc;\n      border-radius: 3px;\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3); }\n      .pfdjs-container .pfdjs-st-container .pfdjs-st-tabs .pfdjs-st-tab span {\n        font-size: 26px;\n        top: 4.25px;\n        position: relative;\n        cursor: pointer; }\n      .pfdjs-container .pfdjs-st-container .pfdjs-st-tabs .pfdjs-st-tab.active span {\n        color: #ff4800; }\n  .pfdjs-container .pfdjs-st-container .pfdjs-st-contents .pfdjs-st-content.hidden {\n    display: none !important; }\n  .pfdjs-container .pfdjs-st-container .pfdjs-st-contents .pfdjs-st-content .content-body {\n    position: absolute;\n    left: 0;\n    top: 20px;\n    right: 0;\n    bottom: 0;\n    overflow-y: auto; }\n  .pfdjs-container .pfdjs-st-container .pfdjs-st-contents .pfdjs-st-content .content-title {\n    background-color: #5990bd;\n    color: white;\n    font-size: 12px;\n    line-height: 18px;\n    border: solid 1px #ccc;\n    position: absolute;\n    left: 0;\n    right: 0; }\n    .pfdjs-container .pfdjs-st-container .pfdjs-st-contents .pfdjs-st-content .content-title .content-title-span {\n      vertical-align: top;\n      float: left;\n      margin-left: 6px; }\n    .pfdjs-container .pfdjs-st-container .pfdjs-st-contents .pfdjs-st-content .content-title .icon-cancel {\n      font-size: 18px;\n      cursor: pointer;\n      float: right; }\n  .pfdjs-container .pfdjs-st-container.open {\n    right: 0; }\n    .pfdjs-container .pfdjs-st-container.open .pfdjs-st-tabs .pfdjs-st-tab.active {\n      left: 1px;\n      position: relative;\n      box-shadow: none;\n      border-width: 2px;\n      border-right: 0; }\n    @media (max-width: 800px) {\n      .pfdjs-container .pfdjs-st-container.open {\n        min-width: 400px;\n        width: 50%; } }\n    @media (max-width: 400px) {\n      .pfdjs-container .pfdjs-st-container.open {\n        min-width: 100%;\n        width: 100%; } }\n    @media (min-width: 801px) {\n      .pfdjs-container .pfdjs-st-container.open {\n        min-width: 400px;\n        width: 35%; } }\n", ""]);
	
	// exports


/***/ }),
/* 2009 */
1485,
/* 2010 */
1486,
/* 2011 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isUndefined = __webpack_require__(1911).isUndefined;
	
	function SideTabsProvider(eventBus){
	  this._registeredSideTabs = [];
	  this._eventBus = eventBus;
	  this._init();
	}
	
	SideTabsProvider.$inject = [
	  'eventBus'
	];
	
	SideTabsProvider.prototype._init = function(){
	  this._setDefaultTabs();
	};
	
	SideTabsProvider.prototype._setDefaultTabs = function(){
	  this._registeredSideTabs = [];
	};
	
	SideTabsProvider.prototype.registerSideTab = function(sideTab, index){
	  if (isUndefined(index)){
	    this._registeredSideTabs.push(sideTab);
	  } else {
	    this._registeredSideTabs.splice(index, 0, sideTab);
	  }
	  this._eventBus.emit('sidetab.registered', sideTab);
	};
	
	SideTabsProvider.prototype.getSideTabsEntries = function(){
	  return this._registeredSideTabs;
	};
	
	module.exports = SideTabsProvider;

/***/ }),
/* 2012 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['searchPanel'],
	  searchPanel: ['type', __webpack_require__(2013)],
	  __depends__: [
	  ]
	};


/***/ }),
/* 2013 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var domClear = __webpack_require__(2014),
	  domify = __webpack_require__(2015),
	  domDelegate = __webpack_require__(2017),
	  domAttr = __webpack_require__(2023),
	  List = __webpack_require__(2024)
	  ;
	
	__webpack_require__(2044);
	
	function SearchPanel(sideTabsProvider, eventBus){
	  this._sideTabsProvider = sideTabsProvider;
	  this._eventBus = eventBus;
	  //this._elementsList = [];
	  this._form = null;
	  this._list = null;
	  this._init();
	}
	
	SearchPanel.$inject = [
	  'sideTabsProvider',
	  'eventBus'
	];
	
	SearchPanel.prototype.addOrUpdateItem = function(values){
	  if (this._list) {
	    if (values && values.name !== '') {
	      var item = this._list.get('id', values.id)[0];
	      if (item) {
	        // update
	        item.values(values);
	      } else {
	        // add
	        this._list.add(values);
	      }
	
	    }
	  }
	};
	
	SearchPanel.prototype._init = function(){
	  var that = this;
	  this._registerSideTab();
	  this._eventBus.on('node.created', function(element, definition){
	    that.addOrUpdateItem({
	      'id': definition.id,
	      'name': definition.label ? definition.label.text: '',
	      'elementType': 'Node',
	      'elementSubType': definition.type,
	      '__element': element,
	      '__definition': definition
	    });
	  });
	  this._eventBus.on('link.created', function(element, definition){
	    that.addOrUpdateItem({
	      'id': definition.id,
	      'name': definition.label ? definition.label.text: '',
	      'elementType': 'Connection',
	      'elementSubType': '',
	      '__element': element,
	      '__definition': definition
	    });
	  });
	  this._eventBus.on('node.deleted', function(element, definition){
	    if (that._list) {
	      that._list.remove('id', definition.id);
	    }
	  });
	  this._eventBus.on('link.deleted', function(element, definition){
	    if (that._list) {
	      that._list.remove('id', definition.id);
	    }
	  });
	};
	
	SearchPanel.prototype._drawForm = function(content){
	  var that = this;
	  domClear(content);
	  this._form = domify(SearchPanel.HTML_MARKUP);
	  content.appendChild(this._form);
	  var options = {
	    indexAsync: true,
	    valueNames: [
	      'name',
	      'elementType',
	      'elementSubType',
	      '__element',
	      '__definition',
	      { data: ['id'] },
	    ],
	    item: '<li data-id="true">' +
	      '<h3 class="name"></h3>' +
	      '<p><span class="elementType"></span>' +
	      '&nbsp;&nbsp;<span class="elementSubType"></span></p>' +
	      '</li>'
	  };
	  this._list = new List(this._form, options);
	  this._list.alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnÑñOoPpQqRrSsTtUuVvXxYyZz0123456789';
	  domDelegate.bind(this._form, 'li', 'click', function (event) {
	    var itemId = domAttr(event.delegateTarget, 'data-id');
	    var item = that._list.get('id', itemId)[0];
	    if (item) {
	      var itemValues = item.values();
	      that._eventBus.emit('zoom.to.element', itemValues.__element, itemValues.__definition);
	      var clickEventName = itemValues.__definition.$descriptor.ns.localName.toLowerCase()+'.mousedown';
	      that._eventBus.emit(clickEventName, itemValues.__element, itemValues.__definition, null);
	    }
	    event.stopImmediatePropagation();
	  });
	};
	
	SearchPanel.prototype._registerSideTab = function(){
	  var that = this;
	  this._sideTabsProvider.
	    registerSideTab({
	      title: 'Search element',
	      iconClassName: 'icon-glass',
	      action: {
	        created: function (content) {
	          that._drawForm(content);
	        },
	        click: function () {
	          if (that._list) {
	            that._list.sort('name', {order: 'asc'});
	          }
	        },
	        // close: function () {
	        //   console.log('search panel close');
	        // }
	      },
	    }, 0);
	};
	
	/* markup definition */
	
	SearchPanel.HTML_MARKUP =
	  '<div id="pfdjs-searchpanel">' +
	  '  <input class="search" placeholder="Search" />' +
	  '  <ul class="list"></ul>' +
	  '</div>';
	
	module.exports = SearchPanel;

/***/ }),
/* 2014 */
1630,
/* 2015 */
[3236, 2016],
/* 2016 */
1637,
/* 2017 */
[3234, 2018],
/* 2018 */
[3235, 2019, 2019, 2022, 2022],
/* 2019 */
[3232, 2020],
/* 2020 */
[3233, 2021, 2021],
/* 2021 */
5,
/* 2022 */
1004,
/* 2023 */
1626,
/* 2024 */
/***/ (function(module, exports, __webpack_require__) {

	var naturalSort = __webpack_require__(2025),
	  getByClass = __webpack_require__(2026),
	  extend = __webpack_require__(2027),
	  indexOf = __webpack_require__(2028),
	  events = __webpack_require__(2029),
	  toString = __webpack_require__(2031),
	  classes = __webpack_require__(2032),
	  getAttribute = __webpack_require__(2033),
	  toArray = __webpack_require__(2030);
	
	module.exports = function(id, options, values) {
	
	  var self = this,
	    init,
	    Item = __webpack_require__(2034)(self),
	    addAsync = __webpack_require__(2035)(self),
	    initPagination = __webpack_require__(2036)(self);
	
	  init = {
	    start: function() {
	      self.listClass      = "list";
	      self.searchClass    = "search";
	      self.sortClass      = "sort";
	      self.page           = 10000;
	      self.i              = 1;
	      self.items          = [];
	      self.visibleItems   = [];
	      self.matchingItems  = [];
	      self.searched       = false;
	      self.filtered       = false;
	      self.searchColumns  = undefined;
	      self.handlers       = { 'updated': [] };
	      self.valueNames     = [];
	      self.utils          = {
	        getByClass: getByClass,
	        extend: extend,
	        indexOf: indexOf,
	        events: events,
	        toString: toString,
	        naturalSort: naturalSort,
	        classes: classes,
	        getAttribute: getAttribute,
	        toArray: toArray
	      };
	
	      self.utils.extend(self, options);
	
	      self.listContainer = (typeof(id) === 'string') ? document.getElementById(id) : id;
	      if (!self.listContainer) { return; }
	      self.list       = getByClass(self.listContainer, self.listClass, true);
	
	      self.parse        = __webpack_require__(2037)(self);
	      self.templater    = __webpack_require__(2038)(self);
	      self.search       = __webpack_require__(2039)(self);
	      self.filter       = __webpack_require__(2040)(self);
	      self.sort         = __webpack_require__(2041)(self);
	      self.fuzzySearch  = __webpack_require__(2042)(self, options.fuzzySearch);
	
	      this.handlers();
	      this.items();
	      this.pagination();
	
	      self.update();
	    },
	    handlers: function() {
	      for (var handler in self.handlers) {
	        if (self[handler]) {
	          self.on(handler, self[handler]);
	        }
	      }
	    },
	    items: function() {
	      self.parse(self.list);
	      if (values !== undefined) {
	        self.add(values);
	      }
	    },
	    pagination: function() {
	      if (options.pagination !== undefined) {
	        if (options.pagination === true) {
	          options.pagination = [{}];
	        }
	        if (options.pagination[0] === undefined){
	          options.pagination = [options.pagination];
	        }
	        for (var i = 0, il = options.pagination.length; i < il; i++) {
	          initPagination(options.pagination[i]);
	        }
	      }
	    }
	  };
	
	  /*
	  * Re-parse the List, use if html have changed
	  */
	  this.reIndex = function() {
	    self.items          = [];
	    self.visibleItems   = [];
	    self.matchingItems  = [];
	    self.searched       = false;
	    self.filtered       = false;
	    self.parse(self.list);
	  };
	
	  this.toJSON = function() {
	    var json = [];
	    for (var i = 0, il = self.items.length; i < il; i++) {
	      json.push(self.items[i].values());
	    }
	    return json;
	  };
	
	
	  /*
	  * Add object to list
	  */
	  this.add = function(values, callback) {
	    if (values.length === 0) {
	      return;
	    }
	    if (callback) {
	      addAsync(values, callback);
	      return;
	    }
	    var added = [],
	      notCreate = false;
	    if (values[0] === undefined){
	      values = [values];
	    }
	    for (var i = 0, il = values.length; i < il; i++) {
	      var item = null;
	      notCreate = (self.items.length > self.page) ? true : false;
	      item = new Item(values[i], undefined, notCreate);
	      self.items.push(item);
	      added.push(item);
	    }
	    self.update();
	    return added;
	  };
	
		this.show = function(i, page) {
			this.i = i;
			this.page = page;
			self.update();
	    return self;
		};
	
	  /* Removes object from list.
	  * Loops through the list and removes objects where
	  * property "valuename" === value
	  */
	  this.remove = function(valueName, value, options) {
	    var found = 0;
	    for (var i = 0, il = self.items.length; i < il; i++) {
	      if (self.items[i].values()[valueName] == value) {
	        self.templater.remove(self.items[i], options);
	        self.items.splice(i,1);
	        il--;
	        i--;
	        found++;
	      }
	    }
	    self.update();
	    return found;
	  };
	
	  /* Gets the objects in the list which
	  * property "valueName" === value
	  */
	  this.get = function(valueName, value) {
	    var matchedItems = [];
	    for (var i = 0, il = self.items.length; i < il; i++) {
	      var item = self.items[i];
	      if (item.values()[valueName] == value) {
	        matchedItems.push(item);
	      }
	    }
	    return matchedItems;
	  };
	
	  /*
	  * Get size of the list
	  */
	  this.size = function() {
	    return self.items.length;
	  };
	
	  /*
	  * Removes all items from the list
	  */
	  this.clear = function() {
	    self.templater.clear();
	    self.items = [];
	    return self;
	  };
	
	  this.on = function(event, callback) {
	    self.handlers[event].push(callback);
	    return self;
	  };
	
	  this.off = function(event, callback) {
	    var e = self.handlers[event];
	    var index = indexOf(e, callback);
	    if (index > -1) {
	      e.splice(index, 1);
	    }
	    return self;
	  };
	
	  this.trigger = function(event) {
	    var i = self.handlers[event].length;
	    while(i--) {
	      self.handlers[event][i](self);
	    }
	    return self;
	  };
	
	  this.reset = {
	    filter: function() {
	      var is = self.items,
	        il = is.length;
	      while (il--) {
	        is[il].filtered = false;
	      }
	      return self;
	    },
	    search: function() {
	      var is = self.items,
	        il = is.length;
	      while (il--) {
	        is[il].found = false;
	      }
	      return self;
	    }
	  };
	
	  this.update = function() {
	    var is = self.items,
				il = is.length;
	
	    self.visibleItems = [];
	    self.matchingItems = [];
	    self.templater.clear();
	    for (var i = 0; i < il; i++) {
	      if (is[i].matching() && ((self.matchingItems.length+1) >= self.i && self.visibleItems.length < self.page)) {
	        is[i].show();
	        self.visibleItems.push(is[i]);
	        self.matchingItems.push(is[i]);
	      } else if (is[i].matching()) {
	        self.matchingItems.push(is[i]);
	        is[i].hide();
	      } else {
	        is[i].hide();
	      }
	    }
	    self.trigger('updated');
	    return self;
	  };
	
	  init.start();
	};


/***/ }),
/* 2025 */
/***/ (function(module, exports) {

	'use strict';
	
	var alphabet;
	var alphabetIndexMap;
	var alphabetIndexMapLength = 0;
	
	function isNumberCode(code) {
	  return code >= 48 && code <= 57;
	}
	
	function naturalCompare(a, b) {
	  var lengthA = (a += '').length;
	  var lengthB = (b += '').length;
	  var aIndex = 0;
	  var bIndex = 0;
	
	  while (aIndex < lengthA && bIndex < lengthB) {
	    var charCodeA = a.charCodeAt(aIndex);
	    var charCodeB = b.charCodeAt(bIndex);
	
	    if (isNumberCode(charCodeA)) {
	      if (!isNumberCode(charCodeB)) {
	        return charCodeA - charCodeB;
	      }
	
	      var numStartA = aIndex;
	      var numStartB = bIndex;
	
	      while (charCodeA === 48 && ++numStartA < lengthA) {
	        charCodeA = a.charCodeAt(numStartA);
	      }
	      while (charCodeB === 48 && ++numStartB < lengthB) {
	        charCodeB = b.charCodeAt(numStartB);
	      }
	
	      var numEndA = numStartA;
	      var numEndB = numStartB;
	
	      while (numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA))) {
	        ++numEndA;
	      }
	      while (numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB))) {
	        ++numEndB;
	      }
	
	      var difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length
	      if (difference) {
	        return difference;
	      }
	
	      while (numStartA < numEndA) {
	        difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);
	        if (difference) {
	          return difference;
	        }
	      }
	
	      aIndex = numEndA;
	      bIndex = numEndB;
	      continue;
	    }
	
	    if (charCodeA !== charCodeB) {
	      if (
	        charCodeA < alphabetIndexMapLength &&
	        charCodeB < alphabetIndexMapLength &&
	        alphabetIndexMap[charCodeA] !== -1 &&
	        alphabetIndexMap[charCodeB] !== -1
	      ) {
	        return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];
	      }
	
	      return charCodeA - charCodeB;
	    }
	
	    ++aIndex;
	    ++bIndex;
	  }
	
	  return lengthA - lengthB;
	}
	
	naturalCompare.caseInsensitive = naturalCompare.i = function(a, b) {
	  return naturalCompare(('' + a).toLowerCase(), ('' + b).toLowerCase());
	};
	
	Object.defineProperties(naturalCompare, {
	  alphabet: {
	    get: function() {
	      return alphabet;
	    },
	    set: function(value) {
	      alphabet = value;
	      alphabetIndexMap = [];
	      var i = 0;
	      if (alphabet) {
	        for (; i < alphabet.length; i++) {
	          alphabetIndexMap[alphabet.charCodeAt(i)] = i;
	        }
	      }
	      alphabetIndexMapLength = alphabetIndexMap.length;
	      for (i = 0; i < alphabetIndexMapLength; i++) {
	        if (alphabetIndexMap[i] === undefined) {
	          alphabetIndexMap[i] = -1;
	        }
	      }
	    },
	  },
	});
	
	module.exports = naturalCompare;


/***/ }),
/* 2026 */
/***/ (function(module, exports) {

	/**
	 * A cross-browser implementation of getElementsByClass.
	 * Heavily based on Dustin Diaz's function: http://dustindiaz.com/getelementsbyclass.
	 *
	 * Find all elements with class `className` inside `container`.
	 * Use `single = true` to increase performance in older browsers
	 * when only one element is needed.
	 *
	 * @param {String} className
	 * @param {Element} container
	 * @param {Boolean} single
	 * @api public
	 */
	
	var getElementsByClassName = function(container, className, single) {
	  if (single) {
	    return container.getElementsByClassName(className)[0];
	  } else {
	    return container.getElementsByClassName(className);
	  }
	};
	
	var querySelector = function(container, className, single) {
	  className = '.' + className;
	  if (single) {
	    return container.querySelector(className);
	  } else {
	    return container.querySelectorAll(className);
	  }
	};
	
	var polyfill = function(container, className, single) {
	  var classElements = [],
	    tag = '*';
	
	  var els = container.getElementsByTagName(tag);
	  var elsLen = els.length;
	  var pattern = new RegExp("(^|\\s)"+className+"(\\s|$)");
	  for (var i = 0, j = 0; i < elsLen; i++) {
	    if ( pattern.test(els[i].className) ) {
	      if (single) {
	        return els[i];
	      } else {
	        classElements[j] = els[i];
	        j++;
	      }
	    }
	  }
	  return classElements;
	};
	
	module.exports = (function() {
	  return function(container, className, single, options) {
	    options = options || {};
	    if ((options.test && options.getElementsByClassName) || (!options.test && document.getElementsByClassName)) {
	      return getElementsByClassName(container, className, single);
	    } else if ((options.test && options.querySelector) || (!options.test && document.querySelector)) {
	      return querySelector(container, className, single);
	    } else {
	      return polyfill(container, className, single);
	    }
	  };
	})();


/***/ }),
/* 2027 */
/***/ (function(module, exports) {

	/*
	 * Source: https://github.com/segmentio/extend
	 */
	
	module.exports = function extend (object) {
	    // Takes an unlimited number of extenders.
	    var args = Array.prototype.slice.call(arguments, 1);
	
	    // For each extender, copy their properties on our object.
	    for (var i = 0, source; source = args[i]; i++) {
	        if (!source) continue;
	        for (var property in source) {
	            object[property] = source[property];
	        }
	    }
	
	    return object;
	};


/***/ }),
/* 2028 */
/***/ (function(module, exports) {

	var indexOf = [].indexOf;
	
	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};


/***/ }),
/* 2029 */
/***/ (function(module, exports, __webpack_require__) {

	var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
	    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
	    prefix = bind !== 'addEventListener' ? 'on' : '',
	    toArray = __webpack_require__(2030);
	
	/**
	 * Bind `el` event `type` to `fn`.
	 *
	 * @param {Element} el, NodeList, HTMLCollection or Array
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @api public
	 */
	
	exports.bind = function(el, type, fn, capture){
	  el = toArray(el);
	  for ( var i = 0; i < el.length; i++ ) {
	    el[i][bind](prefix + type, fn, capture || false);
	  }
	};
	
	/**
	 * Unbind `el` event `type`'s callback `fn`.
	 *
	 * @param {Element} el, NodeList, HTMLCollection or Array
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @api public
	 */
	
	exports.unbind = function(el, type, fn, capture){
	  el = toArray(el);
	  for ( var i = 0; i < el.length; i++ ) {
	    el[i][unbind](prefix + type, fn, capture || false);
	  }
	};


/***/ }),
/* 2030 */
/***/ (function(module, exports) {

	/**
	 * Source: https://github.com/timoxley/to-array
	 *
	 * Convert an array-like object into an `Array`.
	 * If `collection` is already an `Array`, then will return a clone of `collection`.
	 *
	 * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`
	 * @return {Array} Naive conversion of `collection` to a new `Array`.
	 * @api public
	 */
	
	module.exports = function toArray(collection) {
	  if (typeof collection === 'undefined') return [];
	  if (collection === null) return [null];
	  if (collection === window) return [window];
	  if (typeof collection === 'string') return [collection];
	  if (isArray(collection)) return collection;
	  if (typeof collection.length != 'number') return [collection];
	  if (typeof collection === 'function' && collection instanceof Function) return [collection];
	
	  var arr = [];
	  for (var i = 0; i < collection.length; i++) {
	    if (Object.prototype.hasOwnProperty.call(collection, i) || i in collection) {
	      arr.push(collection[i]);
	    }
	  }
	  if (!arr.length) return [];
	  return arr;
	};
	
	function isArray(arr) {
	  return Object.prototype.toString.call(arr) === "[object Array]";
	}


/***/ }),
/* 2031 */
/***/ (function(module, exports) {

	module.exports = function(s) {
	  s = (s === undefined) ? "" : s;
	  s = (s === null) ? "" : s;
	  s = s.toString();
	  return s;
	};


/***/ }),
/* 2032 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var index = __webpack_require__(2028);
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list ? this.list.contains(name) : !! ~index(this.array(), name);
	};


/***/ }),
/* 2033 */
/***/ (function(module, exports) {

	/**
	 * A cross-browser implementation of getAttribute.
	 * Source found here: http://stackoverflow.com/a/3755343/361337 written by Vivin Paliath
	 *
	 * Return the value for `attr` at `element`.
	 *
	 * @param {Element} el
	 * @param {String} attr
	 * @api public
	 */
	
	module.exports = function(el, attr) {
	  var result = (el.getAttribute && el.getAttribute(attr)) || null;
	  if( !result ) {
	    var attrs = el.attributes;
	    var length = attrs.length;
	    for(var i = 0; i < length; i++) {
	      if (attr[i] !== undefined) {
	        if(attr[i].nodeName === attr) {
	          result = attr[i].nodeValue;
	        }
	      }
	    }
	  }
	  return result;
	};


/***/ }),
/* 2034 */
/***/ (function(module, exports) {

	module.exports = function(list) {
	  return function(initValues, element, notCreate) {
	    var item = this;
	
	    this._values = {};
	
	    this.found = false; // Show if list.searched == true and this.found == true
	    this.filtered = false;// Show if list.filtered == true and this.filtered == true
	
	    var init = function(initValues, element, notCreate) {
	      if (element === undefined) {
	        if (notCreate) {
	          item.values(initValues, notCreate);
	        } else {
	          item.values(initValues);
	        }
	      } else {
	        item.elm = element;
	        var values = list.templater.get(item, initValues);
	        item.values(values);
	      }
	    };
	
	    this.values = function(newValues, notCreate) {
	      if (newValues !== undefined) {
	        for(var name in newValues) {
	          item._values[name] = newValues[name];
	        }
	        if (notCreate !== true) {
	          list.templater.set(item, item.values());
	        }
	      } else {
	        return item._values;
	      }
	    };
	
	    this.show = function() {
	      list.templater.show(item);
	    };
	
	    this.hide = function() {
	      list.templater.hide(item);
	    };
	
	    this.matching = function() {
	      return (
	        (list.filtered && list.searched && item.found && item.filtered) ||
	        (list.filtered && !list.searched && item.filtered) ||
	        (!list.filtered && list.searched && item.found) ||
	        (!list.filtered && !list.searched)
	      );
	    };
	
	    this.visible = function() {
	      return (item.elm && (item.elm.parentNode == list.list)) ? true : false;
	    };
	
	    init(initValues, element, notCreate);
	  };
	};


/***/ }),
/* 2035 */
/***/ (function(module, exports) {

	module.exports = function(list) {
	  var addAsync = function(values, callback, items) {
	    var valuesToAdd = values.splice(0, 50);
	    items = items || [];
	    items = items.concat(list.add(valuesToAdd));
	    if (values.length > 0) {
	      setTimeout(function() {
	        addAsync(values, callback, items);
	      }, 1);
	    } else {
	      list.update();
	      callback(items);
	    }
	  };
	  return addAsync;
	};


/***/ }),
/* 2036 */
/***/ (function(module, exports, __webpack_require__) {

	var classes = __webpack_require__(2032),
	  events = __webpack_require__(2029),
	  List = __webpack_require__(2024);
	
	module.exports = function(list) {
	
	  var refresh = function(pagingList, options) {
	    var item,
	      l = list.matchingItems.length,
	      index = list.i,
	      page = list.page,
	      pages = Math.ceil(l / page),
	      currentPage = Math.ceil((index / page)),
	      innerWindow = options.innerWindow || 2,
	      left = options.left || options.outerWindow || 0,
	      right = options.right || options.outerWindow || 0;
	
	    right = pages - right;
	
	    pagingList.clear();
	    for (var i = 1; i <= pages; i++) {
	      var className = (currentPage === i) ? "active" : "";
	
	      //console.log(i, left, right, currentPage, (currentPage - innerWindow), (currentPage + innerWindow), className);
	
	      if (is.number(i, left, right, currentPage, innerWindow)) {
	        item = pagingList.add({
	          page: i,
	          dotted: false
	        })[0];
	        if (className) {
	          classes(item.elm).add(className);
	        }
	        addEvent(item.elm, i, page);
	      } else if (is.dotted(pagingList, i, left, right, currentPage, innerWindow, pagingList.size())) {
	        item = pagingList.add({
	          page: "...",
	          dotted: true
	        })[0];
	        classes(item.elm).add("disabled");
	      }
	    }
	  };
	
	  var is = {
	    number: function(i, left, right, currentPage, innerWindow) {
	       return this.left(i, left) || this.right(i, right) || this.innerWindow(i, currentPage, innerWindow);
	    },
	    left: function(i, left) {
	      return (i <= left);
	    },
	    right: function(i, right) {
	      return (i > right);
	    },
	    innerWindow: function(i, currentPage, innerWindow) {
	      return ( i >= (currentPage - innerWindow) && i <= (currentPage + innerWindow));
	    },
	    dotted: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
	      return this.dottedLeft(pagingList, i, left, right, currentPage, innerWindow) || (this.dottedRight(pagingList, i, left, right, currentPage, innerWindow, currentPageItem));
	    },
	    dottedLeft: function(pagingList, i, left, right, currentPage, innerWindow) {
	      return ((i == (left + 1)) && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right));
	    },
	    dottedRight: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
	      if (pagingList.items[currentPageItem-1].values().dotted) {
	        return false;
	      } else {
	        return ((i == (right)) && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right));
	      }
	    }
	  };
	
	  var addEvent = function(elm, i, page) {
	     events.bind(elm, 'click', function() {
	       list.show((i-1)*page + 1, page);
	     });
	  };
	
	  return function(options) {
	    var pagingList = new List(list.listContainer.id, {
	      listClass: options.paginationClass || 'pagination',
	      item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
	      valueNames: ['page', 'dotted'],
	      searchClass: 'pagination-search-that-is-not-supposed-to-exist',
	      sortClass: 'pagination-sort-that-is-not-supposed-to-exist'
	    });
	
	    list.on('updated', function() {
	      refresh(pagingList, options);
	    });
	    refresh(pagingList, options);
	  };
	};


/***/ }),
/* 2037 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(list) {
	
	  var Item = __webpack_require__(2034)(list);
	
	  var getChildren = function(parent) {
	    var nodes = parent.childNodes,
	      items = [];
	    for (var i = 0, il = nodes.length; i < il; i++) {
	      // Only textnodes have a data attribute
	      if (nodes[i].data === undefined) {
	        items.push(nodes[i]);
	      }
	    }
	    return items;
	  };
	
	  var parse = function(itemElements, valueNames) {
	    for (var i = 0, il = itemElements.length; i < il; i++) {
	      list.items.push(new Item(valueNames, itemElements[i]));
	    }
	  };
	  var parseAsync = function(itemElements, valueNames) {
	    var itemsToIndex = itemElements.splice(0, 50); // TODO: If < 100 items, what happens in IE etc?
	    parse(itemsToIndex, valueNames);
	    if (itemElements.length > 0) {
	      setTimeout(function() {
	        parseAsync(itemElements, valueNames);
	      }, 1);
	    } else {
	      list.update();
	      list.trigger('parseComplete');
	    }
	  };
	
	  list.handlers.parseComplete = list.handlers.parseComplete || [];
	
	  return function() {
	    var itemsToIndex = getChildren(list.list),
	      valueNames = list.valueNames;
	
	    if (list.indexAsync) {
	      parseAsync(itemsToIndex, valueNames);
	    } else {
	      parse(itemsToIndex, valueNames);
	    }
	  };
	};


/***/ }),
/* 2038 */
/***/ (function(module, exports) {

	var Templater = function(list) {
	  var itemSource,
	    templater = this;
	
	  var init = function() {
	    itemSource = templater.getItemSource(list.item);
	    if (itemSource) {
	      itemSource = templater.clearSourceItem(itemSource, list.valueNames);
	    }
	  };
	
	  this.clearSourceItem = function(el, valueNames) {
	    for(var i = 0, il = valueNames.length; i < il; i++) {
	      var elm;
	      if (valueNames[i].data) {
	        for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {
	          el.setAttribute('data-'+valueNames[i].data[j], '');
	        }
	      } else if (valueNames[i].attr && valueNames[i].name) {
	        elm = list.utils.getByClass(el, valueNames[i].name, true);
	        if (elm) {
	          elm.setAttribute(valueNames[i].attr, "");
	        }
	      } else {
	        elm = list.utils.getByClass(el, valueNames[i], true);
	        if (elm) {
	          elm.innerHTML = "";
	        }
	      }
	      elm = undefined;
	    }
	    return el;
	  };
	
	  this.getItemSource = function(item) {
	    if (item === undefined) {
	      var nodes = list.list.childNodes,
	        items = [];
	
	      for (var i = 0, il = nodes.length; i < il; i++) {
	        // Only textnodes have a data attribute
	        if (nodes[i].data === undefined) {
	          return nodes[i].cloneNode(true);
	        }
	      }
	    } else if (/<tr[\s>]/g.exec(item)) {
	      var tbody = document.createElement('tbody');
	      tbody.innerHTML = item;
	      return tbody.firstChild;
	    } else if (item.indexOf("<") !== -1) {
	      var div = document.createElement('div');
	      div.innerHTML = item;
	      return div.firstChild;
	    } else {
	      var source = document.getElementById(list.item);
	      if (source) {
	        return source;
	      }
	    }
	    return undefined;
	  };
	
	  this.get = function(item, valueNames) {
	    templater.create(item);
	    var values = {};
	    for(var i = 0, il = valueNames.length; i < il; i++) {
	      var elm;
	      if (valueNames[i].data) {
	        for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {
	          values[valueNames[i].data[j]] = list.utils.getAttribute(item.elm, 'data-'+valueNames[i].data[j]);
	        }
	      } else if (valueNames[i].attr && valueNames[i].name) {
	        elm = list.utils.getByClass(item.elm, valueNames[i].name, true);
	        values[valueNames[i].name] = elm ? list.utils.getAttribute(elm, valueNames[i].attr) : "";
	      } else {
	        elm = list.utils.getByClass(item.elm, valueNames[i], true);
	        values[valueNames[i]] = elm ? elm.innerHTML : "";
	      }
	      elm = undefined;
	    }
	    return values;
	  };
	
	  this.set = function(item, values) {
	    var getValueName = function(name) {
	      for (var i = 0, il = list.valueNames.length; i < il; i++) {
	        if (list.valueNames[i].data) {
	          var data = list.valueNames[i].data;
	          for (var j = 0, jl = data.length; j < jl; j++) {
	            if (data[j] === name) {
	              return { data: name };
	            }
	          }
	        } else if (list.valueNames[i].attr && list.valueNames[i].name && list.valueNames[i].name == name) {
	          return list.valueNames[i];
	        } else if (list.valueNames[i] === name) {
	          return name;
	        }
	      }
	    };
	    var setValue = function(name, value) {
	      var elm;
	      var valueName = getValueName(name);
	      if (!valueName)
	        return;
	      if (valueName.data) {
	        item.elm.setAttribute('data-'+valueName.data, value);
	      } else if (valueName.attr && valueName.name) {
	        elm = list.utils.getByClass(item.elm, valueName.name, true);
	        if (elm) {
	          elm.setAttribute(valueName.attr, value);
	        }
	      } else {
	        elm = list.utils.getByClass(item.elm, valueName, true);
	        if (elm) {
	          elm.innerHTML = value;
	        }
	      }
	      elm = undefined;
	    };
	    if (!templater.create(item)) {
	      for(var v in values) {
	        if (values.hasOwnProperty(v)) {
	          setValue(v, values[v]);
	        }
	      }
	    }
	  };
	
	  this.create = function(item) {
	    if (item.elm !== undefined) {
	      return false;
	    }
	    if (itemSource === undefined) {
	      throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
	    }
	    /* If item source does not exists, use the first item in list as
	    source for new items */
	    var newItem = itemSource.cloneNode(true);
	    newItem.removeAttribute('id');
	    item.elm = newItem;
	    templater.set(item, item.values());
	    return true;
	  };
	  this.remove = function(item) {
	    if (item.elm.parentNode === list.list) {
	      list.list.removeChild(item.elm);
	    }
	  };
	  this.show = function(item) {
	    templater.create(item);
	    list.list.appendChild(item.elm);
	  };
	  this.hide = function(item) {
	    if (item.elm !== undefined && item.elm.parentNode === list.list) {
	      list.list.removeChild(item.elm);
	    }
	  };
	  this.clear = function() {
	    /* .innerHTML = ''; fucks up IE */
	    if (list.list.hasChildNodes()) {
	      while (list.list.childNodes.length >= 1)
	      {
	        list.list.removeChild(list.list.firstChild);
	      }
	    }
	  };
	
	  init();
	};
	
	module.exports = function(list) {
	  return new Templater(list);
	};


/***/ }),
/* 2039 */
/***/ (function(module, exports) {

	module.exports = function(list) {
	  var item,
	    text,
	    columns,
	    searchString,
	    customSearch;
	
	  var prepare = {
	    resetList: function() {
	      list.i = 1;
	      list.templater.clear();
	      customSearch = undefined;
	    },
	    setOptions: function(args) {
	      if (args.length == 2 && args[1] instanceof Array) {
	        columns = args[1];
	      } else if (args.length == 2 && typeof(args[1]) == "function") {
	        columns = undefined;
	        customSearch = args[1];
	      } else if (args.length == 3) {
	        columns = args[1];
	        customSearch = args[2];
	      } else {
	        columns = undefined;
	      }
	    },
	    setColumns: function() {
	      if (list.items.length === 0) return;
	      if (columns === undefined) {
	        columns = (list.searchColumns === undefined) ? prepare.toArray(list.items[0].values()) : list.searchColumns;
	      }
	    },
	    setSearchString: function(s) {
	      s = list.utils.toString(s).toLowerCase();
	      s = s.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"); // Escape regular expression characters
	      searchString = s;
	    },
	    toArray: function(values) {
	      var tmpColumn = [];
	      for (var name in values) {
	        tmpColumn.push(name);
	      }
	      return tmpColumn;
	    }
	  };
	  var search = {
	    list: function() {
	      for (var k = 0, kl = list.items.length; k < kl; k++) {
	        search.item(list.items[k]);
	      }
	    },
	    item: function(item) {
	      item.found = false;
	      for (var j = 0, jl = columns.length; j < jl; j++) {
	        if (search.values(item.values(), columns[j])) {
	          item.found = true;
	          return;
	        }
	      }
	    },
	    values: function(values, column) {
	      if (values.hasOwnProperty(column)) {
	        text = list.utils.toString(values[column]).toLowerCase();
	        if ((searchString !== "") && (text.search(searchString) > -1)) {
	          return true;
	        }
	      }
	      return false;
	    },
	    reset: function() {
	      list.reset.search();
	      list.searched = false;
	    }
	  };
	
	  var searchMethod = function(str) {
	    list.trigger('searchStart');
	
	    prepare.resetList();
	    prepare.setSearchString(str);
	    prepare.setOptions(arguments); // str, cols|searchFunction, searchFunction
	    prepare.setColumns();
	
	    if (searchString === "" ) {
	      search.reset();
	    } else {
	      list.searched = true;
	      if (customSearch) {
	        customSearch(searchString, columns);
	      } else {
	        search.list();
	      }
	    }
	
	    list.update();
	    list.trigger('searchComplete');
	    return list.visibleItems;
	  };
	
	  list.handlers.searchStart = list.handlers.searchStart || [];
	  list.handlers.searchComplete = list.handlers.searchComplete || [];
	
	  list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'keyup', function(e) {
	    var target = e.target || e.srcElement, // IE have srcElement
	      alreadyCleared = (target.value === "" && !list.searched);
	    if (!alreadyCleared) { // If oninput already have resetted the list, do nothing
	      searchMethod(target.value);
	    }
	  });
	
	  // Used to detect click on HTML5 clear button
	  list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'input', function(e) {
	    var target = e.target || e.srcElement;
	    if (target.value === "") {
	      searchMethod('');
	    }
	  });
	
	  return searchMethod;
	};


/***/ }),
/* 2040 */
/***/ (function(module, exports) {

	module.exports = function(list) {
	
	  // Add handlers
	  list.handlers.filterStart = list.handlers.filterStart || [];
	  list.handlers.filterComplete = list.handlers.filterComplete || [];
	
	  return function(filterFunction) {
	    list.trigger('filterStart');
	    list.i = 1; // Reset paging
	    list.reset.filter();
	    if (filterFunction === undefined) {
	      list.filtered = false;
	    } else {
	      list.filtered = true;
	      var is = list.items;
	      for (var i = 0, il = is.length; i < il; i++) {
	        var item = is[i];
	        if (filterFunction(item)) {
	          item.filtered = true;
	        } else {
	          item.filtered = false;
	        }
	      }
	    }
	    list.update();
	    list.trigger('filterComplete');
	    return list.visibleItems;
	  };
	};


/***/ }),
/* 2041 */
/***/ (function(module, exports) {

	module.exports = function(list) {
	
	  var buttons = {
	    els: undefined,
	    clear: function() {
	      for (var i = 0, il = buttons.els.length; i < il; i++) {
	        list.utils.classes(buttons.els[i]).remove('asc');
	        list.utils.classes(buttons.els[i]).remove('desc');
	      }
	    },
	    getOrder: function(btn) {
	      var predefinedOrder = list.utils.getAttribute(btn, 'data-order');
	      if (predefinedOrder == "asc" || predefinedOrder == "desc") {
	        return predefinedOrder;
	      } else if (list.utils.classes(btn).has('desc')) {
	        return "asc";
	      } else if (list.utils.classes(btn).has('asc')) {
	        return "desc";
	      } else {
	        return "asc";
	      }
	    },
	    getInSensitive: function(btn, options) {
	      var insensitive = list.utils.getAttribute(btn, 'data-insensitive');
	      if (insensitive === "false") {
	        options.insensitive = false;
	      } else {
	        options.insensitive = true;
	      }
	    },
	    setOrder: function(options) {
	      for (var i = 0, il = buttons.els.length; i < il; i++) {
	        var btn = buttons.els[i];
	        if (list.utils.getAttribute(btn, 'data-sort') !== options.valueName) {
	          continue;
	        }
	        var predefinedOrder = list.utils.getAttribute(btn, 'data-order');
	        if (predefinedOrder == "asc" || predefinedOrder == "desc") {
	          if (predefinedOrder == options.order) {
	            list.utils.classes(btn).add(options.order);
	          }
	        } else {
	          list.utils.classes(btn).add(options.order);
	        }
	      }
	    }
	  };
	
	  var sort = function() {
	    list.trigger('sortStart');
	    var options = {};
	
	    var target = arguments[0].currentTarget || arguments[0].srcElement || undefined;
	
	    if (target) {
	      options.valueName = list.utils.getAttribute(target, 'data-sort');
	      buttons.getInSensitive(target, options);
	      options.order = buttons.getOrder(target);
	    } else {
	      options = arguments[1] || options;
	      options.valueName = arguments[0];
	      options.order = options.order || "asc";
	      options.insensitive = (typeof options.insensitive == "undefined") ? true : options.insensitive;
	    }
	
	    buttons.clear();
	    buttons.setOrder(options);
	
	
	    // caseInsensitive
	    // alphabet
	    var customSortFunction = (options.sortFunction || list.sortFunction || null),
	        multi = ((options.order === 'desc') ? -1 : 1),
	        sortFunction;
	
	    if (customSortFunction) {
	      sortFunction = function(itemA, itemB) {
	        return customSortFunction(itemA, itemB, options) * multi;
	      };
	    } else {
	      sortFunction = function(itemA, itemB) {
	        var sort = list.utils.naturalSort;
	        sort.alphabet = list.alphabet || options.alphabet || undefined;
	        if (!sort.alphabet && options.insensitive) {
	          sort = list.utils.naturalSort.caseInsensitive;
	        }
	        return sort(itemA.values()[options.valueName], itemB.values()[options.valueName]) * multi;
	      };
	    }
	
	    list.items.sort(sortFunction);
	    list.update();
	    list.trigger('sortComplete');
	  };
	
	  // Add handlers
	  list.handlers.sortStart = list.handlers.sortStart || [];
	  list.handlers.sortComplete = list.handlers.sortComplete || [];
	
	  buttons.els = list.utils.getByClass(list.listContainer, list.sortClass);
	  list.utils.events.bind(buttons.els, 'click', sort);
	  list.on('searchStart', buttons.clear);
	  list.on('filterStart', buttons.clear);
	
	  return sort;
	};


/***/ }),
/* 2042 */
/***/ (function(module, exports, __webpack_require__) {

	
	var classes = __webpack_require__(2032),
	  events = __webpack_require__(2029),
	  extend = __webpack_require__(2027),
	  toString = __webpack_require__(2031),
	  getByClass = __webpack_require__(2026),
	  fuzzy = __webpack_require__(2043);
	
	module.exports = function(list, options) {
	  options = options || {};
	
	  options = extend({
	    location: 0,
	    distance: 100,
	    threshold: 0.4,
	    multiSearch: true,
	    searchClass: 'fuzzy-search'
	  }, options);
	
	
	
	  var fuzzySearch = {
	    search: function(searchString, columns) {
	      // Substract arguments from the searchString or put searchString as only argument
	      var searchArguments = options.multiSearch ? searchString.replace(/ +$/, '').split(/ +/) : [searchString];
	
	      for (var k = 0, kl = list.items.length; k < kl; k++) {
	        fuzzySearch.item(list.items[k], columns, searchArguments);
	      }
	    },
	    item: function(item, columns, searchArguments) {
	      var found = true;
	      for(var i = 0; i < searchArguments.length; i++) {
	        var foundArgument = false;
	        for (var j = 0, jl = columns.length; j < jl; j++) {
	          if (fuzzySearch.values(item.values(), columns[j], searchArguments[i])) {
	            foundArgument = true;
	          }
	        }
	        if(!foundArgument) {
	          found = false;
	        }
	      }
	      item.found = found;
	    },
	    values: function(values, value, searchArgument) {
	      if (values.hasOwnProperty(value)) {
	        var text = toString(values[value]).toLowerCase();
	
	        if (fuzzy(text, searchArgument, options)) {
	          return true;
	        }
	      }
	      return false;
	    }
	  };
	
	
	  events.bind(getByClass(list.listContainer, options.searchClass), 'keyup', function(e) {
	    var target = e.target || e.srcElement; // IE have srcElement
	    list.search(target.value, fuzzySearch.search);
	  });
	
	  return function(str, columns) {
	    list.search(str, columns, fuzzySearch.search);
	  };
	};


/***/ }),
/* 2043 */
/***/ (function(module, exports) {

	module.exports = function(text, pattern, options) {
	    // Aproximately where in the text is the pattern expected to be found?
	    var Match_Location = options.location || 0;
	
	    //Determines how close the match must be to the fuzzy location (specified above). An exact letter match which is 'distance' characters away from the fuzzy location would score as a complete mismatch. A distance of '0' requires the match be at the exact location specified, a threshold of '1000' would require a perfect match to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
	    var Match_Distance = options.distance || 100;
	
	    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match (of both letters and location), a threshold of '1.0' would match anything.
	    var Match_Threshold = options.threshold || 0.4;
	
	    if (pattern === text) return true; // Exact match
	    if (pattern.length > 32) return false; // This algorithm cannot be used
	
	    // Set starting location at beginning text and initialise the alphabet.
	    var loc = Match_Location,
	        s = (function() {
	            var q = {},
	                i;
	
	            for (i = 0; i < pattern.length; i++) {
	                q[pattern.charAt(i)] = 0;
	            }
	
	            for (i = 0; i < pattern.length; i++) {
	                q[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
	            }
	
	            return q;
	        }());
	
	    // Compute and return the score for a match with e errors and x location.
	    // Accesses loc and pattern through being a closure.
	
	    function match_bitapScore_(e, x) {
	        var accuracy = e / pattern.length,
	            proximity = Math.abs(loc - x);
	
	        if (!Match_Distance) {
	            // Dodge divide by zero error.
	            return proximity ? 1.0 : accuracy;
	        }
	        return accuracy + (proximity / Match_Distance);
	    }
	
	    var score_threshold = Match_Threshold, // Highest score beyond which we give up.
	        best_loc = text.indexOf(pattern, loc); // Is there a nearby exact match? (speedup)
	
	    if (best_loc != -1) {
	        score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
	        // What about in the other direction? (speedup)
	        best_loc = text.lastIndexOf(pattern, loc + pattern.length);
	
	        if (best_loc != -1) {
	            score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
	        }
	    }
	
	    // Initialise the bit arrays.
	    var matchmask = 1 << (pattern.length - 1);
	    best_loc = -1;
	
	    var bin_min, bin_mid;
	    var bin_max = pattern.length + text.length;
	    var last_rd;
	    for (var d = 0; d < pattern.length; d++) {
	        // Scan for the best match; each iteration allows for one more error.
	        // Run a binary search to determine how far from 'loc' we can stray at this
	        // error level.
	        bin_min = 0;
	        bin_mid = bin_max;
	        while (bin_min < bin_mid) {
	            if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
	                bin_min = bin_mid;
	            } else {
	                bin_max = bin_mid;
	            }
	            bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
	        }
	        // Use the result from this iteration as the maximum for the next.
	        bin_max = bin_mid;
	        var start = Math.max(1, loc - bin_mid + 1);
	        var finish = Math.min(loc + bin_mid, text.length) + pattern.length;
	
	        var rd = Array(finish + 2);
	        rd[finish + 1] = (1 << d) - 1;
	        for (var j = finish; j >= start; j--) {
	            // The alphabet (s) is a sparse hash, so the following line generates
	            // warnings.
	            var charMatch = s[text.charAt(j - 1)];
	            if (d === 0) {    // First pass: exact match.
	                rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
	            } else {    // Subsequent passes: fuzzy match.
	                rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
	                                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
	                                last_rd[j + 1];
	            }
	            if (rd[j] & matchmask) {
	                var score = match_bitapScore_(d, j - 1);
	                // This match will almost certainly be better than any existing match.
	                // But check anyway.
	                if (score <= score_threshold) {
	                    // Told you so.
	                    score_threshold = score;
	                    best_loc = j - 1;
	                    if (best_loc > loc) {
	                        // When passing loc, don't exceed our current distance from loc.
	                        start = Math.max(1, 2 * loc - best_loc);
	                    } else {
	                        // Already passed loc, downhill from here on in.
	                        break;
	                    }
	                }
	            }
	        }
	        // No hope for a (better) match at greater error levels.
	        if (match_bitapScore_(d + 1, loc) > score_threshold) {
	            break;
	        }
	        last_rd = rd;
	    }
	
	    return (best_loc < 0) ? false : true;
	};


/***/ }),
/* 2044 */
[2893, 2045, 2047],
/* 2045 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2046)();
	// imports
	
	
	// module
	exports.push([module.id, ".pfdjs-container #pfdjs-searchpanel .search {\n  outline: none;\n  padding: 6px;\n  border: 1px  solid #333;\n  transition: border 0.3s;\n  width: 300px;\n  margin-top: 16px;\n  margin-bottom: 16px; }\n\n.pfdjs-container #pfdjs-searchpanel .list {\n  margin-top: 3px;\n  padding: 0;\n  list-style-type: none; }\n  .pfdjs-container #pfdjs-searchpanel .list li {\n    cursor: pointer;\n    display: block;\n    background-color: #eee;\n    border-left: 4px solid #5990bd;\n    padding: 8px;\n    margin: 2px 20px;\n    text-align: left; }\n    .pfdjs-container #pfdjs-searchpanel .list li h3 {\n      margin: 0;\n      color: #333;\n      font-size: 15px; }\n    .pfdjs-container #pfdjs-searchpanel .list li p {\n      margin: 0;\n      color: #555;\n      font-size: 12px; }\n      .pfdjs-container #pfdjs-searchpanel .list li p .elementType {\n        font-weight: bold; }\n    .pfdjs-container #pfdjs-searchpanel .list li:hover {\n      background-color: #f5f5f5; }\n", ""]);
	
	// exports


/***/ }),
/* 2046 */
1485,
/* 2047 */
1486,
/* 2048 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: [ 'propertiesProvider' ],
	  propertiesProvider: [ 'type', __webpack_require__(2049) ],
	  __depends__: [
	    __webpack_require__(2365)
	  ]
	};

/***/ }),
/* 2049 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var propertiesTab = __webpack_require__(2050),
	    is = __webpack_require__(2052).is,
	    formatTab = __webpack_require__(2053)
	    ;
	
	function PfdnPropertiesProvider(icons, entryFactory, eventBus, modelling) {
	  this._icons = icons;
	  this._entryFactory = entryFactory;
	  this._eventBus = eventBus;
	  this._modelling = modelling;
	}
	
	PfdnPropertiesProvider.$inject = [
	  'icons',
	  'entryFactory',
	  'eventBus',
	  'modelling'
	];
	
	module.exports = PfdnPropertiesProvider;
	
	PfdnPropertiesProvider.prototype.updateDrawing = function(definition){
	  if (is(definition, 'pfdn:Settings')){
	    // trigger to redraw the axes
	    this._eventBus.emit('canvas.resized');
	  } else if (is(definition, 'pfdn:Label')){
	    this._modelling._elements.label._labels._builder(definition);
	  } else if (is(definition, 'pfdn:Link')){
	    this._modelling._elements.link._links._builder(definition);
	    this._modelling._elements.label._labels._builder(definition.label);
	  } else if (is(definition, 'pfdn:Node')){
	    this._modelling._elements.node._nodes._builder(definition);
	    this._modelling._elements.label._labels._builder(definition.label);
	  }
	};
	
	PfdnPropertiesProvider.prototype.getTabs = function(element){
	  var icons = this._icons,
	      entryFactory = this._entryFactory;
	  return [
	    propertiesTab(element, entryFactory),
	    formatTab(element, entryFactory, icons)
	  ];
	};

/***/ }),
/* 2050 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nameProps = __webpack_require__(2051)
	    ;
	
	function propertiesTab(element, entryFactory) {
	
	  var generalGroup = {
	    id: 'general',
	    label: 'General',
	    entries: []
	  };
	
	  nameProps(generalGroup, element, entryFactory);
	
	  return {
	    id: 'properties',
	    label: 'Properties',
	    groups: [
	      generalGroup
	    ]
	  };
	
	}
	
	module.exports = propertiesTab;

/***/ }),
/* 2051 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var is = __webpack_require__(2052).is;
	
	function nameProps(group, element, entryFactory) {
	  if (is(element, 'pfdn:Node')) {
	    group.entries.push(entryFactory.textField({
	      id: 'name',
	      label: 'Name',
	      modelProperty: 'name'
	    }));
	    group.entries.push(entryFactory.textField({
	      id: 'tag',
	      label: 'Tag',
	      modelProperty: 'tag'
	    }));
	    group.entries.push(entryFactory.textField({
	      id: 'label.text',
	      label: 'Diagram label',
	      modelProperty: 'label.text'
	    }));
	  } else if (is(element, 'pfdn:Settings')) {
	    group.entries.push(entryFactory.textField({
	      id: 'name',
	      label: 'Diagram name',
	      modelProperty: 'name'
	    }));
	    group.entries.push(entryFactory.textField({
	      id: 'author',
	      label: 'Author\'s name',
	      modelProperty: 'author'
	    }));
	  } else if (is(element, 'pfdn:Link')){
	    group.entries.push(entryFactory.textField({
	      id: 'label.text',
	      label: 'Diagram label',
	      modelProperty: 'label.text'
	    }));
	  } else if (is(element, 'pfdn:Label')){
	    group.entries.push(entryFactory.textField({
	      id: 'text',
	      label: 'Label',
	      modelProperty: 'text'
	    }));
	  }
	}
	
	module.exports = nameProps;

/***/ }),
/* 2052 */
/***/ (function(module, exports) {

	'use strict';
	
	function is(definition, elementType){
	  return definition.$instanceOf(elementType);
	}
	
	module.exports = {
	  is: is
	};

/***/ }),
/* 2053 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nodeFormatProps = __webpack_require__(2054),
	    linkFormatProps = __webpack_require__(2362),
	    labelFormatProps = __webpack_require__(2363),
	    gridFormatProps = __webpack_require__(2364)
	    ;
	
	function formatTab(element, entryFactory, icons) {
	
	  var elemFormatGroup = {
	    id: 'elementFormat',
	    label: 'Element format',
	    entries: []
	  };
	
	  var labelFormatGroup = {
	    id: 'labelFormat',
	    label: 'Label format',
	    entries: []
	  };
	
	  var gridFormatGroup = {
	    id: 'gridFormat',
	    label: 'Grid format',
	    entries: []
	  };
	
	  nodeFormatProps(elemFormatGroup, element, entryFactory, icons);
	  linkFormatProps(elemFormatGroup, element, entryFactory);
	  labelFormatProps(labelFormatGroup, element, entryFactory);
	  gridFormatProps(gridFormatGroup, element, entryFactory);
	
	  return {
	    id: 'format',
	    label: 'Format',
	    groups: [
	      elemFormatGroup,
	      labelFormatGroup,
	      gridFormatGroup
	    ]
	  };
	
	}
	
	module.exports = formatTab;

/***/ }),
/* 2054 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var is = __webpack_require__(2052).is,
	    startCase = __webpack_require__(2055).startCase,
	    forIn = __webpack_require__(2188).forIn;
	
	function nodeFormatProps(group, element, entryFactory, icons) {
	  var selOptions = [];
	  forIn(icons, function(v, k){
	    selOptions.push({
	      value: k,
	      name: startCase(k)
	    });
	  });
	  if (is(element, 'pfdn:Node')) {
	    group.entries.push(entryFactory.selectBox({
	      id: 'type',
	      label: 'Icon',
	      modelProperty: 'type',
	      allowEmpty: false,
	      selectOptions: selOptions
	    }));
	    group.entries.push(entryFactory.textField({
	      id: 'size',
	      label: 'Size',
	      modelProperty: 'size',
	      type: 'number'
	    }));
	  }
	}
	
	module.exports = nodeFormatProps;

/***/ }),
/* 2055 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  'camelCase': __webpack_require__(2056),
	  'capitalize': __webpack_require__(2057),
	  'deburr': __webpack_require__(2080),
	  'endsWith': __webpack_require__(2087),
	  'escape': __webpack_require__(2093),
	  'escapeRegExp': __webpack_require__(2095),
	  'kebabCase': __webpack_require__(2096),
	  'lowerCase': __webpack_require__(2097),
	  'lowerFirst': __webpack_require__(2098),
	  'pad': __webpack_require__(2099),
	  'padEnd': __webpack_require__(2106),
	  'padStart': __webpack_require__(2107),
	  'parseInt': __webpack_require__(2108),
	  'repeat': __webpack_require__(2109),
	  'replace': __webpack_require__(2116),
	  'snakeCase': __webpack_require__(2117),
	  'split': __webpack_require__(2118),
	  'startCase': __webpack_require__(2123),
	  'startsWith': __webpack_require__(2124),
	  'template': __webpack_require__(2125),
	  'templateSettings': __webpack_require__(2170),
	  'toLower': __webpack_require__(2173),
	  'toUpper': __webpack_require__(2174),
	  'trim': __webpack_require__(2175),
	  'trimEnd': __webpack_require__(2182),
	  'trimStart': __webpack_require__(2183),
	  'truncate': __webpack_require__(2184),
	  'unescape': __webpack_require__(2185),
	  'upperCase': __webpack_require__(2187),
	  'upperFirst': __webpack_require__(2070),
	  'words': __webpack_require__(2083)
	};


/***/ }),
/* 2056 */
/***/ (function(module, exports, __webpack_require__) {

	var capitalize = __webpack_require__(2057),
	    createCompounder = __webpack_require__(2078);
	
	/**
	 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the camel cased string.
	 * @example
	 *
	 * _.camelCase('Foo Bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('--foo-bar--');
	 * // => 'fooBar'
	 *
	 * _.camelCase('__FOO_BAR__');
	 * // => 'fooBar'
	 */
	var camelCase = createCompounder(function(result, word, index) {
	  word = word.toLowerCase();
	  return result + (index ? capitalize(word) : word);
	});
	
	module.exports = camelCase;


/***/ }),
/* 2057 */
/***/ (function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(2058),
	    upperFirst = __webpack_require__(2070);
	
	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  return upperFirst(toString(string).toLowerCase());
	}
	
	module.exports = capitalize;


/***/ }),
/* 2058 */
[2963, 2059],
/* 2059 */
[2964, 2060, 2063, 2064, 2065],
/* 2060 */
[2905, 2061],
/* 2061 */
[2906, 2062],
/* 2062 */
17,
/* 2063 */
99,
/* 2064 */
47,
/* 2065 */
[2939, 2066, 2069],
/* 2066 */
[2904, 2060, 2067, 2068],
/* 2067 */
[2907, 2060],
/* 2068 */
19,
/* 2069 */
46,
/* 2070 */
/***/ (function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(2071);
	
	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = createCaseFirst('toUpperCase');
	
	module.exports = upperFirst;


/***/ }),
/* 2071 */
/***/ (function(module, exports, __webpack_require__) {

	var castSlice = __webpack_require__(2072),
	    hasUnicode = __webpack_require__(2074),
	    stringToArray = __webpack_require__(2075),
	    toString = __webpack_require__(2058);
	
	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString(string);
	
	    var strSymbols = hasUnicode(string)
	      ? stringToArray(string)
	      : undefined;
	
	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);
	
	    var trailing = strSymbols
	      ? castSlice(strSymbols, 1).join('')
	      : string.slice(1);
	
	    return chr[methodName]() + trailing;
	  };
	}
	
	module.exports = createCaseFirst;


/***/ }),
/* 2072 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(2073);
	
	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}
	
	module.exports = castSlice;


/***/ }),
/* 2073 */
203,
/* 2074 */
437,
/* 2075 */
[3125, 2076, 2074, 2077],
/* 2076 */
436,
/* 2077 */
438,
/* 2078 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(2079),
	    deburr = __webpack_require__(2080),
	    words = __webpack_require__(2083);
	
	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";
	
	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');
	
	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	  };
	}
	
	module.exports = createCompounder;


/***/ }),
/* 2079 */
220,
/* 2080 */
/***/ (function(module, exports, __webpack_require__) {

	var deburrLetter = __webpack_require__(2081),
	    toString = __webpack_require__(2058);
	
	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	
	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
	
	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboRange + ']';
	
	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');
	
	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}
	
	module.exports = deburr;


/***/ }),
/* 2081 */
/***/ (function(module, exports, __webpack_require__) {

	var basePropertyOf = __webpack_require__(2082);
	
	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};
	
	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = basePropertyOf(deburredLetters);
	
	module.exports = deburrLetter;


/***/ }),
/* 2082 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = basePropertyOf;


/***/ }),
/* 2083 */
/***/ (function(module, exports, __webpack_require__) {

	var asciiWords = __webpack_require__(2084),
	    hasUnicodeWord = __webpack_require__(2085),
	    toString = __webpack_require__(2058),
	    unicodeWords = __webpack_require__(2086);
	
	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString(string);
	  pattern = guard ? undefined : pattern;
	
	  if (pattern === undefined) {
	    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}
	
	module.exports = words;


/***/ }),
/* 2084 */
/***/ (function(module, exports) {

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	
	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}
	
	module.exports = asciiWords;


/***/ }),
/* 2085 */
/***/ (function(module, exports) {

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	
	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}
	
	module.exports = hasUnicodeWord;


/***/ }),
/* 2086 */
/***/ (function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	
	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
	    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
	
	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');
	
	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}
	
	module.exports = unicodeWords;


/***/ }),
/* 2087 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClamp = __webpack_require__(2088),
	    baseToString = __webpack_require__(2059),
	    toInteger = __webpack_require__(2089),
	    toString = __webpack_require__(2058);
	
	/**
	 * Checks if `string` ends with the given target string.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {string} [target] The string to search for.
	 * @param {number} [position=string.length] The position to search up to.
	 * @returns {boolean} Returns `true` if `string` ends with `target`,
	 *  else `false`.
	 * @example
	 *
	 * _.endsWith('abc', 'c');
	 * // => true
	 *
	 * _.endsWith('abc', 'b');
	 * // => false
	 *
	 * _.endsWith('abc', 'b', 2);
	 * // => true
	 */
	function endsWith(string, target, position) {
	  string = toString(string);
	  target = baseToString(target);
	
	  var length = string.length;
	  position = position === undefined
	    ? length
	    : baseClamp(toInteger(position), 0, length);
	
	  var end = position;
	  position -= target.length;
	  return position >= 0 && string.slice(position, end) == target;
	}
	
	module.exports = endsWith;


/***/ }),
/* 2088 */
443,
/* 2089 */
[3104, 2090],
/* 2090 */
[3105, 2091],
/* 2091 */
[3090, 2092, 2065],
/* 2092 */
20,
/* 2093 */
/***/ (function(module, exports, __webpack_require__) {

	var escapeHtmlChar = __webpack_require__(2094),
	    toString = __webpack_require__(2058);
	
	/** Used to match HTML entities and HTML characters. */
	var reUnescapedHtml = /[&<>"']/g,
	    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	
	/**
	 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
	 * corresponding HTML entities.
	 *
	 * **Note:** No other characters are escaped. To escape additional
	 * characters use a third-party library like [_he_](https://mths.be/he).
	 *
	 * Though the ">" character is escaped for symmetry, characters like
	 * ">" and "/" don't need escaping in HTML and have no special meaning
	 * unless they're part of a tag or unquoted attribute value. See
	 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	 * (under "semi-related fun fact") for more details.
	 *
	 * When working with HTML you should always
	 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	 * XSS vectors.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escape('fred, barney, & pebbles');
	 * // => 'fred, barney, &amp; pebbles'
	 */
	function escape(string) {
	  string = toString(string);
	  return (string && reHasUnescapedHtml.test(string))
	    ? string.replace(reUnescapedHtml, escapeHtmlChar)
	    : string;
	}
	
	module.exports = escape;


/***/ }),
/* 2094 */
/***/ (function(module, exports, __webpack_require__) {

	var basePropertyOf = __webpack_require__(2082);
	
	/** Used to map characters to HTML entities. */
	var htmlEscapes = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;'
	};
	
	/**
	 * Used by `_.escape` to convert characters to HTML entities.
	 *
	 * @private
	 * @param {string} chr The matched character to escape.
	 * @returns {string} Returns the escaped character.
	 */
	var escapeHtmlChar = basePropertyOf(htmlEscapes);
	
	module.exports = escapeHtmlChar;


/***/ }),
/* 2095 */
/***/ (function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(2058);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	    reHasRegExpChar = RegExp(reRegExpChar.source);
	
	/**
	 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escapeRegExp('[lodash](https://lodash.com/)');
	 * // => '\[lodash\]\(https://lodash\.com/\)'
	 */
	function escapeRegExp(string) {
	  string = toString(string);
	  return (string && reHasRegExpChar.test(string))
	    ? string.replace(reRegExpChar, '\\$&')
	    : string;
	}
	
	module.exports = escapeRegExp;


/***/ }),
/* 2096 */
/***/ (function(module, exports, __webpack_require__) {

	var createCompounder = __webpack_require__(2078);
	
	/**
	 * Converts `string` to
	 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the kebab cased string.
	 * @example
	 *
	 * _.kebabCase('Foo Bar');
	 * // => 'foo-bar'
	 *
	 * _.kebabCase('fooBar');
	 * // => 'foo-bar'
	 *
	 * _.kebabCase('__FOO_BAR__');
	 * // => 'foo-bar'
	 */
	var kebabCase = createCompounder(function(result, word, index) {
	  return result + (index ? '-' : '') + word.toLowerCase();
	});
	
	module.exports = kebabCase;


/***/ }),
/* 2097 */
/***/ (function(module, exports, __webpack_require__) {

	var createCompounder = __webpack_require__(2078);
	
	/**
	 * Converts `string`, as space separated words, to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the lower cased string.
	 * @example
	 *
	 * _.lowerCase('--Foo-Bar--');
	 * // => 'foo bar'
	 *
	 * _.lowerCase('fooBar');
	 * // => 'foo bar'
	 *
	 * _.lowerCase('__FOO_BAR__');
	 * // => 'foo bar'
	 */
	var lowerCase = createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + word.toLowerCase();
	});
	
	module.exports = lowerCase;


/***/ }),
/* 2098 */
/***/ (function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(2071);
	
	/**
	 * Converts the first character of `string` to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.lowerFirst('Fred');
	 * // => 'fred'
	 *
	 * _.lowerFirst('FRED');
	 * // => 'fRED'
	 */
	var lowerFirst = createCaseFirst('toLowerCase');
	
	module.exports = lowerFirst;


/***/ }),
/* 2099 */
/***/ (function(module, exports, __webpack_require__) {

	var createPadding = __webpack_require__(2100),
	    stringSize = __webpack_require__(2102),
	    toInteger = __webpack_require__(2089),
	    toString = __webpack_require__(2058);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeFloor = Math.floor;
	
	/**
	 * Pads `string` on the left and right sides if it's shorter than `length`.
	 * Padding characters are truncated if they can't be evenly divided by `length`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to pad.
	 * @param {number} [length=0] The padding length.
	 * @param {string} [chars=' '] The string used as padding.
	 * @returns {string} Returns the padded string.
	 * @example
	 *
	 * _.pad('abc', 8);
	 * // => '  abc   '
	 *
	 * _.pad('abc', 8, '_-');
	 * // => '_-abc_-_'
	 *
	 * _.pad('abc', 3);
	 * // => 'abc'
	 */
	function pad(string, length, chars) {
	  string = toString(string);
	  length = toInteger(length);
	
	  var strLength = length ? stringSize(string) : 0;
	  if (!length || strLength >= length) {
	    return string;
	  }
	  var mid = (length - strLength) / 2;
	  return (
	    createPadding(nativeFloor(mid), chars) +
	    string +
	    createPadding(nativeCeil(mid), chars)
	  );
	}
	
	module.exports = pad;


/***/ }),
/* 2100 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRepeat = __webpack_require__(2101),
	    baseToString = __webpack_require__(2059),
	    castSlice = __webpack_require__(2072),
	    hasUnicode = __webpack_require__(2074),
	    stringSize = __webpack_require__(2102),
	    stringToArray = __webpack_require__(2075);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil;
	
	/**
	 * Creates the padding for `string` based on `length`. The `chars` string
	 * is truncated if the number of characters exceeds `length`.
	 *
	 * @private
	 * @param {number} length The padding length.
	 * @param {string} [chars=' '] The string used as padding.
	 * @returns {string} Returns the padding for `string`.
	 */
	function createPadding(length, chars) {
	  chars = chars === undefined ? ' ' : baseToString(chars);
	
	  var charsLength = chars.length;
	  if (charsLength < 2) {
	    return charsLength ? baseRepeat(chars, length) : chars;
	  }
	  var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
	  return hasUnicode(chars)
	    ? castSlice(stringToArray(result), 0, length).join('')
	    : result.slice(0, length);
	}
	
	module.exports = createPadding;


/***/ }),
/* 2101 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor;
	
	/**
	 * The base implementation of `_.repeat` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {string} string The string to repeat.
	 * @param {number} n The number of times to repeat the string.
	 * @returns {string} Returns the repeated string.
	 */
	function baseRepeat(string, n) {
	  var result = '';
	  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
	    return result;
	  }
	  // Leverage the exponentiation by squaring algorithm for a faster repeat.
	  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	  do {
	    if (n % 2) {
	      result += string;
	    }
	    n = nativeFloor(n / 2);
	    if (n) {
	      string += string;
	    }
	  } while (n);
	
	  return result;
	}
	
	module.exports = baseRepeat;


/***/ }),
/* 2102 */
[3177, 2103, 2074, 2105],
/* 2103 */
[3178, 2104],
/* 2104 */
180,
/* 2105 */
771,
/* 2106 */
/***/ (function(module, exports, __webpack_require__) {

	var createPadding = __webpack_require__(2100),
	    stringSize = __webpack_require__(2102),
	    toInteger = __webpack_require__(2089),
	    toString = __webpack_require__(2058);
	
	/**
	 * Pads `string` on the right side if it's shorter than `length`. Padding
	 * characters are truncated if they exceed `length`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to pad.
	 * @param {number} [length=0] The padding length.
	 * @param {string} [chars=' '] The string used as padding.
	 * @returns {string} Returns the padded string.
	 * @example
	 *
	 * _.padEnd('abc', 6);
	 * // => 'abc   '
	 *
	 * _.padEnd('abc', 6, '_-');
	 * // => 'abc_-_'
	 *
	 * _.padEnd('abc', 3);
	 * // => 'abc'
	 */
	function padEnd(string, length, chars) {
	  string = toString(string);
	  length = toInteger(length);
	
	  var strLength = length ? stringSize(string) : 0;
	  return (length && strLength < length)
	    ? (string + createPadding(length - strLength, chars))
	    : string;
	}
	
	module.exports = padEnd;


/***/ }),
/* 2107 */
/***/ (function(module, exports, __webpack_require__) {

	var createPadding = __webpack_require__(2100),
	    stringSize = __webpack_require__(2102),
	    toInteger = __webpack_require__(2089),
	    toString = __webpack_require__(2058);
	
	/**
	 * Pads `string` on the left side if it's shorter than `length`. Padding
	 * characters are truncated if they exceed `length`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to pad.
	 * @param {number} [length=0] The padding length.
	 * @param {string} [chars=' '] The string used as padding.
	 * @returns {string} Returns the padded string.
	 * @example
	 *
	 * _.padStart('abc', 6);
	 * // => '   abc'
	 *
	 * _.padStart('abc', 6, '_-');
	 * // => '_-_abc'
	 *
	 * _.padStart('abc', 3);
	 * // => 'abc'
	 */
	function padStart(string, length, chars) {
	  string = toString(string);
	  length = toInteger(length);
	
	  var strLength = length ? stringSize(string) : 0;
	  return (length && strLength < length)
	    ? (createPadding(length - strLength, chars) + string)
	    : string;
	}
	
	module.exports = padStart;


/***/ }),
/* 2108 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(2061),
	    toString = __webpack_require__(2058);
	
	/** Used to match leading and trailing whitespace. */
	var reTrimStart = /^\s+/;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeParseInt = root.parseInt;
	
	/**
	 * Converts `string` to an integer of the specified radix. If `radix` is
	 * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	 * hexadecimal, in which case a `radix` of `16` is used.
	 *
	 * **Note:** This method aligns with the
	 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category String
	 * @param {string} string The string to convert.
	 * @param {number} [radix=10] The radix to interpret `value` by.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.parseInt('08');
	 * // => 8
	 *
	 * _.map(['6', '08', '10'], _.parseInt);
	 * // => [6, 8, 10]
	 */
	function parseInt(string, radix, guard) {
	  if (guard || radix == null) {
	    radix = 0;
	  } else if (radix) {
	    radix = +radix;
	  }
	  return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
	}
	
	module.exports = parseInt;


/***/ }),
/* 2109 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRepeat = __webpack_require__(2101),
	    isIterateeCall = __webpack_require__(2110),
	    toInteger = __webpack_require__(2089),
	    toString = __webpack_require__(2058);
	
	/**
	 * Repeats the given string `n` times.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to repeat.
	 * @param {number} [n=1] The number of times to repeat the string.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the repeated string.
	 * @example
	 *
	 * _.repeat('*', 3);
	 * // => '***'
	 *
	 * _.repeat('abc', 2);
	 * // => 'abcabc'
	 *
	 * _.repeat('abc', 0);
	 * // => ''
	 */
	function repeat(string, n, guard) {
	  if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
	    n = 1;
	  } else {
	    n = toInteger(n);
	  }
	  return baseRepeat(toString(string), n);
	}
	
	module.exports = repeat;


/***/ }),
/* 2110 */
[2916, 2111, 2112, 2115, 2092],
/* 2111 */
25,
/* 2112 */
[2917, 2113, 2114],
/* 2113 */
[2903, 2066, 2092],
/* 2114 */
38,
/* 2115 */
39,
/* 2116 */
/***/ (function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(2058);
	
	/**
	 * Replaces matches for `pattern` in `string` with `replacement`.
	 *
	 * **Note:** This method is based on
	 * [`String#replace`](https://mdn.io/String/replace).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to modify.
	 * @param {RegExp|string} pattern The pattern to replace.
	 * @param {Function|string} replacement The match replacement.
	 * @returns {string} Returns the modified string.
	 * @example
	 *
	 * _.replace('Hi Fred', 'Fred', 'Barney');
	 * // => 'Hi Barney'
	 */
	function replace() {
	  var args = arguments,
	      string = toString(args[0]);
	
	  return args.length < 3 ? string : string.replace(args[1], args[2]);
	}
	
	module.exports = replace;


/***/ }),
/* 2117 */
/***/ (function(module, exports, __webpack_require__) {

	var createCompounder = __webpack_require__(2078);
	
	/**
	 * Converts `string` to
	 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the snake cased string.
	 * @example
	 *
	 * _.snakeCase('Foo Bar');
	 * // => 'foo_bar'
	 *
	 * _.snakeCase('fooBar');
	 * // => 'foo_bar'
	 *
	 * _.snakeCase('--FOO-BAR--');
	 * // => 'foo_bar'
	 */
	var snakeCase = createCompounder(function(result, word, index) {
	  return result + (index ? '_' : '') + word.toLowerCase();
	});
	
	module.exports = snakeCase;


/***/ }),
/* 2118 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(2059),
	    castSlice = __webpack_require__(2072),
	    hasUnicode = __webpack_require__(2074),
	    isIterateeCall = __webpack_require__(2110),
	    isRegExp = __webpack_require__(2119),
	    stringToArray = __webpack_require__(2075),
	    toString = __webpack_require__(2058);
	
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	
	/**
	 * Splits `string` by `separator`.
	 *
	 * **Note:** This method is based on
	 * [`String#split`](https://mdn.io/String/split).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to split.
	 * @param {RegExp|string} separator The separator pattern to split by.
	 * @param {number} [limit] The length to truncate results to.
	 * @returns {Array} Returns the string segments.
	 * @example
	 *
	 * _.split('a-b-c', '-', 2);
	 * // => ['a', 'b']
	 */
	function split(string, separator, limit) {
	  if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
	    separator = limit = undefined;
	  }
	  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
	  if (!limit) {
	    return [];
	  }
	  string = toString(string);
	  if (string && (
	        typeof separator == 'string' ||
	        (separator != null && !isRegExp(separator))
	      )) {
	    separator = baseToString(separator);
	    if (!separator && hasUnicode(string)) {
	      return castSlice(stringToArray(string), 0, limit);
	    }
	  }
	  return string.split(separator, limit);
	}
	
	module.exports = split;


/***/ }),
/* 2119 */
[3114, 2120, 2121, 2122],
/* 2120 */
[3115, 2066, 2069],
/* 2121 */
53,
/* 2122 */
[2925, 2062],
/* 2123 */
/***/ (function(module, exports, __webpack_require__) {

	var createCompounder = __webpack_require__(2078),
	    upperFirst = __webpack_require__(2070);
	
	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */
	var startCase = createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + upperFirst(word);
	});
	
	module.exports = startCase;


/***/ }),
/* 2124 */
/***/ (function(module, exports, __webpack_require__) {

	var baseClamp = __webpack_require__(2088),
	    baseToString = __webpack_require__(2059),
	    toInteger = __webpack_require__(2089),
	    toString = __webpack_require__(2058);
	
	/**
	 * Checks if `string` starts with the given target string.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {string} [target] The string to search for.
	 * @param {number} [position=0] The position to search from.
	 * @returns {boolean} Returns `true` if `string` starts with `target`,
	 *  else `false`.
	 * @example
	 *
	 * _.startsWith('abc', 'a');
	 * // => true
	 *
	 * _.startsWith('abc', 'b');
	 * // => false
	 *
	 * _.startsWith('abc', 'b', 1);
	 * // => true
	 */
	function startsWith(string, target, position) {
	  string = toString(string);
	  position = position == null
	    ? 0
	    : baseClamp(toInteger(position), 0, string.length);
	
	  target = baseToString(target);
	  return string.slice(position, position + target.length) == target;
	}
	
	module.exports = startsWith;


/***/ }),
/* 2125 */
/***/ (function(module, exports, __webpack_require__) {

	var assignInWith = __webpack_require__(2126),
	    attempt = __webpack_require__(2158),
	    baseValues = __webpack_require__(2163),
	    customDefaultsAssignIn = __webpack_require__(2164),
	    escapeStringChar = __webpack_require__(2165),
	    isError = __webpack_require__(2159),
	    isIterateeCall = __webpack_require__(2110),
	    keys = __webpack_require__(2166),
	    reInterpolate = __webpack_require__(2169),
	    templateSettings = __webpack_require__(2170),
	    toString = __webpack_require__(2058);
	
	/** Used to match empty string literals in compiled template source. */
	var reEmptyStringLeading = /\b__p \+= '';/g,
	    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
	
	/**
	 * Used to match
	 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
	 */
	var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	
	/** Used to ensure capturing order of template delimiters. */
	var reNoMatch = /($^)/;
	
	/** Used to match unescaped characters in compiled string literals. */
	var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
	
	/**
	 * Creates a compiled template function that can interpolate data properties
	 * in "interpolate" delimiters, HTML-escape interpolated data properties in
	 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	 * properties may be accessed as free variables in the template. If a setting
	 * object is given, it takes precedence over `_.templateSettings` values.
	 *
	 * **Note:** In the development build `_.template` utilizes
	 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	 * for easier debugging.
	 *
	 * For more information on precompiling templates see
	 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	 *
	 * For more information on Chrome extension sandboxes see
	 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The template string.
	 * @param {Object} [options={}] The options object.
	 * @param {RegExp} [options.escape=_.templateSettings.escape]
	 *  The HTML "escape" delimiter.
	 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	 *  The "evaluate" delimiter.
	 * @param {Object} [options.imports=_.templateSettings.imports]
	 *  An object to import into the template as free variables.
	 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	 *  The "interpolate" delimiter.
	 * @param {string} [options.sourceURL='templateSources[n]']
	 *  The sourceURL of the compiled template.
	 * @param {string} [options.variable='obj']
	 *  The data object variable name.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the compiled template function.
	 * @example
	 *
	 * // Use the "interpolate" delimiter to create a compiled template.
	 * var compiled = _.template('hello <%= user %>!');
	 * compiled({ 'user': 'fred' });
	 * // => 'hello fred!'
	 *
	 * // Use the HTML "escape" delimiter to escape data property values.
	 * var compiled = _.template('<b><%- value %></b>');
	 * compiled({ 'value': '<script>' });
	 * // => '<b>&lt;script&gt;</b>'
	 *
	 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	 * compiled({ 'users': ['fred', 'barney'] });
	 * // => '<li>fred</li><li>barney</li>'
	 *
	 * // Use the internal `print` function in "evaluate" delimiters.
	 * var compiled = _.template('<% print("hello " + user); %>!');
	 * compiled({ 'user': 'barney' });
	 * // => 'hello barney!'
	 *
	 * // Use the ES template literal delimiter as an "interpolate" delimiter.
	 * // Disable support by replacing the "interpolate" delimiter.
	 * var compiled = _.template('hello ${ user }!');
	 * compiled({ 'user': 'pebbles' });
	 * // => 'hello pebbles!'
	 *
	 * // Use backslashes to treat delimiters as plain text.
	 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	 * compiled({ 'value': 'ignored' });
	 * // => '<%- value %>'
	 *
	 * // Use the `imports` option to import `jQuery` as `jq`.
	 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	 * compiled({ 'users': ['fred', 'barney'] });
	 * // => '<li>fred</li><li>barney</li>'
	 *
	 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	 * compiled(data);
	 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	 *
	 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	 * compiled.source;
	 * // => function(data) {
	 * //   var __t, __p = '';
	 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	 * //   return __p;
	 * // }
	 *
	 * // Use custom template delimiters.
	 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	 * var compiled = _.template('hello {{ user }}!');
	 * compiled({ 'user': 'mustache' });
	 * // => 'hello mustache!'
	 *
	 * // Use the `source` property to inline compiled templates for meaningful
	 * // line numbers in error messages and stack traces.
	 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
	 *   var JST = {\
	 *     "main": ' + _.template(mainText).source + '\
	 *   };\
	 * ');
	 */
	function template(string, options, guard) {
	  // Based on John Resig's `tmpl` implementation
	  // (http://ejohn.org/blog/javascript-micro-templating/)
	  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	  var settings = templateSettings.imports._.templateSettings || templateSettings;
	
	  if (guard && isIterateeCall(string, options, guard)) {
	    options = undefined;
	  }
	  string = toString(string);
	  options = assignInWith({}, options, settings, customDefaultsAssignIn);
	
	  var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
	      importsKeys = keys(imports),
	      importsValues = baseValues(imports, importsKeys);
	
	  var isEscaping,
	      isEvaluating,
	      index = 0,
	      interpolate = options.interpolate || reNoMatch,
	      source = "__p += '";
	
	  // Compile the regexp to match each delimiter.
	  var reDelimiters = RegExp(
	    (options.escape || reNoMatch).source + '|' +
	    interpolate.source + '|' +
	    (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	    (options.evaluate || reNoMatch).source + '|$'
	  , 'g');
	
	  // Use a sourceURL for easier debugging.
	  var sourceURL = 'sourceURL' in options ? '//# sourceURL=' + options.sourceURL + '\n' : '';
	
	  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	    interpolateValue || (interpolateValue = esTemplateValue);
	
	    // Escape characters that can't be included in string literals.
	    source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	
	    // Replace delimiters with snippets.
	    if (escapeValue) {
	      isEscaping = true;
	      source += "' +\n__e(" + escapeValue + ") +\n'";
	    }
	    if (evaluateValue) {
	      isEvaluating = true;
	      source += "';\n" + evaluateValue + ";\n__p += '";
	    }
	    if (interpolateValue) {
	      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	    }
	    index = offset + match.length;
	
	    // The JS engine embedded in Adobe products needs `match` returned in
	    // order to produce the correct `offset` value.
	    return match;
	  });
	
	  source += "';\n";
	
	  // If `variable` is not specified wrap a with-statement around the generated
	  // code to add the data object to the top of the scope chain.
	  var variable = options.variable;
	  if (!variable) {
	    source = 'with (obj) {\n' + source + '\n}\n';
	  }
	  // Cleanup code by stripping empty strings.
	  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	    .replace(reEmptyStringMiddle, '$1')
	    .replace(reEmptyStringTrailing, '$1;');
	
	  // Frame code as the function body.
	  source = 'function(' + (variable || 'obj') + ') {\n' +
	    (variable
	      ? ''
	      : 'obj || (obj = {});\n'
	    ) +
	    "var __t, __p = ''" +
	    (isEscaping
	       ? ', __e = _.escape'
	       : ''
	    ) +
	    (isEvaluating
	      ? ', __j = Array.prototype.join;\n' +
	        "function print() { __p += __j.call(arguments, '') }\n"
	      : ';\n'
	    ) +
	    source +
	    'return __p\n}';
	
	  var result = attempt(function() {
	    return Function(importsKeys, sourceURL + 'return ' + source)
	      .apply(undefined, importsValues);
	  });
	
	  // Provide the compiled function's source by its `toString` method or
	  // the `source` property as a convenience for inlining compiled templates.
	  result.source = source;
	  if (isError(result)) {
	    throw result;
	  }
	  return result;
	}
	
	module.exports = template;


/***/ }),
/* 2126 */
[2931, 2127, 2137, 2146],
/* 2127 */
[2910, 2128, 2129],
/* 2128 */
[2898, 2129, 2111],
/* 2129 */
[2899, 2130],
/* 2130 */
[2900, 2131],
/* 2131 */
[2901, 2132, 2136],
/* 2132 */
[2902, 2113, 2133, 2092, 2135],
/* 2133 */
[2908, 2134],
/* 2134 */
[2909, 2061],
/* 2135 */
23,
/* 2136 */
24,
/* 2137 */
[2911, 2138, 2110],
/* 2138 */
[2912, 2139, 2140, 2142],
/* 2139 */
29,
/* 2140 */
[2913, 2141],
/* 2141 */
31,
/* 2142 */
[2914, 2143, 2145],
/* 2143 */
[2915, 2144, 2130, 2139],
/* 2144 */
34,
/* 2145 */
35,
/* 2146 */
[2929, 2147, 2155, 2112],
/* 2147 */
[2919, 2148, 2149, 2064, 2151, 2115, 2153],
/* 2148 */
43,
/* 2149 */
[2920, 2150, 2069],
/* 2150 */
[2921, 2066, 2069],
/* 2151 */
[2922, 2061, 2152],
/* 2152 */
50,
/* 2153 */
[2923, 2154, 2121, 2122],
/* 2154 */
[2924, 2066, 2114, 2069],
/* 2155 */
[2930, 2092, 2156, 2157],
/* 2156 */
40,
/* 2157 */
61,
/* 2158 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(2141),
	    baseRest = __webpack_require__(2138),
	    isError = __webpack_require__(2159);
	
	/**
	 * Attempts to invoke `func`, returning either the result or the caught error
	 * object. Any additional arguments are provided to `func` when it's invoked.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Util
	 * @param {Function} func The function to attempt.
	 * @param {...*} [args] The arguments to invoke `func` with.
	 * @returns {*} Returns the `func` result or error object.
	 * @example
	 *
	 * // Avoid throwing errors for invalid selectors.
	 * var elements = _.attempt(function(selector) {
	 *   return document.querySelectorAll(selector);
	 * }, '>_>');
	 *
	 * if (_.isError(elements)) {
	 *   elements = [];
	 * }
	 */
	var attempt = baseRest(function(func, args) {
	  try {
	    return apply(func, undefined, args);
	  } catch (e) {
	    return isError(e) ? e : new Error(e);
	  }
	});
	
	module.exports = attempt;


/***/ }),
/* 2159 */
[3101, 2066, 2069, 2160],
/* 2160 */
[2991, 2066, 2161, 2069],
/* 2161 */
[2989, 2162],
/* 2162 */
57,
/* 2163 */
[3079, 2063],
/* 2164 */
[2974, 2111],
/* 2165 */
/***/ (function(module, exports) {

	/** Used to escape characters for inclusion in compiled string literals. */
	var stringEscapes = {
	  '\\': '\\',
	  "'": "'",
	  '\n': 'n',
	  '\r': 'r',
	  '\u2028': 'u2028',
	  '\u2029': 'u2029'
	};
	
	/**
	 * Used by `_.template` to escape characters for inclusion in compiled string literals.
	 *
	 * @private
	 * @param {string} chr The matched character to escape.
	 * @returns {string} Returns the escaped character.
	 */
	function escapeStringChar(chr) {
	  return '\\' + stringEscapes[chr];
	}
	
	module.exports = escapeStringChar;


/***/ }),
/* 2166 */
[2918, 2147, 2167, 2112],
/* 2167 */
[2926, 2156, 2168],
/* 2168 */
[2927, 2162],
/* 2169 */
/***/ (function(module, exports) {

	/** Used to match template delimiters. */
	var reInterpolate = /<%=([\s\S]+?)%>/g;
	
	module.exports = reInterpolate;


/***/ }),
/* 2170 */
/***/ (function(module, exports, __webpack_require__) {

	var escape = __webpack_require__(2093),
	    reEscape = __webpack_require__(2171),
	    reEvaluate = __webpack_require__(2172),
	    reInterpolate = __webpack_require__(2169);
	
	/**
	 * By default, the template delimiters used by lodash are like those in
	 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
	 * following template settings to use alternative delimiters.
	 *
	 * @static
	 * @memberOf _
	 * @type {Object}
	 */
	var templateSettings = {
	
	  /**
	   * Used to detect `data` property values to be HTML-escaped.
	   *
	   * @memberOf _.templateSettings
	   * @type {RegExp}
	   */
	  'escape': reEscape,
	
	  /**
	   * Used to detect code to be evaluated.
	   *
	   * @memberOf _.templateSettings
	   * @type {RegExp}
	   */
	  'evaluate': reEvaluate,
	
	  /**
	   * Used to detect `data` property values to inject.
	   *
	   * @memberOf _.templateSettings
	   * @type {RegExp}
	   */
	  'interpolate': reInterpolate,
	
	  /**
	   * Used to reference the data object in the template text.
	   *
	   * @memberOf _.templateSettings
	   * @type {string}
	   */
	  'variable': '',
	
	  /**
	   * Used to import variables into the compiled template.
	   *
	   * @memberOf _.templateSettings
	   * @type {Object}
	   */
	  'imports': {
	
	    /**
	     * A reference to the `lodash` function.
	     *
	     * @memberOf _.templateSettings.imports
	     * @type {Function}
	     */
	    '_': { 'escape': escape }
	  }
	};
	
	module.exports = templateSettings;


/***/ }),
/* 2171 */
/***/ (function(module, exports) {

	/** Used to match template delimiters. */
	var reEscape = /<%-([\s\S]+?)%>/g;
	
	module.exports = reEscape;


/***/ }),
/* 2172 */
/***/ (function(module, exports) {

	/** Used to match template delimiters. */
	var reEvaluate = /<%([\s\S]+?)%>/g;
	
	module.exports = reEvaluate;


/***/ }),
/* 2173 */
/***/ (function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(2058);
	
	/**
	 * Converts `string`, as a whole, to lower case just like
	 * [String#toLowerCase](https://mdn.io/toLowerCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the lower cased string.
	 * @example
	 *
	 * _.toLower('--Foo-Bar--');
	 * // => '--foo-bar--'
	 *
	 * _.toLower('fooBar');
	 * // => 'foobar'
	 *
	 * _.toLower('__FOO_BAR__');
	 * // => '__foo_bar__'
	 */
	function toLower(value) {
	  return toString(value).toLowerCase();
	}
	
	module.exports = toLower;


/***/ }),
/* 2174 */
/***/ (function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(2058);
	
	/**
	 * Converts `string`, as a whole, to upper case just like
	 * [String#toUpperCase](https://mdn.io/toUpperCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the upper cased string.
	 * @example
	 *
	 * _.toUpper('--foo-bar--');
	 * // => '--FOO-BAR--'
	 *
	 * _.toUpper('fooBar');
	 * // => 'FOOBAR'
	 *
	 * _.toUpper('__foo_bar__');
	 * // => '__FOO_BAR__'
	 */
	function toUpper(value) {
	  return toString(value).toUpperCase();
	}
	
	module.exports = toUpper;


/***/ }),
/* 2175 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(2059),
	    castSlice = __webpack_require__(2072),
	    charsEndIndex = __webpack_require__(2176),
	    charsStartIndex = __webpack_require__(2181),
	    stringToArray = __webpack_require__(2075),
	    toString = __webpack_require__(2058);
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/**
	 * Removes leading and trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trim('  abc  ');
	 * // => 'abc'
	 *
	 * _.trim('-_-abc-_-', '_-');
	 * // => 'abc'
	 *
	 * _.map(['  foo  ', '  bar  '], _.trim);
	 * // => ['foo', 'bar']
	 */
	function trim(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrim, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      chrSymbols = stringToArray(chars),
	      start = charsStartIndex(strSymbols, chrSymbols),
	      end = charsEndIndex(strSymbols, chrSymbols) + 1;
	
	  return castSlice(strSymbols, start, end).join('');
	}
	
	module.exports = trim;


/***/ }),
/* 2176 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(2177);
	
	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;
	
	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsEndIndex;


/***/ }),
/* 2177 */
[3155, 2178, 2179, 2180],
/* 2178 */
707,
/* 2179 */
723,
/* 2180 */
724,
/* 2181 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(2177);
	
	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;
	
	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsStartIndex;


/***/ }),
/* 2182 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(2059),
	    castSlice = __webpack_require__(2072),
	    charsEndIndex = __webpack_require__(2176),
	    stringToArray = __webpack_require__(2075),
	    toString = __webpack_require__(2058);
	
	/** Used to match leading and trailing whitespace. */
	var reTrimEnd = /\s+$/;
	
	/**
	 * Removes trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trimEnd('  abc  ');
	 * // => '  abc'
	 *
	 * _.trimEnd('-_-abc-_-', '_-');
	 * // => '-_-abc'
	 */
	function trimEnd(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrimEnd, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
	
	  return castSlice(strSymbols, 0, end).join('');
	}
	
	module.exports = trimEnd;


/***/ }),
/* 2183 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(2059),
	    castSlice = __webpack_require__(2072),
	    charsStartIndex = __webpack_require__(2181),
	    stringToArray = __webpack_require__(2075),
	    toString = __webpack_require__(2058);
	
	/** Used to match leading and trailing whitespace. */
	var reTrimStart = /^\s+/;
	
	/**
	 * Removes leading whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trimStart('  abc  ');
	 * // => 'abc  '
	 *
	 * _.trimStart('-_-abc-_-', '_-');
	 * // => 'abc-_-'
	 */
	function trimStart(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrimStart, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      start = charsStartIndex(strSymbols, stringToArray(chars));
	
	  return castSlice(strSymbols, start).join('');
	}
	
	module.exports = trimStart;


/***/ }),
/* 2184 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(2059),
	    castSlice = __webpack_require__(2072),
	    hasUnicode = __webpack_require__(2074),
	    isObject = __webpack_require__(2092),
	    isRegExp = __webpack_require__(2119),
	    stringSize = __webpack_require__(2102),
	    stringToArray = __webpack_require__(2075),
	    toInteger = __webpack_require__(2089),
	    toString = __webpack_require__(2058);
	
	/** Used as default options for `_.truncate`. */
	var DEFAULT_TRUNC_LENGTH = 30,
	    DEFAULT_TRUNC_OMISSION = '...';
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Truncates `string` if it's longer than the given maximum string length.
	 * The last characters of the truncated string are replaced with the omission
	 * string which defaults to "...".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to truncate.
	 * @param {Object} [options={}] The options object.
	 * @param {number} [options.length=30] The maximum string length.
	 * @param {string} [options.omission='...'] The string to indicate text is omitted.
	 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	 * @returns {string} Returns the truncated string.
	 * @example
	 *
	 * _.truncate('hi-diddly-ho there, neighborino');
	 * // => 'hi-diddly-ho there, neighbo...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'length': 24,
	 *   'separator': ' '
	 * });
	 * // => 'hi-diddly-ho there,...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'length': 24,
	 *   'separator': /,? +/
	 * });
	 * // => 'hi-diddly-ho there...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'omission': ' [...]'
	 * });
	 * // => 'hi-diddly-ho there, neig [...]'
	 */
	function truncate(string, options) {
	  var length = DEFAULT_TRUNC_LENGTH,
	      omission = DEFAULT_TRUNC_OMISSION;
	
	  if (isObject(options)) {
	    var separator = 'separator' in options ? options.separator : separator;
	    length = 'length' in options ? toInteger(options.length) : length;
	    omission = 'omission' in options ? baseToString(options.omission) : omission;
	  }
	  string = toString(string);
	
	  var strLength = string.length;
	  if (hasUnicode(string)) {
	    var strSymbols = stringToArray(string);
	    strLength = strSymbols.length;
	  }
	  if (length >= strLength) {
	    return string;
	  }
	  var end = length - stringSize(omission);
	  if (end < 1) {
	    return omission;
	  }
	  var result = strSymbols
	    ? castSlice(strSymbols, 0, end).join('')
	    : string.slice(0, end);
	
	  if (separator === undefined) {
	    return result + omission;
	  }
	  if (strSymbols) {
	    end += (result.length - end);
	  }
	  if (isRegExp(separator)) {
	    if (string.slice(end).search(separator)) {
	      var match,
	          substring = result;
	
	      if (!separator.global) {
	        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
	      }
	      separator.lastIndex = 0;
	      while ((match = separator.exec(substring))) {
	        var newEnd = match.index;
	      }
	      result = result.slice(0, newEnd === undefined ? end : newEnd);
	    }
	  } else if (string.indexOf(baseToString(separator), end) != end) {
	    var index = result.lastIndexOf(separator);
	    if (index > -1) {
	      result = result.slice(0, index);
	    }
	  }
	  return result + omission;
	}
	
	module.exports = truncate;


/***/ }),
/* 2185 */
/***/ (function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(2058),
	    unescapeHtmlChar = __webpack_require__(2186);
	
	/** Used to match HTML entities and HTML characters. */
	var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
	    reHasEscapedHtml = RegExp(reEscapedHtml.source);
	
	/**
	 * The inverse of `_.escape`; this method converts the HTML entities
	 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	 * their corresponding characters.
	 *
	 * **Note:** No other HTML entities are unescaped. To unescape additional
	 * HTML entities use a third-party library like [_he_](https://mths.be/he).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.6.0
	 * @category String
	 * @param {string} [string=''] The string to unescape.
	 * @returns {string} Returns the unescaped string.
	 * @example
	 *
	 * _.unescape('fred, barney, &amp; pebbles');
	 * // => 'fred, barney, & pebbles'
	 */
	function unescape(string) {
	  string = toString(string);
	  return (string && reHasEscapedHtml.test(string))
	    ? string.replace(reEscapedHtml, unescapeHtmlChar)
	    : string;
	}
	
	module.exports = unescape;


/***/ }),
/* 2186 */
/***/ (function(module, exports, __webpack_require__) {

	var basePropertyOf = __webpack_require__(2082);
	
	/** Used to map HTML entities to characters. */
	var htmlUnescapes = {
	  '&amp;': '&',
	  '&lt;': '<',
	  '&gt;': '>',
	  '&quot;': '"',
	  '&#39;': "'"
	};
	
	/**
	 * Used by `_.unescape` to convert HTML entities to characters.
	 *
	 * @private
	 * @param {string} chr The matched character to unescape.
	 * @returns {string} Returns the unescaped character.
	 */
	var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
	
	module.exports = unescapeHtmlChar;


/***/ }),
/* 2187 */
/***/ (function(module, exports, __webpack_require__) {

	var createCompounder = __webpack_require__(2078);
	
	/**
	 * Converts `string`, as space separated words, to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the upper cased string.
	 * @example
	 *
	 * _.upperCase('--foo-bar');
	 * // => 'FOO BAR'
	 *
	 * _.upperCase('fooBar');
	 * // => 'FOO BAR'
	 *
	 * _.upperCase('__foo_bar__');
	 * // => 'FOO BAR'
	 */
	var upperCase = createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + word.toUpperCase();
	});
	
	module.exports = upperCase;


/***/ }),
/* 2188 */
[2896, 2189, 2190, 2126, 2191, 2192, 2230, 2233, 2234, 2256, 2267, 2269, 2270, 2271, 2302, 2305, 2307, 2308, 2309, 2310, 2312, 2194, 2313, 2297, 2315, 2318, 2319, 2166, 2146, 2323, 2324, 2325, 2255, 2326, 2345, 2350, 2347, 2352, 2353, 2354, 2257, 2268, 2355, 2356, 2357, 2359, 2360, 2361],
/* 2189 */
[2897, 2128, 2127, 2137, 2112, 2156, 2166],
/* 2190 */
[2928, 2127, 2137, 2146],
/* 2191 */
[2932, 2127, 2137, 2166],
/* 2192 */
[2933, 2193, 2225],
/* 2193 */
[2934, 2194],
/* 2194 */
[2935, 2195],
/* 2195 */
[2936, 2196, 2224],
/* 2196 */
[2937, 2064, 2197, 2198, 2058],
/* 2197 */
[2938, 2064, 2065],
/* 2198 */
[2940, 2199],
/* 2199 */
[2941, 2200],
/* 2200 */
[2942, 2201],
/* 2201 */
[2943, 2202, 2218, 2221, 2222, 2223],
/* 2202 */
[2944, 2203, 2210, 2217],
/* 2203 */
[2945, 2204, 2206, 2207, 2208, 2209],
/* 2204 */
[2946, 2205],
/* 2205 */
[2947, 2131],
/* 2206 */
79,
/* 2207 */
[2948, 2205],
/* 2208 */
[2949, 2205],
/* 2209 */
[2950, 2205],
/* 2210 */
[2951, 2211, 2212, 2214, 2215, 2216],
/* 2211 */
84,
/* 2212 */
[2952, 2213],
/* 2213 */
[2953, 2111],
/* 2214 */
[2954, 2213],
/* 2215 */
[2955, 2213],
/* 2216 */
[2956, 2213],
/* 2217 */
[2957, 2131, 2061],
/* 2218 */
[2958, 2219],
/* 2219 */
[2959, 2220],
/* 2220 */
93,
/* 2221 */
[2960, 2219],
/* 2222 */
[2961, 2219],
/* 2223 */
[2962, 2219],
/* 2224 */
[2965, 2065],
/* 2225 */
[2966, 2226, 2140, 2142],
/* 2226 */
[2967, 2227],
/* 2227 */
[2968, 2228, 2229],
/* 2228 */
104,
/* 2229 */
[2969, 2060, 2149, 2064],
/* 2230 */
[2970, 2231, 2232],
/* 2231 */
[2971, 2127, 2166],
/* 2232 */
[2972, 2092],
/* 2233 */
[2973, 2141, 2126, 2138, 2164],
/* 2234 */
[2975, 2141, 2138, 2235, 2255],
/* 2235 */
[2976, 2236, 2092],
/* 2236 */
[2977, 2237, 2243, 2244, 2246, 2092, 2146],
/* 2237 */
[2978, 2210, 2238, 2239, 2240, 2241, 2242],
/* 2238 */
[2979, 2210],
/* 2239 */
116,
/* 2240 */
117,
/* 2241 */
118,
/* 2242 */
[2980, 2210, 2217, 2201],
/* 2243 */
[2981, 2129, 2111],
/* 2244 */
[2982, 2245],
/* 2245 */
122,
/* 2246 */
[2983, 2243, 2247, 2248, 2251, 2252, 2149, 2064, 2253, 2151, 2113, 2092, 2160, 2153, 2254],
/* 2247 */
[2984, 2061],
/* 2248 */
[2985, 2249],
/* 2249 */
[2986, 2250],
/* 2250 */
[2987, 2061],
/* 2251 */
128,
/* 2252 */
[2988, 2232, 2161, 2156],
/* 2253 */
[2990, 2112, 2069],
/* 2254 */
[2992, 2127, 2146],
/* 2255 */
[2993, 2236, 2137],
/* 2256 */
[2994, 2257],
/* 2257 */
[2995, 2258, 2166],
/* 2258 */
[2996, 2259, 2260, 2265, 2266],
/* 2259 */
[2997, 2063],
/* 2260 */
[2998, 2261, 2217, 2262, 2263, 2264, 2066, 2135],
/* 2261 */
[2999, 2131, 2061],
/* 2262 */
[3000, 2131, 2061],
/* 2263 */
[3001, 2131, 2061],
/* 2264 */
[3002, 2131, 2061],
/* 2265 */
144,
/* 2266 */
145,
/* 2267 */
[3003, 2268],
/* 2268 */
[3004, 2258, 2146],
/* 2269 */
[3005, 2190],
/* 2270 */
[3006, 2126],
/* 2271 */
[3007, 2272, 2273, 2274],
/* 2272 */
151,
/* 2273 */
[3008, 2244, 2166],
/* 2274 */
[3009, 2275, 2296, 2139, 2064, 2300],
/* 2275 */
[3010, 2276, 2293, 2295],
/* 2276 */
[3011, 2237, 2277],
/* 2277 */
[3012, 2278, 2069],
/* 2278 */
[3013, 2237, 2279, 2285, 2287, 2260, 2064, 2151, 2153],
/* 2279 */
[3014, 2280, 2283, 2284],
/* 2280 */
[3015, 2201, 2281, 2282],
/* 2281 */
160,
/* 2282 */
161,
/* 2283 */
162,
/* 2284 */
163,
/* 2285 */
[3016, 2060, 2250, 2111, 2279, 2265, 2286],
/* 2286 */
165,
/* 2287 */
[3017, 2288],
/* 2288 */
[3018, 2289, 2290, 2166],
/* 2289 */
[3019, 2228, 2064],
/* 2290 */
[3020, 2291, 2292],
/* 2291 */
170,
/* 2292 */
171,
/* 2293 */
[3021, 2294, 2166],
/* 2294 */
[3022, 2092],
/* 2295 */
174,
/* 2296 */
[3023, 2277, 2194, 2297, 2197, 2294, 2295, 2224],
/* 2297 */
[3024, 2298, 2299],
/* 2298 */
177,
/* 2299 */
[3025, 2196, 2149, 2064, 2115, 2114, 2224],
/* 2300 */
[3026, 2104, 2301, 2197, 2224],
/* 2301 */
[3027, 2195],
/* 2302 */
[3028, 2272, 2303, 2274],
/* 2303 */
[3029, 2304, 2166],
/* 2304 */
[3030, 2245],
/* 2305 */
[3031, 2244, 2306, 2146],
/* 2306 */
[3032, 2139],
/* 2307 */
[3033, 2304, 2306, 2146],
/* 2308 */
[3034, 2273, 2306],
/* 2309 */
[3035, 2303, 2306],
/* 2310 */
[3036, 2311, 2166],
/* 2311 */
[3037, 2291, 2113],
/* 2312 */
[3038, 2311, 2146],
/* 2313 */
[3039, 2314, 2299],
/* 2314 */
194,
/* 2315 */
[3040, 2144, 2316, 2139],
/* 2316 */
[3041, 2317],
/* 2317 */
[3042, 2273],
/* 2318 */
[3043, 2274, 2316],
/* 2319 */
[3044, 2320, 2138],
/* 2320 */
[3045, 2141, 2196, 2321, 2322, 2224],
/* 2321 */
201,
/* 2322 */
[3046, 2195, 2073],
/* 2323 */
[3047, 2129, 2273, 2274],
/* 2324 */
[3048, 2129, 2273, 2274],
/* 2325 */
[3049, 2236, 2137],
/* 2326 */
[3050, 2063, 2327, 2343, 2196, 2127, 2344, 2225, 2333],
/* 2327 */
[3051, 2237, 2328, 2128, 2231, 2329, 2247, 2251, 2330, 2331, 2288, 2333, 2260, 2334, 2335, 2252, 2064, 2151, 2092, 2166],
/* 2328 */
209,
/* 2329 */
[3052, 2127, 2146],
/* 2330 */
[3053, 2127, 2290],
/* 2331 */
[3054, 2127, 2332],
/* 2332 */
[3055, 2228, 2161, 2290, 2292],
/* 2333 */
[3056, 2289, 2332, 2146],
/* 2334 */
215,
/* 2335 */
[3057, 2249, 2336, 2337, 2339, 2340, 2342, 2248],
/* 2336 */
[3058, 2249],
/* 2337 */
[3059, 2338, 2079, 2265],
/* 2338 */
219,
/* 2339 */
221,
/* 2340 */
[3060, 2341, 2079, 2286],
/* 2341 */
223,
/* 2342 */
[3061, 2060],
/* 2343 */
[3062, 2196, 2321, 2322, 2224],
/* 2344 */
[3063, 2160],
/* 2345 */
[3064, 2274, 2346, 2347],
/* 2346 */
228,
/* 2347 */
[3065, 2063, 2274, 2348, 2333],
/* 2348 */
[3066, 2195, 2349, 2196],
/* 2349 */
[3067, 2128, 2196, 2115, 2092, 2224],
/* 2350 */
[3068, 2351, 2225],
/* 2351 */
[3069, 2348, 2297],
/* 2352 */
[3070, 2196, 2113, 2224],
/* 2353 */
[3071, 2349],
/* 2354 */
[3072, 2349],
/* 2355 */
[3073, 2328, 2232, 2273, 2274, 2161, 2064, 2151, 2113, 2092, 2153],
/* 2356 */
[3074, 2343],
/* 2357 */
[3075, 2358, 2306],
/* 2358 */
[3076, 2195, 2349],
/* 2359 */
[3077, 2358, 2306],
/* 2360 */
[3078, 2163, 2166],
/* 2361 */
[3080, 2163, 2146],
/* 2362 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var is = __webpack_require__(2052).is;
	
	function linkFormatProps(group, element, entryFactory) {
	  if (is(element, 'pfdn:Link')) {
	    group.entries.push(entryFactory.textField({
	      id: 'lineWidth',
	      label: 'Line width',
	      modelProperty: 'lineWidth',
	      type: 'number'
	    }));
	    group.entries.push(entryFactory.colorPicker({
	      id: 'lineColor',
	      label: 'Line color',
	      modelProperty: 'lineColor'
	    }));
	  }
	}
	
	module.exports = linkFormatProps;

/***/ }),
/* 2363 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var is = __webpack_require__(2052).is;
	
	function labelFormatProps(group, element, entryFactory) {
	  if (is(element, 'pfdn:Node') || is(element, 'pfdn:Link') ) {
	    group.entries.push(entryFactory.textField({
	      id: 'label.fontSize',
	      label: 'Font size',
	      modelProperty: 'label.fontSize',
	      type: 'number'
	    }));
	    group.entries.push(entryFactory.colorPicker({
	      id: 'label.color',
	      label: 'Color',
	      modelProperty: 'label.color'
	    }));
	  } else if (is(element, 'pfdn:Label')){
	    group.entries.push(entryFactory.textField({
	      id: 'fontSize',
	      label: 'Font size',
	      modelProperty: 'fontSize',
	      type: 'number'
	    }));
	    group.entries.push(entryFactory.colorPicker({
	      id: 'color',
	      label: 'Color',
	      modelProperty: 'color'
	    }));
	  }
	}
	
	module.exports = labelFormatProps;

/***/ }),
/* 2364 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var is = __webpack_require__(2052).is;
	
	function gridFormatProps(group, element, entryFactory) {
	  if (is(element, 'pfdn:Settings')) {
	    group.entries.push(entryFactory.colorPicker({
	      id: 'backgroundColor',
	      label: 'Background color',
	      modelProperty: 'backgroundColor'
	    }));
	    group.entries.push(entryFactory.colorPicker({
	      id: 'grid.lineColor',
	      label: 'Line color',
	      modelProperty: 'grid.lineColor'
	    }));
	    group.entries.push(entryFactory.textField({
	      id: 'grid.size',
	      label: 'Square size',
	      modelProperty: 'grid.size',
	      type: 'number'
	    }));
	    group.entries.push(entryFactory.textField({
	      id: 'grid.lineWidth',
	      label: 'Line width',
	      modelProperty: 'grid.lineWidth',
	      type: 'number'
	    }));
	  }
	}
	
	module.exports = gridFormatProps;

/***/ }),
/* 2365 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: [ 'entryFactory' ],
	  entryFactory: [ 'type', __webpack_require__(2366) ]
	};

/***/ }),
/* 2366 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// input entities
	var textInputField = __webpack_require__(2367),
	    colorPickerField = __webpack_require__(2368),
	    selectBoxField = __webpack_require__(2376),
	    spreadsheetField = __webpack_require__(2485),
	    _get = __webpack_require__(2188).get,
	    _set = __webpack_require__(2188).set,
	    _assign = __webpack_require__(2188).assign,
	    $ = __webpack_require__(2370)
	    ;
	
	// helpers ////////////////////////////////////////
	
	function ensureNotNull(prop) {
	  if (!prop) {
	    throw new Error(prop + ' must be set.');
	  }
	
	  return prop;
	}
	
	function EntryFactory(eventBus) {
	  this._eventBus = eventBus;
	}
	
	EntryFactory.$inject = [
	  'eventBus'
	];
	
	/**
	 * sets the default parameters which are needed to create an entry
	 *
	 * @param options
	 * @returns {{id: *, description: (*|string), get: (*|Function), set: (*|Function),
	 *            validate: (*|Function), html: string}}
	 */
	EntryFactory.prototype.setDefaultParameters = function (options) {
	
	  var eventBus = this._eventBus;
	
	  // default method to fetch the current value of the input field
	  var defaultGet = function (element, formNode) {
	    var res = {},
	        prop = ensureNotNull(options.modelProperty),
	        propVal = _get(element, prop);
	
	    _set(res, prop, propVal);
	    $(formNode).find('input').val(propVal);
	
	    return res;
	  };
	
	// default method to set a new value to the input field
	  var defaultSet = function (element, values) {
	    var prop = ensureNotNull(options.modelProperty);
	
	    _set(element, prop, _get(values, prop));
	    return true;
	  };
	
	  // default validation method
	  var defaultValidate = function () {
	    return {};
	  };
	
	  var triggerUpdate = function (propertyId, element) {
	    eventBus.emit('PropertiesPanel.propertyChanged', propertyId, element);
	  };
	
	  return _assign({
	    html: '',
	    description: '',
	    get: defaultGet,
	    set: defaultSet,
	    validate: defaultValidate,
	  },
	  options, {
	    triggerUpdate: triggerUpdate
	  });
	};
	
	
	/**
	 * Generates an text input entry object for a property panel.
	 * options are:
	 * - id: id of the entry - String
	 *
	 * - description: description of the property - String
	 *
	 * - label: label for the input field - String
	 *
	 * - set: setter method - Function
	 *
	 * - get: getter method - Function
	 *
	 * - validate: validation method - Function
	 *
	 * - modelProperty: name of the model property - String
	 *
	 * @param options
	 * @returns the propertyPanel entry resource object
	 */
	
	EntryFactory.prototype.textField = function (options) {
	  return textInputField(this.setDefaultParameters(options));
	};
	
	EntryFactory.prototype.selectBox = function (options) {
	  return selectBoxField(this.setDefaultParameters(options));
	};
	
	EntryFactory.prototype.colorPicker = function (options) {
	  return colorPickerField(this.setDefaultParameters(options));
	};
	
	EntryFactory.prototype.spreadsheet = function (options) {
	  return spreadsheetField(this.setDefaultParameters(options));
	};
	
	module.exports = EntryFactory;

/***/ }),
/* 2367 */
/***/ (function(module, exports) {

	'use strict';
	
	function TextInputEntryFactory(resource){
	  var label = resource.label || resource.id,
	      type = resource.type || 'text';
	
	  resource.html =
	    '<div class="pfdjs-pp-field-wrapper" >' +
	    '<label for="pfdjs-' + resource.id + '" >'+ label +'</label>' +
	    '<input id="pfdjs-' + resource.id + '" type="' + type + '" name="' + resource.modelProperty+'" />' +
	    '</div>';
	
	  return resource;
	}
	
	module.exports = TextInputEntryFactory;

/***/ }),
/* 2368 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2369);
	var $ = __webpack_require__(2370),
	    _get = __webpack_require__(2188).get,
	    _set = __webpack_require__(2188).set;
	__webpack_require__(2371);
	__webpack_require__(2372);
	
	function ColorPickerEntryFactory(resource){
	  var label = resource.label || resource.id;
	
	  resource.html =
	    '<div class="pfdjs-pp-field-wrapper" >' +
	    '<label for="pfdjs-' + resource.id + '" >'+ label +'</label>' +
	    '<input id="pfdjs-' + resource.id + '" type="text" class="hidden" name="' + resource.modelProperty+'" />' +
	    '</div>';
	
	  resource.get = function(element, formNode){
	    var formControl = $(formNode).find('input');
	    formControl.spectrum({
	      color: _get(element, resource.modelProperty),
	      showButtons: false,
	      clickoutFiresChange: true,
	      change: function(color){
	        var props = {};
	        _set(props, resource.modelProperty, color.toHexString());
	        resource.set(element, props);
	        resource.triggerUpdate(resource.modelProperty, element);
	      }
	    });
	  };
	
	  return resource;
	}
	
	module.exports = ColorPickerEntryFactory;

/***/ }),
/* 2369 */
/***/ (function(module, exports) {

	module.exports = null


/***/ }),
/* 2370 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.12.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:17Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var deletedIds = [];
	
	var document = window.document;
	
	var slice = deletedIds.slice;
	
	var concat = deletedIds.concat;
	
	var push = deletedIds.push;
	
	var indexOf = deletedIds.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "1.12.4",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray || function( obj ) {
			return jQuery.type( obj ) === "array";
		},
	
		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			try {
	
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
					return false;
				}
			} catch ( e ) {
	
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}
	
			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( !support.ownFirst ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
	
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
				} )( data );
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1, IE<9
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			var len;
	
			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}
	
				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
	
				for ( ; i < len; i++ ) {
	
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}
	
			return -1;
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}
	
			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[ j ] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: function() {
			return +( new Date() );
		},
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt( 0 ) === "<" &&
					selector.charAt( selector.length - 1 ) === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
	
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[ 2 ] ) {
								return rootjQuery.find( selector );
							}
	
							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof root.ready !== "undefined" ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;
	
			return this.filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[ 0 ], jQuery( elem ) );
			}
	
			// Locate the position of the desired element
			return jQuery.inArray(
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem, this );
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );
	
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.uniqueSort( ret );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}
	
			return this.pushStack( ret );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = true;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
	
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed );
			window.removeEventListener( "load", completed );
	
		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
	
		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener ||
			window.event.type === "load" ||
			document.readyState === "complete" ) {
	
			detach();
			jQuery.ready();
		}
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE6-10
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
	
			// If IE event model is used
			} else {
	
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );
	
				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );
	
				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;
	
				try {
					top = window.frameElement == null && document.documentElement;
				} catch ( e ) {}
	
				if ( top && top.doScroll ) {
					( function doScrollCheck() {
						if ( !jQuery.isReady ) {
	
							try {
	
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll( "left" );
							} catch ( e ) {
								return window.setTimeout( doScrollCheck, 50 );
							}
	
							// detach all dom ready events
							detach();
	
							// and execute any waiting functions
							jQuery.ready();
						}
					} )();
				}
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownFirst = i === "0";
	
	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;
	
	// Execute ASAP in case we need to set body.style.zoom
	jQuery( function() {
	
		// Minified: var a,b,c,d
		var val, div, body, container;
	
		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
	
			// Return for frameset docs that don't have a body
			return;
		}
	
		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );
	
		if ( typeof div.style.zoom !== "undefined" ) {
	
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
	
			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {
	
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}
	
		body.removeChild( container );
	} );
	
	
	( function() {
		var div = document.createElement( "div" );
	
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	var acceptData = function( elem ) {
		var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
			nodeType = +elem.nodeType || 1;
	
		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :
	
			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
	};
	
	
	
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
	
			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
	
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );
	
			} else {
				data = undefined;
			}
		}
	
		return data;
	}
	
	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {
	
			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}
	
		return true;
	}
	
	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !acceptData( elem ) ) {
			return;
		}
	
		var ret, thisCache,
			internalKey = jQuery.expando,
	
			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,
	
			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,
	
			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;
	
		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
			data === undefined && typeof name === "string" ) {
			return;
		}
	
		if ( !id ) {
	
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}
	
		if ( !cache[ id ] ) {
	
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}
	
		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}
	
		thisCache = cache[ id ];
	
		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}
	
			thisCache = thisCache.data;
		}
	
		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}
	
		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {
	
			// First Try to find as-is property data
			ret = thisCache[ name ];
	
			// Test for null|undefined property data
			if ( ret == null ) {
	
				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}
	
		return ret;
	}
	
	function internalRemoveData( elem, name, pvt ) {
		if ( !acceptData( elem ) ) {
			return;
		}
	
		var thisCache, i,
			isNode = elem.nodeType,
	
			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;
	
		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}
	
		if ( name ) {
	
			thisCache = pvt ? cache[ id ] : cache[ id ].data;
	
			if ( thisCache ) {
	
				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {
	
					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {
	
						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				} else {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}
	
				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[ i ] ];
				}
	
				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
					return;
				}
			}
		}
	
		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;
	
			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}
	
		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );
	
		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];
	
		// When all else fails, undefined
		} else {
			cache[ id ] = undefined;
		}
	}
	
	jQuery.extend( {
		cache: {},
	
		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,
	
			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
	
		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},
	
		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},
	
		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},
	
		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );
	
					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					jQuery.data( this, key );
				} );
			}
	
			return arguments.length > 1 ?
	
				// Sets one value
				this.each( function() {
					jQuery.data( this, key, value );
				} ) :
	
				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},
	
		removeData: function( key ) {
			return this.each( function() {
				jQuery.removeData( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// not intended for public consumption - generates a queueHooks object,
		// or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	
	
	( function() {
		var shrinkWrapBlocksVal;
	
		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}
	
			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;
	
			// Minified: var b,c,d
			var div, body, container;
	
			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {
	
				// Test fired too early or in an unsupported environment, exit.
				return;
			}
	
			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );
	
			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== "undefined" ) {
	
				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =
	
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}
	
			body.removeChild( container );
	
			return shrinkWrapBlocksVal;
		};
	
	} )();
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
	
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn(
						elems[ i ],
						key,
						raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	var rleadingWhitespace = ( /^\s+/ );
	
	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
			"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
			"mark|meter|nav|output|picture|progress|section|summary|template|time|video";
	
	
	
	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();
	
		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}
	
	
	( function() {
		var div = document.createElement( "div" ),
			fragment = document.createDocumentFragment(),
			input = document.createElement( "input" );
	
		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;
	
		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;
	
		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;
	
		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";
	
		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;
	
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	
		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );
	
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input = document.createElement( "input" );
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<9
		// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
		support.noCloneEvent = !!div.addEventListener;
	
		// Support: IE<9
		// Since attributes and properties are the same in IE,
		// cleanData must set properties to undefined rather than use removeAttribute
		div[ jQuery.expando ] = 1;
		support.attributes = !div.getAttribute( jQuery.expando );
	} )();
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
	
		// Support: IE8
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
	};
	
	// Support: IE8-IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
					undefined;
	
		if ( !found ) {
			for ( found = [], elems = context.childNodes || context;
				( elem = elems[ i ] ) != null;
				i++
			) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			jQuery._data(
				elem,
				"globalEval",
				!refElements || jQuery._data( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/,
		rtbody = /<tbody/i;
	
	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,
	
			// Ensure a safe fragment
			safe = createSafeFragment( context ),
	
			nodes = [],
			i = 0;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
	
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
					}
	
					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {
	
						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :
	
							// String was a bare <thead> or <tfoot>
							wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;
	
						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
								!tbody.childNodes.length ) {
	
								elem.removeChild( tbody );
							}
						}
					}
	
					jQuery.merge( nodes, tmp.childNodes );
	
					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";
	
					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}
	
					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}
	
		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}
	
		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
	
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		tmp = null;
	
		return safe;
	}
	
	
	( function() {
		var i, eventName,
			div = document.createElement( "div" );
	
		// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
		for ( i in { submit: true, change: true, focusin: true } ) {
			eventName = "on" + i;
	
			if ( !( support[ i ] = eventName in window ) ) {
	
				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i ] = div.attributes[ eventName ].expando === false;
			}
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	
	
	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" &&
						( !e || jQuery.event.triggered !== e.type ) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
	
				// Add elem as a property of the handle fn to prevent a memory leak
				// with IE non-native events
				eventHandle.elem = elem;
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
	
						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
	
				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
					jQuery._data( cur, "handle" );
	
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if (
					( !special._default ||
					 special._default.apply( eventPath.pop(), data ) === false
					) && acceptData( elem )
				) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
	
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}
	
			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
				"pageX pageY screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ?
						original.toElement :
						fromElement;
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {
	
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
	
					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				}
			);
	
			jQuery.event.trigger( e, null, elem );
	
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
	
			// This "if" is needed for plain objects
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;
	
			if ( elem.detachEvent ) {
	
				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if ( typeof elem[ name ] === "undefined" ) {
					elem[ name ] = null;
				}
	
				elem.detachEvent( name, handle );
			}
		};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}
	
			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();
	
			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( !e || this.isSimulated ) {
				return;
			}
	
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}
	
			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	// IE submit delegation
	if ( !support.submit ) {
	
		jQuery.event.special.submit = {
			setup: function() {
	
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
	
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?
	
							// Support: IE <=8
							// We use jQuery.prop instead of elem.form
							// to allow fixing the IE8 delegated submit issue (gh-2332)
							// by 3rd party polyfills/workarounds.
							jQuery.prop( elem, "form" ) :
							undefined;
	
					if ( form && !jQuery._data( form, "submit" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submitBubble = true;
						} );
						jQuery._data( form, "submit", true );
					}
				} );
	
				// return undefined since we don't need an event listener
			},
	
			postDispatch: function( event ) {
	
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submitBubble ) {
					delete event._submitBubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event );
					}
				}
			},
	
			teardown: function() {
	
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}
	
	// IE change delegation and checkbox/radio fix
	if ( !support.change ) {
	
		jQuery.event.special.change = {
	
			setup: function() {
	
				if ( rformElems.test( this.nodeName ) ) {
	
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._justChanged = true;
							}
						} );
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._justChanged && !event.isTrigger ) {
								this._justChanged = false;
							}
	
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event );
						} );
					}
					return false;
				}
	
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;
	
					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event );
							}
						} );
						jQuery._data( elem, "change", true );
					}
				} );
			},
	
			handle: function( event ) {
				var elem = event.target;
	
				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger ||
					( elem.type !== "radio" && elem.type !== "checkbox" ) ) {
	
					return event.handleObj.handler.apply( this, arguments );
				}
			},
	
			teardown: function() {
				jQuery.event.remove( this, "._change" );
	
				return !rformElems.test( this.nodeName );
			}
		};
	}
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		} );
	}
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		},
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );
	
	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}
	
		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;
	
		if ( events ) {
			delete curData.handle;
			curData.events = {};
	
			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	
		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}
	
	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;
	
		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		nodeName = dest.nodeName.toLowerCase();
	
		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );
	
			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}
	
			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}
	
		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );
	
		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}
	
			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
				dest.innerHTML = src.innerHTML;
			}
	
		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
	
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set
	
			dest.defaultChecked = dest.checked = src.checked;
	
			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}
	
		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;
	
		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval(
									( node.text || node.textContent || node.innerHTML || "" )
										.replace( rcleanScript, "" )
								);
							}
						}
					}
				}
	
				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			elems = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = elems[ i ] ) != null; i++ ) {
	
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
				!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
	
				clone = elem.cloneNode( true );
	
			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}
	
			if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
					( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				// Fix all IE cloning issues
				for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {
	
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[ i ] ) {
						fixCloneNodeIssues( node, destElements[ i ] );
					}
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
						cloneCopyEvent( node, destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			destElements = srcElements = node = null;
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems, /* internal */ forceAcceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				attributes = support.attributes,
				special = jQuery.event.special;
	
			for ( ; ( elem = elems[ i ] ) != null; i++ ) {
				if ( forceAcceptData || acceptData( elem ) ) {
	
					id = elem[ internalKey ];
					data = id && cache[ id ];
	
					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {
	
							delete cache[ id ];
	
							// Support: IE<9
							// IE does not allow us to delete expando properties from nodes
							// IE creates expando attributes along with the property
							// IE does not have a removeAttribute function on Document nodes
							if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
								elem.removeAttribute( internalKey );
	
							// Webkit & Blink performance suffers when deleting properties
							// from DOM nodes, so set to undefined instead
							// https://code.google.com/p/chromium/issues/detail?id=378607
							} else {
								elem[ internalKey ] = undefined;
							}
	
							deletedIds.push( id );
						}
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append(
						( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
					);
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
	
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}
	
				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}
	
				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
	
							// Remove element nodes and prevent memory leaks
							elem = this[ i ] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	
	var iframe,
		elemdisplay = {
	
			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			display = jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var documentElement = document.documentElement;
	
	
	
	( function() {
		var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		div.style.cssText = "float:left;opacity:.5";
	
		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = div.style.opacity === "0.5";
	
		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!div.style.cssFloat;
	
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		div.innerHTML = "";
		container.appendChild( div );
	
		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
			div.style.WebkitBoxSizing === "";
	
		jQuery.extend( support, {
			reliableHiddenOffsets: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},
	
			boxSizingReliable: function() {
	
				// We're checking for pixelPositionVal here instead of boxSizingReliableVal
				// since that compresses better and they're computed together anyway.
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
	
			pixelMarginRight: function() {
	
				// Support: Android 4.0-4.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
	
			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},
	
			reliableMarginRight: function() {
	
				// Support: Android 2.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			},
	
			reliableMarginLeft: function() {
	
				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			}
		} );
	
		function computeStyleTests() {
			var contents, divStyle,
				documentElement = document.documentElement;
	
			// Setup
			documentElement.appendChild( container );
	
			div.style.cssText =
	
				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
	
			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
			pixelMarginRightVal = reliableMarginRightVal = true;
	
			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				divStyle = window.getComputedStyle( div );
				pixelPositionVal = ( divStyle || {} ).top !== "1%";
				reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
				boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";
	
				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";
	
				// Support: Android 2.3 only
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =
	
					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";
	
				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );
	
				div.removeChild( contents );
			}
	
			// Support: IE6-8
			// First check that getClientRects works as expected
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.style.display = "none";
			reliableHiddenOffsetsVal = div.getClientRects().length === 0;
			if ( reliableHiddenOffsetsVal ) {
				div.style.display = "";
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				div.childNodes[ 0 ].style.borderCollapse = "separate";
				contents = div.getElementsByTagName( "td" );
				contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				if ( reliableHiddenOffsetsVal ) {
					contents[ 0 ].style.display = "";
					contents[ 1 ].style.display = "none";
					reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				}
			}
	
			// Teardown
			documentElement.removeChild( container );
		}
	
	} )();
	
	
	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;
	
	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
	
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
	
			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
			// Support: Opera 12.1x only
			// Fall back to style even without computed
			// computed is undefined for elems on document fragments
			if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			if ( computed ) {
	
				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value"
				// instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values,
				// but width seems to be reliably pixels
				// this is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
				if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;
	
					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;
	
					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};
	
		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;
	
			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}
	
			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	
			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are
			// proportional to the parent element instead
			// and we can't measure the parent instead because it
			// might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {
	
				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;
	
				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";
	
				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}
	
	
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/i,
	
		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	
	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// check for vendor prefixed names
		var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
	
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] =
						jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display && display !== "none" || !hidden ) {
					jQuery._data(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
	
			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight
				// (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch ( e ) {}
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing &&
							jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	} );
	
	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
	
				// IE uses filters for opacity
				return ropacity.test( ( computed && elem.currentStyle ?
					elem.currentStyle.filter :
					elem.style.filter ) || "" ) ?
						( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
						computed ? "1" : "";
			},
	
			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";
	
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;
	
				// if setting opacity to 1, and no other filters exist -
				// attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {
	
					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );
	
					// if there is no filter style applied in a css rule
					// or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}
	
				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}
	
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return (
					parseFloat( curCSS( elem, "marginLeft" ) ) ||
	
					// Support: IE<=11+
					// Running getBoundingClientRect on a disconnected node in IE throws an error
					// Support: IE8 only
					// getClientRects() errors on disconnected elems
					( jQuery.contains( elem.ownerDocument, elem ) ?
						elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) :
						0
					)
				) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes
	
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;
	
		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// we're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );
	
		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
	
				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always( function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				} );
			}
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}
	
			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// enable finishing flag on private data
				data.finish = true;
	
				// empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var a,
			input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];
	
		// Support: Windows Web Apps (WWA)
		// `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "checkbox" );
		div.appendChild( input );
	
		a = div.getElementsByTagName( "a" )[ 0 ];
	
		// First batch of tests.
		a.style.cssText = "top:1px";
	
		// Test setAttribute on camelCase class.
		// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";
	
		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute( "style" ) );
	
		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute( "href" ) === "/a";
	
		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;
	
		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;
	
		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement( "form" ).enctype;
	
		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";
	
		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	} )();
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if (
						hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled :
									option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {
	
							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;
	
							} catch ( _ ) {
	
								// Will be executed only in IE6
								option.scrollHeight;
							}
	
						} else {
							option.selected = false;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
	
					return options;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
	
						// Setting the type on a radio button after the value resets the value in IE8-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;
	
						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}
	
					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}
	
					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
	
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );
	
			} else {
	
				// Support: IE<9
				// Use defaultChecked and defaultSelected for oldIE
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			attrHandle[ name ] = function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {
	
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			};
		} else {
			attrHandle[ name ] = function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
		}
	} );
	
	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
	
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
	
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}
	
	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {
	
		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {
	
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						( ret = elem.ownerDocument.createAttribute( name ) )
					);
				}
	
				ret.value = value += "";
	
				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};
	
		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
						ret.value :
						null;
				}
			};
	
		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};
	
		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};
	
		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each( [ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		} );
	}
	
	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
	
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case sensitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each( function() {
	
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch ( e ) {}
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {
	
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each( [ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		} );
	}
	
	// Support: Safari, IE9+
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
	
				if ( parent ) {
					parent.selectedIndex;
	
					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return jQuery.attr( elem, "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// store className if set
						jQuery._data( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					jQuery.attr( this, "class",
						className || value === false ?
						"" :
						jQuery._data( this, "__className__" ) || ""
					);
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	
	jQuery.parseJSON = function( data ) {
	
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
	
			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}
	
		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );
	
		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {
	
			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}
	
			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}
	
			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;
	
			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;
	
			// Remove this token
			return "";
		} ) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new window.DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch ( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
	
		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Document location
		ajaxLocation = location.href,
	
		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var
	
				// Cross-domain detection vars
				parts,
	
				// Loop variable
				i,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers as string
				responseHeadersString,
	
				// timeout handle
				timeoutTimer,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				transport,
	
				// Response headers
				responseHeaders,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
	
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" )
				.replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
	
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );
	
	
	function getDisplay( elem ) {
		return elem.style && elem.style.display || jQuery.css( elem, "display" );
	}
	
	function filterHidden( elem ) {
	
		// Disconnected elements are considered hidden
		if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
			return true;
		}
		while ( elem && elem.nodeType === 1 ) {
			if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
				return true;
			}
			elem = elem.parentNode;
		}
		return false;
	}
	
	jQuery.expr.filters.hidden = function( elem ) {
	
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return support.reliableHiddenOffsets() ?
			( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
				!elem.getClientRects().length ) :
				filterHidden( elem );
	};
	
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
	
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	
		// Support: IE6-IE8
		function() {
	
			// XHR cannot access local files, always use ActiveX for that case
			if ( this.isLocal ) {
				return createActiveXHR();
			}
	
			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if ( document.documentMode > 8 ) {
				return createStandardXHR();
			}
	
			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
				createStandardXHR() || createActiveXHR();
		} :
	
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		} );
	}
	
	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;
	
	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {
	
		jQuery.ajaxTransport( function( options ) {
	
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {
	
				var callback;
	
				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;
	
						// Open the socket
						xhr.open(
							options.type,
							options.url,
							options.async,
							options.username,
							options.password
						);
	
						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}
	
						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}
	
						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
							headers[ "X-Requested-With" ] = "XMLHttpRequest";
						}
	
						// Set headers
						for ( i in headers ) {
	
							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}
	
						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );
	
						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;
	
							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
	
								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;
	
								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
	
									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}
	
									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch ( e ) {
	
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}
	
									// Filter status for non standard behaviors
	
									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;
	
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
	
							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};
	
						// Do send the request
						// `xhr.send` may raise an exception, but it will be
						// handled in jQuery.ajax (so no try/catch here)
						if ( !options.async ) {
	
							// If we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
	
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							window.setTimeout( callback );
						} else {
	
							// Register the callback, but delay it in case `xhr.send` throws
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},
	
					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		} );
	}
	
	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	}
	
	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch ( e ) {}
	}
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
	
			var script,
				head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;
	
			return {
	
				send: function( _, callback ) {
	
					script = document.createElement( "script" );
	
					script.async = true;
	
					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}
	
					script.src = s.url;
	
					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {
	
						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {
	
							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;
	
							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}
	
							// Dereference the script
							script = null;
	
							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};
	
					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},
	
				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;
	
			// need to be able to calculate position if either top or left
			// is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== "undefined" ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? ( prop in win ) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	} );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {
	
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only,
						// but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ }),
/* 2371 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Spectrum Colorpicker v1.8.0
	// https://github.com/bgrins/spectrum
	// Author: Brian Grinstead
	// License: MIT
	
	(function (factory) {
	    "use strict";
	
	    if (true) { // AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2370)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof exports == "object" && typeof module == "object") { // CommonJS
	        module.exports = factory(require('jquery'));
	    }
	    else { // Browser
	        factory(jQuery);
	    }
	})(function($, undefined) {
	    "use strict";
	
	    var defaultOpts = {
	
	        // Callbacks
	        beforeShow: noop,
	        move: noop,
	        change: noop,
	        show: noop,
	        hide: noop,
	
	        // Options
	        color: false,
	        flat: false,
	        showInput: false,
	        allowEmpty: false,
	        showButtons: true,
	        clickoutFiresChange: true,
	        showInitial: false,
	        showPalette: false,
	        showPaletteOnly: false,
	        hideAfterPaletteSelect: false,
	        togglePaletteOnly: false,
	        showSelectionPalette: true,
	        localStorageKey: false,
	        appendTo: "body",
	        maxSelectionSize: 7,
	        cancelText: "cancel",
	        chooseText: "choose",
	        togglePaletteMoreText: "more",
	        togglePaletteLessText: "less",
	        clearText: "Clear Color Selection",
	        noColorSelectedText: "No Color Selected",
	        preferredFormat: false,
	        className: "", // Deprecated - use containerClassName and replacerClassName instead.
	        containerClassName: "",
	        replacerClassName: "",
	        showAlpha: false,
	        theme: "sp-light",
	        palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
	        selectionPalette: [],
	        disabled: false,
	        offset: null
	    },
	    spectrums = [],
	    IE = !!/msie/i.exec( window.navigator.userAgent ),
	    rgbaSupport = (function() {
	        function contains( str, substr ) {
	            return !!~('' + str).indexOf(substr);
	        }
	
	        var elem = document.createElement('div');
	        var style = elem.style;
	        style.cssText = 'background-color:rgba(0,0,0,.5)';
	        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
	    })(),
	    replaceInput = [
	        "<div class='sp-replacer'>",
	            "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
	            "<div class='sp-dd'>&#9660;</div>",
	        "</div>"
	    ].join(''),
	    markup = (function () {
	
	        // IE does not support gradients with multiple stops, so we need to simulate
	        //  that for the rainbow slider with 8 divs that each have a single gradient
	        var gradientFix = "";
	        if (IE) {
	            for (var i = 1; i <= 6; i++) {
	                gradientFix += "<div class='sp-" + i + "'></div>";
	            }
	        }
	
	        return [
	            "<div class='sp-container sp-hidden'>",
	                "<div class='sp-palette-container'>",
	                    "<div class='sp-palette sp-thumb sp-cf'></div>",
	                    "<div class='sp-palette-button-container sp-cf'>",
	                        "<button type='button' class='sp-palette-toggle'></button>",
	                    "</div>",
	                "</div>",
	                "<div class='sp-picker-container'>",
	                    "<div class='sp-top sp-cf'>",
	                        "<div class='sp-fill'></div>",
	                        "<div class='sp-top-inner'>",
	                            "<div class='sp-color'>",
	                                "<div class='sp-sat'>",
	                                    "<div class='sp-val'>",
	                                        "<div class='sp-dragger'></div>",
	                                    "</div>",
	                                "</div>",
	                            "</div>",
	                            "<div class='sp-clear sp-clear-display'>",
	                            "</div>",
	                            "<div class='sp-hue'>",
	                                "<div class='sp-slider'></div>",
	                                gradientFix,
	                            "</div>",
	                        "</div>",
	                        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
	                    "</div>",
	                    "<div class='sp-input-container sp-cf'>",
	                        "<input class='sp-input' type='text' spellcheck='false'  />",
	                    "</div>",
	                    "<div class='sp-initial sp-thumb sp-cf'></div>",
	                    "<div class='sp-button-container sp-cf'>",
	                        "<a class='sp-cancel' href='#'></a>",
	                        "<button type='button' class='sp-choose'></button>",
	                    "</div>",
	                "</div>",
	            "</div>"
	        ].join("");
	    })();
	
	    function paletteTemplate (p, color, className, opts) {
	        var html = [];
	        for (var i = 0; i < p.length; i++) {
	            var current = p[i];
	            if(current) {
	                var tiny = tinycolor(current);
	                var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
	                c += (tinycolor.equals(color, current)) ? " sp-thumb-active" : "";
	                var formattedString = tiny.toString(opts.preferredFormat || "rgb");
	                var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
	                html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
	            } else {
	                var cls = 'sp-clear-display';
	                html.push($('<div />')
	                    .append($('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>')
	                        .attr('title', opts.noColorSelectedText)
	                    )
	                    .html()
	                );
	            }
	        }
	        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
	    }
	
	    function hideAll() {
	        for (var i = 0; i < spectrums.length; i++) {
	            if (spectrums[i]) {
	                spectrums[i].hide();
	            }
	        }
	    }
	
	    function instanceOptions(o, callbackContext) {
	        var opts = $.extend({}, defaultOpts, o);
	        opts.callbacks = {
	            'move': bind(opts.move, callbackContext),
	            'change': bind(opts.change, callbackContext),
	            'show': bind(opts.show, callbackContext),
	            'hide': bind(opts.hide, callbackContext),
	            'beforeShow': bind(opts.beforeShow, callbackContext)
	        };
	
	        return opts;
	    }
	
	    function spectrum(element, o) {
	
	        var opts = instanceOptions(o, element),
	            flat = opts.flat,
	            showSelectionPalette = opts.showSelectionPalette,
	            localStorageKey = opts.localStorageKey,
	            theme = opts.theme,
	            callbacks = opts.callbacks,
	            resize = throttle(reflow, 10),
	            visible = false,
	            isDragging = false,
	            dragWidth = 0,
	            dragHeight = 0,
	            dragHelperHeight = 0,
	            slideHeight = 0,
	            slideWidth = 0,
	            alphaWidth = 0,
	            alphaSlideHelperWidth = 0,
	            slideHelperHeight = 0,
	            currentHue = 0,
	            currentSaturation = 0,
	            currentValue = 0,
	            currentAlpha = 1,
	            palette = [],
	            paletteArray = [],
	            paletteLookup = {},
	            selectionPalette = opts.selectionPalette.slice(0),
	            maxSelectionSize = opts.maxSelectionSize,
	            draggingClass = "sp-dragging",
	            shiftMovementDirection = null;
	
	        var doc = element.ownerDocument,
	            body = doc.body,
	            boundElement = $(element),
	            disabled = false,
	            container = $(markup, doc).addClass(theme),
	            pickerContainer = container.find(".sp-picker-container"),
	            dragger = container.find(".sp-color"),
	            dragHelper = container.find(".sp-dragger"),
	            slider = container.find(".sp-hue"),
	            slideHelper = container.find(".sp-slider"),
	            alphaSliderInner = container.find(".sp-alpha-inner"),
	            alphaSlider = container.find(".sp-alpha"),
	            alphaSlideHelper = container.find(".sp-alpha-handle"),
	            textInput = container.find(".sp-input"),
	            paletteContainer = container.find(".sp-palette"),
	            initialColorContainer = container.find(".sp-initial"),
	            cancelButton = container.find(".sp-cancel"),
	            clearButton = container.find(".sp-clear"),
	            chooseButton = container.find(".sp-choose"),
	            toggleButton = container.find(".sp-palette-toggle"),
	            isInput = boundElement.is("input"),
	            isInputTypeColor = isInput && boundElement.attr("type") === "color" && inputTypeColorSupport(),
	            shouldReplace = isInput && !flat,
	            replacer = (shouldReplace) ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
	            offsetElement = (shouldReplace) ? replacer : boundElement,
	            previewElement = replacer.find(".sp-preview-inner"),
	            initialColor = opts.color || (isInput && boundElement.val()),
	            colorOnShow = false,
	            currentPreferredFormat = opts.preferredFormat,
	            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
	            isEmpty = !initialColor,
	            allowEmpty = opts.allowEmpty && !isInputTypeColor;
	
	        function applyOptions() {
	
	            if (opts.showPaletteOnly) {
	                opts.showPalette = true;
	            }
	
	            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
	
	            if (opts.palette) {
	                palette = opts.palette.slice(0);
	                paletteArray = $.isArray(palette[0]) ? palette : [palette];
	                paletteLookup = {};
	                for (var i = 0; i < paletteArray.length; i++) {
	                    for (var j = 0; j < paletteArray[i].length; j++) {
	                        var rgb = tinycolor(paletteArray[i][j]).toRgbString();
	                        paletteLookup[rgb] = true;
	                    }
	                }
	            }
	
	            container.toggleClass("sp-flat", flat);
	            container.toggleClass("sp-input-disabled", !opts.showInput);
	            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
	            container.toggleClass("sp-clear-enabled", allowEmpty);
	            container.toggleClass("sp-buttons-disabled", !opts.showButtons);
	            container.toggleClass("sp-palette-buttons-disabled", !opts.togglePaletteOnly);
	            container.toggleClass("sp-palette-disabled", !opts.showPalette);
	            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
	            container.toggleClass("sp-initial-disabled", !opts.showInitial);
	            container.addClass(opts.className).addClass(opts.containerClassName);
	
	            reflow();
	        }
	
	        function initialize() {
	
	            if (IE) {
	                container.find("*:not(input)").attr("unselectable", "on");
	            }
	
	            applyOptions();
	
	            if (shouldReplace) {
	                boundElement.after(replacer).hide();
	            }
	
	            if (!allowEmpty) {
	                clearButton.hide();
	            }
	
	            if (flat) {
	                boundElement.after(container).hide();
	            }
	            else {
	
	                var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);
	                if (appendTo.length !== 1) {
	                    appendTo = $("body");
	                }
	
	                appendTo.append(container);
	            }
	
	            updateSelectionPaletteFromStorage();
	
	            offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
	                if (!disabled) {
	                    toggle();
	                }
	
	                e.stopPropagation();
	
	                if (!$(e.target).is("input")) {
	                    e.preventDefault();
	                }
	            });
	
	            if(boundElement.is(":disabled") || (opts.disabled === true)) {
	                disable();
	            }
	
	            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
	            container.click(stopPropagation);
	
	            // Handle user typed input
	            textInput.change(setFromTextInput);
	            textInput.bind("paste", function () {
	                setTimeout(setFromTextInput, 1);
	            });
	            textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });
	
	            cancelButton.text(opts.cancelText);
	            cancelButton.bind("click.spectrum", function (e) {
	                e.stopPropagation();
	                e.preventDefault();
	                revert();
	                hide();
	            });
	
	            clearButton.attr("title", opts.clearText);
	            clearButton.bind("click.spectrum", function (e) {
	                e.stopPropagation();
	                e.preventDefault();
	                isEmpty = true;
	                move();
	
	                if(flat) {
	                    //for the flat style, this is a change event
	                    updateOriginalInput(true);
	                }
	            });
	
	            chooseButton.text(opts.chooseText);
	            chooseButton.bind("click.spectrum", function (e) {
	                e.stopPropagation();
	                e.preventDefault();
	
	                if (IE && textInput.is(":focus")) {
	                    textInput.trigger('change');
	                }
	
	                if (isValid()) {
	                    updateOriginalInput(true);
	                    hide();
	                }
	            });
	
	            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
	            toggleButton.bind("click.spectrum", function (e) {
	                e.stopPropagation();
	                e.preventDefault();
	
	                opts.showPaletteOnly = !opts.showPaletteOnly;
	
	                // To make sure the Picker area is drawn on the right, next to the
	                // Palette area (and not below the palette), first move the Palette
	                // to the left to make space for the picker, plus 5px extra.
	                // The 'applyOptions' function puts the whole container back into place
	                // and takes care of the button-text and the sp-palette-only CSS class.
	                if (!opts.showPaletteOnly && !flat) {
	                    container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
	                }
	                applyOptions();
	            });
	
	            draggable(alphaSlider, function (dragX, dragY, e) {
	                currentAlpha = (dragX / alphaWidth);
	                isEmpty = false;
	                if (e.shiftKey) {
	                    currentAlpha = Math.round(currentAlpha * 10) / 10;
	                }
	
	                move();
	            }, dragStart, dragStop);
	
	            draggable(slider, function (dragX, dragY) {
	                currentHue = parseFloat(dragY / slideHeight);
	                isEmpty = false;
	                if (!opts.showAlpha) {
	                    currentAlpha = 1;
	                }
	                move();
	            }, dragStart, dragStop);
	
	            draggable(dragger, function (dragX, dragY, e) {
	
	                // shift+drag should snap the movement to either the x or y axis.
	                if (!e.shiftKey) {
	                    shiftMovementDirection = null;
	                }
	                else if (!shiftMovementDirection) {
	                    var oldDragX = currentSaturation * dragWidth;
	                    var oldDragY = dragHeight - (currentValue * dragHeight);
	                    var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);
	
	                    shiftMovementDirection = furtherFromX ? "x" : "y";
	                }
	
	                var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
	                var setValue = !shiftMovementDirection || shiftMovementDirection === "y";
	
	                if (setSaturation) {
	                    currentSaturation = parseFloat(dragX / dragWidth);
	                }
	                if (setValue) {
	                    currentValue = parseFloat((dragHeight - dragY) / dragHeight);
	                }
	
	                isEmpty = false;
	                if (!opts.showAlpha) {
	                    currentAlpha = 1;
	                }
	
	                move();
	
	            }, dragStart, dragStop);
	
	            if (!!initialColor) {
	                set(initialColor);
	
	                // In case color was black - update the preview UI and set the format
	                // since the set function will not run (default color is black).
	                updateUI();
	                currentPreferredFormat = opts.preferredFormat || tinycolor(initialColor).format;
	
	                addColorToSelectionPalette(initialColor);
	            }
	            else {
	                updateUI();
	            }
	
	            if (flat) {
	                show();
	            }
	
	            function paletteElementClick(e) {
	                if (e.data && e.data.ignore) {
	                    set($(e.target).closest(".sp-thumb-el").data("color"));
	                    move();
	                }
	                else {
	                    set($(e.target).closest(".sp-thumb-el").data("color"));
	                    move();
	                    updateOriginalInput(true);
	                    if (opts.hideAfterPaletteSelect) {
	                      hide();
	                    }
	                }
	
	                return false;
	            }
	
	            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
	            paletteContainer.delegate(".sp-thumb-el", paletteEvent, paletteElementClick);
	            initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, paletteElementClick);
	        }
	
	        function updateSelectionPaletteFromStorage() {
	
	            if (localStorageKey && window.localStorage) {
	
	                // Migrate old palettes over to new format.  May want to remove this eventually.
	                try {
	                    var oldPalette = window.localStorage[localStorageKey].split(",#");
	                    if (oldPalette.length > 1) {
	                        delete window.localStorage[localStorageKey];
	                        $.each(oldPalette, function(i, c) {
	                             addColorToSelectionPalette(c);
	                        });
	                    }
	                }
	                catch(e) { }
	
	                try {
	                    selectionPalette = window.localStorage[localStorageKey].split(";");
	                }
	                catch (e) { }
	            }
	        }
	
	        function addColorToSelectionPalette(color) {
	            if (showSelectionPalette) {
	                var rgb = tinycolor(color).toRgbString();
	                if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
	                    selectionPalette.push(rgb);
	                    while(selectionPalette.length > maxSelectionSize) {
	                        selectionPalette.shift();
	                    }
	                }
	
	                if (localStorageKey && window.localStorage) {
	                    try {
	                        window.localStorage[localStorageKey] = selectionPalette.join(";");
	                    }
	                    catch(e) { }
	                }
	            }
	        }
	
	        function getUniqueSelectionPalette() {
	            var unique = [];
	            if (opts.showPalette) {
	                for (var i = 0; i < selectionPalette.length; i++) {
	                    var rgb = tinycolor(selectionPalette[i]).toRgbString();
	
	                    if (!paletteLookup[rgb]) {
	                        unique.push(selectionPalette[i]);
	                    }
	                }
	            }
	
	            return unique.reverse().slice(0, opts.maxSelectionSize);
	        }
	
	        function drawPalette() {
	
	            var currentColor = get();
	
	            var html = $.map(paletteArray, function (palette, i) {
	                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts);
	            });
	
	            updateSelectionPaletteFromStorage();
	
	            if (selectionPalette) {
	                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts));
	            }
	
	            paletteContainer.html(html.join(""));
	        }
	
	        function drawInitial() {
	            if (opts.showInitial) {
	                var initial = colorOnShow;
	                var current = get();
	                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts));
	            }
	        }
	
	        function dragStart() {
	            if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
	                reflow();
	            }
	            isDragging = true;
	            container.addClass(draggingClass);
	            shiftMovementDirection = null;
	            boundElement.trigger('dragstart.spectrum', [ get() ]);
	        }
	
	        function dragStop() {
	            isDragging = false;
	            container.removeClass(draggingClass);
	            boundElement.trigger('dragstop.spectrum', [ get() ]);
	        }
	
	        function setFromTextInput() {
	
	            var value = textInput.val();
	
	            if ((value === null || value === "") && allowEmpty) {
	                set(null);
	                updateOriginalInput(true);
	            }
	            else {
	                var tiny = tinycolor(value);
	                if (tiny.isValid()) {
	                    set(tiny);
	                    updateOriginalInput(true);
	                }
	                else {
	                    textInput.addClass("sp-validation-error");
	                }
	            }
	        }
	
	        function toggle() {
	            if (visible) {
	                hide();
	            }
	            else {
	                show();
	            }
	        }
	
	        function show() {
	            var event = $.Event('beforeShow.spectrum');
	
	            if (visible) {
	                reflow();
	                return;
	            }
	
	            boundElement.trigger(event, [ get() ]);
	
	            if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
	                return;
	            }
	
	            hideAll();
	            visible = true;
	
	            $(doc).bind("keydown.spectrum", onkeydown);
	            $(doc).bind("click.spectrum", clickout);
	            $(window).bind("resize.spectrum", resize);
	            replacer.addClass("sp-active");
	            container.removeClass("sp-hidden");
	
	            reflow();
	            updateUI();
	
	            colorOnShow = get();
	
	            drawInitial();
	            callbacks.show(colorOnShow);
	            boundElement.trigger('show.spectrum', [ colorOnShow ]);
	        }
	
	        function onkeydown(e) {
	            // Close on ESC
	            if (e.keyCode === 27) {
	                hide();
	            }
	        }
	
	        function clickout(e) {
	            // Return on right click.
	            if (e.button == 2) { return; }
	
	            // If a drag event was happening during the mouseup, don't hide
	            // on click.
	            if (isDragging) { return; }
	
	            if (clickoutFiresChange) {
	                updateOriginalInput(true);
	            }
	            else {
	                revert();
	            }
	            hide();
	        }
	
	        function hide() {
	            // Return if hiding is unnecessary
	            if (!visible || flat) { return; }
	            visible = false;
	
	            $(doc).unbind("keydown.spectrum", onkeydown);
	            $(doc).unbind("click.spectrum", clickout);
	            $(window).unbind("resize.spectrum", resize);
	
	            replacer.removeClass("sp-active");
	            container.addClass("sp-hidden");
	
	            callbacks.hide(get());
	            boundElement.trigger('hide.spectrum', [ get() ]);
	        }
	
	        function revert() {
	            set(colorOnShow, true);
	        }
	
	        function set(color, ignoreFormatChange) {
	            if (tinycolor.equals(color, get())) {
	                // Update UI just in case a validation error needs
	                // to be cleared.
	                updateUI();
	                return;
	            }
	
	            var newColor, newHsv;
	            if (!color && allowEmpty) {
	                isEmpty = true;
	            } else {
	                isEmpty = false;
	                newColor = tinycolor(color);
	                newHsv = newColor.toHsv();
	
	                currentHue = (newHsv.h % 360) / 360;
	                currentSaturation = newHsv.s;
	                currentValue = newHsv.v;
	                currentAlpha = newHsv.a;
	            }
	            updateUI();
	
	            if (newColor && newColor.isValid() && !ignoreFormatChange) {
	                currentPreferredFormat = opts.preferredFormat || newColor.getFormat();
	            }
	        }
	
	        function get(opts) {
	            opts = opts || { };
	
	            if (allowEmpty && isEmpty) {
	                return null;
	            }
	
	            return tinycolor.fromRatio({
	                h: currentHue,
	                s: currentSaturation,
	                v: currentValue,
	                a: Math.round(currentAlpha * 100) / 100
	            }, { format: opts.format || currentPreferredFormat });
	        }
	
	        function isValid() {
	            return !textInput.hasClass("sp-validation-error");
	        }
	
	        function move() {
	            updateUI();
	
	            callbacks.move(get());
	            boundElement.trigger('move.spectrum', [ get() ]);
	        }
	
	        function updateUI() {
	
	            textInput.removeClass("sp-validation-error");
	
	            updateHelperLocations();
	
	            // Update dragger background color (gradients take care of saturation and value).
	            var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
	            dragger.css("background-color", flatColor.toHexString());
	
	            // Get a format that alpha will be included in (hex and names ignore alpha)
	            var format = currentPreferredFormat;
	            if (currentAlpha < 1 && !(currentAlpha === 0 && format === "name")) {
	                if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
	                    format = "rgb";
	                }
	            }
	
	            var realColor = get({ format: format }),
	                displayColor = '';
	
	             //reset background info for preview element
	            previewElement.removeClass("sp-clear-display");
	            previewElement.css('background-color', 'transparent');
	
	            if (!realColor && allowEmpty) {
	                // Update the replaced elements background with icon indicating no color selection
	                previewElement.addClass("sp-clear-display");
	            }
	            else {
	                var realHex = realColor.toHexString(),
	                    realRgb = realColor.toRgbString();
	
	                // Update the replaced elements background color (with actual selected color)
	                if (rgbaSupport || realColor.alpha === 1) {
	                    previewElement.css("background-color", realRgb);
	                }
	                else {
	                    previewElement.css("background-color", "transparent");
	                    previewElement.css("filter", realColor.toFilter());
	                }
	
	                if (opts.showAlpha) {
	                    var rgb = realColor.toRgb();
	                    rgb.a = 0;
	                    var realAlpha = tinycolor(rgb).toRgbString();
	                    var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";
	
	                    if (IE) {
	                        alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
	                    }
	                    else {
	                        alphaSliderInner.css("background", "-webkit-" + gradient);
	                        alphaSliderInner.css("background", "-moz-" + gradient);
	                        alphaSliderInner.css("background", "-ms-" + gradient);
	                        // Use current syntax gradient on unprefixed property.
	                        alphaSliderInner.css("background",
	                            "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
	                    }
	                }
	
	                displayColor = realColor.toString(format);
	            }
	
	            // Update the text entry input as it changes happen
	            if (opts.showInput) {
	                textInput.val(displayColor);
	            }
	
	            if (opts.showPalette) {
	                drawPalette();
	            }
	
	            drawInitial();
	        }
	
	        function updateHelperLocations() {
	            var s = currentSaturation;
	            var v = currentValue;
	
	            if(allowEmpty && isEmpty) {
	                //if selected color is empty, hide the helpers
	                alphaSlideHelper.hide();
	                slideHelper.hide();
	                dragHelper.hide();
	            }
	            else {
	                //make sure helpers are visible
	                alphaSlideHelper.show();
	                slideHelper.show();
	                dragHelper.show();
	
	                // Where to show the little circle in that displays your current selected color
	                var dragX = s * dragWidth;
	                var dragY = dragHeight - (v * dragHeight);
	                dragX = Math.max(
	                    -dragHelperHeight,
	                    Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
	                );
	                dragY = Math.max(
	                    -dragHelperHeight,
	                    Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
	                );
	                dragHelper.css({
	                    "top": dragY + "px",
	                    "left": dragX + "px"
	                });
	
	                var alphaX = currentAlpha * alphaWidth;
	                alphaSlideHelper.css({
	                    "left": (alphaX - (alphaSlideHelperWidth / 2)) + "px"
	                });
	
	                // Where to show the bar that displays your current selected hue
	                var slideY = (currentHue) * slideHeight;
	                slideHelper.css({
	                    "top": (slideY - slideHelperHeight) + "px"
	                });
	            }
	        }
	
	        function updateOriginalInput(fireCallback) {
	            var color = get(),
	                displayColor = '',
	                hasChanged = !tinycolor.equals(color, colorOnShow);
	
	            if (color) {
	                displayColor = color.toString(currentPreferredFormat);
	                // Update the selection palette with the current color
	                addColorToSelectionPalette(color);
	            }
	
	            if (isInput) {
	                boundElement.val(displayColor);
	            }
	
	            if (fireCallback && hasChanged) {
	                callbacks.change(color);
	                boundElement.trigger('change', [ color ]);
	            }
	        }
	
	        function reflow() {
	            if (!visible) {
	                return; // Calculations would be useless and wouldn't be reliable anyways
	            }
	            dragWidth = dragger.width();
	            dragHeight = dragger.height();
	            dragHelperHeight = dragHelper.height();
	            slideWidth = slider.width();
	            slideHeight = slider.height();
	            slideHelperHeight = slideHelper.height();
	            alphaWidth = alphaSlider.width();
	            alphaSlideHelperWidth = alphaSlideHelper.width();
	
	            if (!flat) {
	                container.css("position", "absolute");
	                if (opts.offset) {
	                    container.offset(opts.offset);
	                } else {
	                    container.offset(getOffset(container, offsetElement));
	                }
	            }
	
	            updateHelperLocations();
	
	            if (opts.showPalette) {
	                drawPalette();
	            }
	
	            boundElement.trigger('reflow.spectrum');
	        }
	
	        function destroy() {
	            boundElement.show();
	            offsetElement.unbind("click.spectrum touchstart.spectrum");
	            container.remove();
	            replacer.remove();
	            spectrums[spect.id] = null;
	        }
	
	        function option(optionName, optionValue) {
	            if (optionName === undefined) {
	                return $.extend({}, opts);
	            }
	            if (optionValue === undefined) {
	                return opts[optionName];
	            }
	
	            opts[optionName] = optionValue;
	
	            if (optionName === "preferredFormat") {
	                currentPreferredFormat = opts.preferredFormat;
	            }
	            applyOptions();
	        }
	
	        function enable() {
	            disabled = false;
	            boundElement.attr("disabled", false);
	            offsetElement.removeClass("sp-disabled");
	        }
	
	        function disable() {
	            hide();
	            disabled = true;
	            boundElement.attr("disabled", true);
	            offsetElement.addClass("sp-disabled");
	        }
	
	        function setOffset(coord) {
	            opts.offset = coord;
	            reflow();
	        }
	
	        initialize();
	
	        var spect = {
	            show: show,
	            hide: hide,
	            toggle: toggle,
	            reflow: reflow,
	            option: option,
	            enable: enable,
	            disable: disable,
	            offset: setOffset,
	            set: function (c) {
	                set(c);
	                updateOriginalInput();
	            },
	            get: get,
	            destroy: destroy,
	            container: container
	        };
	
	        spect.id = spectrums.push(spect) - 1;
	
	        return spect;
	    }
	
	    /**
	    * checkOffset - get the offset below/above and left/right element depending on screen position
	    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
	    */
	    function getOffset(picker, input) {
	        var extraY = 0;
	        var dpWidth = picker.outerWidth();
	        var dpHeight = picker.outerHeight();
	        var inputHeight = input.outerHeight();
	        var doc = picker[0].ownerDocument;
	        var docElem = doc.documentElement;
	        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
	        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
	        var offset = input.offset();
	        offset.top += inputHeight;
	
	        offset.left -=
	            Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
	            Math.abs(offset.left + dpWidth - viewWidth) : 0);
	
	        offset.top -=
	            Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
	            Math.abs(dpHeight + inputHeight - extraY) : extraY));
	
	        return offset;
	    }
	
	    /**
	    * noop - do nothing
	    */
	    function noop() {
	
	    }
	
	    /**
	    * stopPropagation - makes the code only doing this a little easier to read in line
	    */
	    function stopPropagation(e) {
	        e.stopPropagation();
	    }
	
	    /**
	    * Create a function bound to a given object
	    * Thanks to underscore.js
	    */
	    function bind(func, obj) {
	        var slice = Array.prototype.slice;
	        var args = slice.call(arguments, 2);
	        return function () {
	            return func.apply(obj, args.concat(slice.call(arguments)));
	        };
	    }
	
	    /**
	    * Lightweight drag helper.  Handles containment within the element, so that
	    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
	    */
	    function draggable(element, onmove, onstart, onstop) {
	        onmove = onmove || function () { };
	        onstart = onstart || function () { };
	        onstop = onstop || function () { };
	        var doc = document;
	        var dragging = false;
	        var offset = {};
	        var maxHeight = 0;
	        var maxWidth = 0;
	        var hasTouch = ('ontouchstart' in window);
	
	        var duringDragEvents = {};
	        duringDragEvents["selectstart"] = prevent;
	        duringDragEvents["dragstart"] = prevent;
	        duringDragEvents["touchmove mousemove"] = move;
	        duringDragEvents["touchend mouseup"] = stop;
	
	        function prevent(e) {
	            if (e.stopPropagation) {
	                e.stopPropagation();
	            }
	            if (e.preventDefault) {
	                e.preventDefault();
	            }
	            e.returnValue = false;
	        }
	
	        function move(e) {
	            if (dragging) {
	                // Mouseup happened outside of window
	                if (IE && doc.documentMode < 9 && !e.button) {
	                    return stop();
	                }
	
	                var t0 = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0];
	                var pageX = t0 && t0.pageX || e.pageX;
	                var pageY = t0 && t0.pageY || e.pageY;
	
	                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
	                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));
	
	                if (hasTouch) {
	                    // Stop scrolling in iOS
	                    prevent(e);
	                }
	
	                onmove.apply(element, [dragX, dragY, e]);
	            }
	        }
	
	        function start(e) {
	            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);
	
	            if (!rightclick && !dragging) {
	                if (onstart.apply(element, arguments) !== false) {
	                    dragging = true;
	                    maxHeight = $(element).height();
	                    maxWidth = $(element).width();
	                    offset = $(element).offset();
	
	                    $(doc).bind(duringDragEvents);
	                    $(doc.body).addClass("sp-dragging");
	
	                    move(e);
	
	                    prevent(e);
	                }
	            }
	        }
	
	        function stop() {
	            if (dragging) {
	                $(doc).unbind(duringDragEvents);
	                $(doc.body).removeClass("sp-dragging");
	
	                // Wait a tick before notifying observers to allow the click event
	                // to fire in Chrome.
	                setTimeout(function() {
	                    onstop.apply(element, arguments);
	                }, 0);
	            }
	            dragging = false;
	        }
	
	        $(element).bind("touchstart mousedown", start);
	    }
	
	    function throttle(func, wait, debounce) {
	        var timeout;
	        return function () {
	            var context = this, args = arguments;
	            var throttler = function () {
	                timeout = null;
	                func.apply(context, args);
	            };
	            if (debounce) clearTimeout(timeout);
	            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
	        };
	    }
	
	    function inputTypeColorSupport() {
	        return $.fn.spectrum.inputTypeColorSupport();
	    }
	
	    /**
	    * Define a jQuery plugin
	    */
	    var dataID = "spectrum.id";
	    $.fn.spectrum = function (opts, extra) {
	
	        if (typeof opts == "string") {
	
	            var returnValue = this;
	            var args = Array.prototype.slice.call( arguments, 1 );
	
	            this.each(function () {
	                var spect = spectrums[$(this).data(dataID)];
	                if (spect) {
	                    var method = spect[opts];
	                    if (!method) {
	                        throw new Error( "Spectrum: no such method: '" + opts + "'" );
	                    }
	
	                    if (opts == "get") {
	                        returnValue = spect.get();
	                    }
	                    else if (opts == "container") {
	                        returnValue = spect.container;
	                    }
	                    else if (opts == "option") {
	                        returnValue = spect.option.apply(spect, args);
	                    }
	                    else if (opts == "destroy") {
	                        spect.destroy();
	                        $(this).removeData(dataID);
	                    }
	                    else {
	                        method.apply(spect, args);
	                    }
	                }
	            });
	
	            return returnValue;
	        }
	
	        // Initializing a new instance of spectrum
	        return this.spectrum("destroy").each(function () {
	            var options = $.extend({}, opts, $(this).data());
	            var spect = spectrum(this, options);
	            $(this).data(dataID, spect.id);
	        });
	    };
	
	    $.fn.spectrum.load = true;
	    $.fn.spectrum.loadOpts = {};
	    $.fn.spectrum.draggable = draggable;
	    $.fn.spectrum.defaults = defaultOpts;
	    $.fn.spectrum.inputTypeColorSupport = function inputTypeColorSupport() {
	        if (typeof inputTypeColorSupport._cachedResult === "undefined") {
	            var colorInput = $("<input type='color'/>")[0]; // if color element is supported, value will default to not null
	            inputTypeColorSupport._cachedResult = colorInput.type === "color" && colorInput.value !== "";
	        }
	        return inputTypeColorSupport._cachedResult;
	    };
	
	    $.spectrum = { };
	    $.spectrum.localization = { };
	    $.spectrum.palettes = { };
	
	    $.fn.spectrum.processNativeColorInputs = function () {
	        var colorInputs = $("input[type=color]");
	        if (colorInputs.length && !inputTypeColorSupport()) {
	            colorInputs.spectrum({
	                preferredFormat: "hex6"
	            });
	        }
	    };
	
	    // TinyColor v1.1.2
	    // https://github.com/bgrins/TinyColor
	    // Brian Grinstead, MIT License
	
	    (function() {
	
	    var trimLeft = /^[\s,#]+/,
	        trimRight = /\s+$/,
	        tinyCounter = 0,
	        math = Math,
	        mathRound = math.round,
	        mathMin = math.min,
	        mathMax = math.max,
	        mathRandom = math.random;
	
	    var tinycolor = function(color, opts) {
	
	        color = (color) ? color : '';
	        opts = opts || { };
	
	        // If input is already a tinycolor, return itself
	        if (color instanceof tinycolor) {
	           return color;
	        }
	        // If we are called as a function, call using new instead
	        if (!(this instanceof tinycolor)) {
	            return new tinycolor(color, opts);
	        }
	
	        var rgb = inputToRGB(color);
	        this._originalInput = color,
	        this._r = rgb.r,
	        this._g = rgb.g,
	        this._b = rgb.b,
	        this._a = rgb.a,
	        this._roundA = mathRound(100*this._a) / 100,
	        this._format = opts.format || rgb.format;
	        this._gradientType = opts.gradientType;
	
	        // Don't let the range of [0,255] come back in [0,1].
	        // Potentially lose a little bit of precision here, but will fix issues where
	        // .5 gets interpreted as half of the total, instead of half of 1
	        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
	        if (this._r < 1) { this._r = mathRound(this._r); }
	        if (this._g < 1) { this._g = mathRound(this._g); }
	        if (this._b < 1) { this._b = mathRound(this._b); }
	
	        this._ok = rgb.ok;
	        this._tc_id = tinyCounter++;
	    };
	
	    tinycolor.prototype = {
	        isDark: function() {
	            return this.getBrightness() < 128;
	        },
	        isLight: function() {
	            return !this.isDark();
	        },
	        isValid: function() {
	            return this._ok;
	        },
	        getOriginalInput: function() {
	          return this._originalInput;
	        },
	        getFormat: function() {
	            return this._format;
	        },
	        getAlpha: function() {
	            return this._a;
	        },
	        getBrightness: function() {
	            var rgb = this.toRgb();
	            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
	        },
	        setAlpha: function(value) {
	            this._a = boundAlpha(value);
	            this._roundA = mathRound(100*this._a) / 100;
	            return this;
	        },
	        toHsv: function() {
	            var hsv = rgbToHsv(this._r, this._g, this._b);
	            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
	        },
	        toHsvString: function() {
	            var hsv = rgbToHsv(this._r, this._g, this._b);
	            var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
	            return (this._a == 1) ?
	              "hsv("  + h + ", " + s + "%, " + v + "%)" :
	              "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
	        },
	        toHsl: function() {
	            var hsl = rgbToHsl(this._r, this._g, this._b);
	            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
	        },
	        toHslString: function() {
	            var hsl = rgbToHsl(this._r, this._g, this._b);
	            var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
	            return (this._a == 1) ?
	              "hsl("  + h + ", " + s + "%, " + l + "%)" :
	              "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
	        },
	        toHex: function(allow3Char) {
	            return rgbToHex(this._r, this._g, this._b, allow3Char);
	        },
	        toHexString: function(allow3Char) {
	            return '#' + this.toHex(allow3Char);
	        },
	        toHex8: function() {
	            return rgbaToHex(this._r, this._g, this._b, this._a);
	        },
	        toHex8String: function() {
	            return '#' + this.toHex8();
	        },
	        toRgb: function() {
	            return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
	        },
	        toRgbString: function() {
	            return (this._a == 1) ?
	              "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
	              "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
	        },
	        toPercentageRgb: function() {
	            return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
	        },
	        toPercentageRgbString: function() {
	            return (this._a == 1) ?
	              "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
	              "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
	        },
	        toName: function() {
	            if (this._a === 0) {
	                return "transparent";
	            }
	
	            if (this._a < 1) {
	                return false;
	            }
	
	            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
	        },
	        toFilter: function(secondColor) {
	            var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
	            var secondHex8String = hex8String;
	            var gradientType = this._gradientType ? "GradientType = 1, " : "";
	
	            if (secondColor) {
	                var s = tinycolor(secondColor);
	                secondHex8String = s.toHex8String();
	            }
	
	            return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
	        },
	        toString: function(format) {
	            var formatSet = !!format;
	            format = format || this._format;
	
	            var formattedString = false;
	            var hasAlpha = this._a < 1 && this._a >= 0;
	            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");
	
	            if (needsAlphaFormat) {
	                // Special case for "transparent", all other non-alpha formats
	                // will return rgba when there is transparency.
	                if (format === "name" && this._a === 0) {
	                    return this.toName();
	                }
	                return this.toRgbString();
	            }
	            if (format === "rgb") {
	                formattedString = this.toRgbString();
	            }
	            if (format === "prgb") {
	                formattedString = this.toPercentageRgbString();
	            }
	            if (format === "hex" || format === "hex6") {
	                formattedString = this.toHexString();
	            }
	            if (format === "hex3") {
	                formattedString = this.toHexString(true);
	            }
	            if (format === "hex8") {
	                formattedString = this.toHex8String();
	            }
	            if (format === "name") {
	                formattedString = this.toName();
	            }
	            if (format === "hsl") {
	                formattedString = this.toHslString();
	            }
	            if (format === "hsv") {
	                formattedString = this.toHsvString();
	            }
	
	            return formattedString || this.toHexString();
	        },
	
	        _applyModification: function(fn, args) {
	            var color = fn.apply(null, [this].concat([].slice.call(args)));
	            this._r = color._r;
	            this._g = color._g;
	            this._b = color._b;
	            this.setAlpha(color._a);
	            return this;
	        },
	        lighten: function() {
	            return this._applyModification(lighten, arguments);
	        },
	        brighten: function() {
	            return this._applyModification(brighten, arguments);
	        },
	        darken: function() {
	            return this._applyModification(darken, arguments);
	        },
	        desaturate: function() {
	            return this._applyModification(desaturate, arguments);
	        },
	        saturate: function() {
	            return this._applyModification(saturate, arguments);
	        },
	        greyscale: function() {
	            return this._applyModification(greyscale, arguments);
	        },
	        spin: function() {
	            return this._applyModification(spin, arguments);
	        },
	
	        _applyCombination: function(fn, args) {
	            return fn.apply(null, [this].concat([].slice.call(args)));
	        },
	        analogous: function() {
	            return this._applyCombination(analogous, arguments);
	        },
	        complement: function() {
	            return this._applyCombination(complement, arguments);
	        },
	        monochromatic: function() {
	            return this._applyCombination(monochromatic, arguments);
	        },
	        splitcomplement: function() {
	            return this._applyCombination(splitcomplement, arguments);
	        },
	        triad: function() {
	            return this._applyCombination(triad, arguments);
	        },
	        tetrad: function() {
	            return this._applyCombination(tetrad, arguments);
	        }
	    };
	
	    // If input is an object, force 1 into "1.0" to handle ratios properly
	    // String input requires "1.0" as input, so 1 will be treated as 1
	    tinycolor.fromRatio = function(color, opts) {
	        if (typeof color == "object") {
	            var newColor = {};
	            for (var i in color) {
	                if (color.hasOwnProperty(i)) {
	                    if (i === "a") {
	                        newColor[i] = color[i];
	                    }
	                    else {
	                        newColor[i] = convertToPercentage(color[i]);
	                    }
	                }
	            }
	            color = newColor;
	        }
	
	        return tinycolor(color, opts);
	    };
	
	    // Given a string or object, convert that input to RGB
	    // Possible string inputs:
	    //
	    //     "red"
	    //     "#f00" or "f00"
	    //     "#ff0000" or "ff0000"
	    //     "#ff000000" or "ff000000"
	    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
	    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
	    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
	    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
	    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
	    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
	    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
	    //
	    function inputToRGB(color) {
	
	        var rgb = { r: 0, g: 0, b: 0 };
	        var a = 1;
	        var ok = false;
	        var format = false;
	
	        if (typeof color == "string") {
	            color = stringInputToObject(color);
	        }
	
	        if (typeof color == "object") {
	            if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
	                rgb = rgbToRgb(color.r, color.g, color.b);
	                ok = true;
	                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
	            }
	            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
	                color.s = convertToPercentage(color.s);
	                color.v = convertToPercentage(color.v);
	                rgb = hsvToRgb(color.h, color.s, color.v);
	                ok = true;
	                format = "hsv";
	            }
	            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
	                color.s = convertToPercentage(color.s);
	                color.l = convertToPercentage(color.l);
	                rgb = hslToRgb(color.h, color.s, color.l);
	                ok = true;
	                format = "hsl";
	            }
	
	            if (color.hasOwnProperty("a")) {
	                a = color.a;
	            }
	        }
	
	        a = boundAlpha(a);
	
	        return {
	            ok: ok,
	            format: color.format || format,
	            r: mathMin(255, mathMax(rgb.r, 0)),
	            g: mathMin(255, mathMax(rgb.g, 0)),
	            b: mathMin(255, mathMax(rgb.b, 0)),
	            a: a
	        };
	    }
	
	
	    // Conversion Functions
	    // --------------------
	
	    // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
	    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
	
	    // `rgbToRgb`
	    // Handle bounds / percentage checking to conform to CSS color spec
	    // <http://www.w3.org/TR/css3-color/>
	    // *Assumes:* r, g, b in [0, 255] or [0, 1]
	    // *Returns:* { r, g, b } in [0, 255]
	    function rgbToRgb(r, g, b){
	        return {
	            r: bound01(r, 255) * 255,
	            g: bound01(g, 255) * 255,
	            b: bound01(b, 255) * 255
	        };
	    }
	
	    // `rgbToHsl`
	    // Converts an RGB color value to HSL.
	    // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
	    // *Returns:* { h, s, l } in [0,1]
	    function rgbToHsl(r, g, b) {
	
	        r = bound01(r, 255);
	        g = bound01(g, 255);
	        b = bound01(b, 255);
	
	        var max = mathMax(r, g, b), min = mathMin(r, g, b);
	        var h, s, l = (max + min) / 2;
	
	        if(max == min) {
	            h = s = 0; // achromatic
	        }
	        else {
	            var d = max - min;
	            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	            switch(max) {
	                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	                case g: h = (b - r) / d + 2; break;
	                case b: h = (r - g) / d + 4; break;
	            }
	
	            h /= 6;
	        }
	
	        return { h: h, s: s, l: l };
	    }
	
	    // `hslToRgb`
	    // Converts an HSL color value to RGB.
	    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
	    // *Returns:* { r, g, b } in the set [0, 255]
	    function hslToRgb(h, s, l) {
	        var r, g, b;
	
	        h = bound01(h, 360);
	        s = bound01(s, 100);
	        l = bound01(l, 100);
	
	        function hue2rgb(p, q, t) {
	            if(t < 0) t += 1;
	            if(t > 1) t -= 1;
	            if(t < 1/6) return p + (q - p) * 6 * t;
	            if(t < 1/2) return q;
	            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	            return p;
	        }
	
	        if(s === 0) {
	            r = g = b = l; // achromatic
	        }
	        else {
	            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	            var p = 2 * l - q;
	            r = hue2rgb(p, q, h + 1/3);
	            g = hue2rgb(p, q, h);
	            b = hue2rgb(p, q, h - 1/3);
	        }
	
	        return { r: r * 255, g: g * 255, b: b * 255 };
	    }
	
	    // `rgbToHsv`
	    // Converts an RGB color value to HSV
	    // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
	    // *Returns:* { h, s, v } in [0,1]
	    function rgbToHsv(r, g, b) {
	
	        r = bound01(r, 255);
	        g = bound01(g, 255);
	        b = bound01(b, 255);
	
	        var max = mathMax(r, g, b), min = mathMin(r, g, b);
	        var h, s, v = max;
	
	        var d = max - min;
	        s = max === 0 ? 0 : d / max;
	
	        if(max == min) {
	            h = 0; // achromatic
	        }
	        else {
	            switch(max) {
	                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	                case g: h = (b - r) / d + 2; break;
	                case b: h = (r - g) / d + 4; break;
	            }
	            h /= 6;
	        }
	        return { h: h, s: s, v: v };
	    }
	
	    // `hsvToRgb`
	    // Converts an HSV color value to RGB.
	    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
	    // *Returns:* { r, g, b } in the set [0, 255]
	     function hsvToRgb(h, s, v) {
	
	        h = bound01(h, 360) * 6;
	        s = bound01(s, 100);
	        v = bound01(v, 100);
	
	        var i = math.floor(h),
	            f = h - i,
	            p = v * (1 - s),
	            q = v * (1 - f * s),
	            t = v * (1 - (1 - f) * s),
	            mod = i % 6,
	            r = [v, q, p, p, t, v][mod],
	            g = [t, v, v, q, p, p][mod],
	            b = [p, p, t, v, v, q][mod];
	
	        return { r: r * 255, g: g * 255, b: b * 255 };
	    }
	
	    // `rgbToHex`
	    // Converts an RGB color to hex
	    // Assumes r, g, and b are contained in the set [0, 255]
	    // Returns a 3 or 6 character hex
	    function rgbToHex(r, g, b, allow3Char) {
	
	        var hex = [
	            pad2(mathRound(r).toString(16)),
	            pad2(mathRound(g).toString(16)),
	            pad2(mathRound(b).toString(16))
	        ];
	
	        // Return a 3 character hex if possible
	        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
	            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
	        }
	
	        return hex.join("");
	    }
	        // `rgbaToHex`
	        // Converts an RGBA color plus alpha transparency to hex
	        // Assumes r, g, b and a are contained in the set [0, 255]
	        // Returns an 8 character hex
	        function rgbaToHex(r, g, b, a) {
	
	            var hex = [
	                pad2(convertDecimalToHex(a)),
	                pad2(mathRound(r).toString(16)),
	                pad2(mathRound(g).toString(16)),
	                pad2(mathRound(b).toString(16))
	            ];
	
	            return hex.join("");
	        }
	
	    // `equals`
	    // Can be called with any tinycolor input
	    tinycolor.equals = function (color1, color2) {
	        if (!color1 || !color2) { return false; }
	        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
	    };
	    tinycolor.random = function() {
	        return tinycolor.fromRatio({
	            r: mathRandom(),
	            g: mathRandom(),
	            b: mathRandom()
	        });
	    };
	
	
	    // Modification Functions
	    // ----------------------
	    // Thanks to less.js for some of the basics here
	    // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>
	
	    function desaturate(color, amount) {
	        amount = (amount === 0) ? 0 : (amount || 10);
	        var hsl = tinycolor(color).toHsl();
	        hsl.s -= amount / 100;
	        hsl.s = clamp01(hsl.s);
	        return tinycolor(hsl);
	    }
	
	    function saturate(color, amount) {
	        amount = (amount === 0) ? 0 : (amount || 10);
	        var hsl = tinycolor(color).toHsl();
	        hsl.s += amount / 100;
	        hsl.s = clamp01(hsl.s);
	        return tinycolor(hsl);
	    }
	
	    function greyscale(color) {
	        return tinycolor(color).desaturate(100);
	    }
	
	    function lighten (color, amount) {
	        amount = (amount === 0) ? 0 : (amount || 10);
	        var hsl = tinycolor(color).toHsl();
	        hsl.l += amount / 100;
	        hsl.l = clamp01(hsl.l);
	        return tinycolor(hsl);
	    }
	
	    function brighten(color, amount) {
	        amount = (amount === 0) ? 0 : (amount || 10);
	        var rgb = tinycolor(color).toRgb();
	        rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
	        rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
	        rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
	        return tinycolor(rgb);
	    }
	
	    function darken (color, amount) {
	        amount = (amount === 0) ? 0 : (amount || 10);
	        var hsl = tinycolor(color).toHsl();
	        hsl.l -= amount / 100;
	        hsl.l = clamp01(hsl.l);
	        return tinycolor(hsl);
	    }
	
	    // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	    // Values outside of this range will be wrapped into this range.
	    function spin(color, amount) {
	        var hsl = tinycolor(color).toHsl();
	        var hue = (mathRound(hsl.h) + amount) % 360;
	        hsl.h = hue < 0 ? 360 + hue : hue;
	        return tinycolor(hsl);
	    }
	
	    // Combination Functions
	    // ---------------------
	    // Thanks to jQuery xColor for some of the ideas behind these
	    // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>
	
	    function complement(color) {
	        var hsl = tinycolor(color).toHsl();
	        hsl.h = (hsl.h + 180) % 360;
	        return tinycolor(hsl);
	    }
	
	    function triad(color) {
	        var hsl = tinycolor(color).toHsl();
	        var h = hsl.h;
	        return [
	            tinycolor(color),
	            tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
	            tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
	        ];
	    }
	
	    function tetrad(color) {
	        var hsl = tinycolor(color).toHsl();
	        var h = hsl.h;
	        return [
	            tinycolor(color),
	            tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
	            tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
	            tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
	        ];
	    }
	
	    function splitcomplement(color) {
	        var hsl = tinycolor(color).toHsl();
	        var h = hsl.h;
	        return [
	            tinycolor(color),
	            tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
	            tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
	        ];
	    }
	
	    function analogous(color, results, slices) {
	        results = results || 6;
	        slices = slices || 30;
	
	        var hsl = tinycolor(color).toHsl();
	        var part = 360 / slices;
	        var ret = [tinycolor(color)];
	
	        for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
	            hsl.h = (hsl.h + part) % 360;
	            ret.push(tinycolor(hsl));
	        }
	        return ret;
	    }
	
	    function monochromatic(color, results) {
	        results = results || 6;
	        var hsv = tinycolor(color).toHsv();
	        var h = hsv.h, s = hsv.s, v = hsv.v;
	        var ret = [];
	        var modification = 1 / results;
	
	        while (results--) {
	            ret.push(tinycolor({ h: h, s: s, v: v}));
	            v = (v + modification) % 1;
	        }
	
	        return ret;
	    }
	
	    // Utility Functions
	    // ---------------------
	
	    tinycolor.mix = function(color1, color2, amount) {
	        amount = (amount === 0) ? 0 : (amount || 50);
	
	        var rgb1 = tinycolor(color1).toRgb();
	        var rgb2 = tinycolor(color2).toRgb();
	
	        var p = amount / 100;
	        var w = p * 2 - 1;
	        var a = rgb2.a - rgb1.a;
	
	        var w1;
	
	        if (w * a == -1) {
	            w1 = w;
	        } else {
	            w1 = (w + a) / (1 + w * a);
	        }
	
	        w1 = (w1 + 1) / 2;
	
	        var w2 = 1 - w1;
	
	        var rgba = {
	            r: rgb2.r * w1 + rgb1.r * w2,
	            g: rgb2.g * w1 + rgb1.g * w2,
	            b: rgb2.b * w1 + rgb1.b * w2,
	            a: rgb2.a * p  + rgb1.a * (1 - p)
	        };
	
	        return tinycolor(rgba);
	    };
	
	
	    // Readability Functions
	    // ---------------------
	    // <http://www.w3.org/TR/AERT#color-contrast>
	
	    // `readability`
	    // Analyze the 2 colors and returns an object with the following properties:
	    //    `brightness`: difference in brightness between the two colors
	    //    `color`: difference in color/hue between the two colors
	    tinycolor.readability = function(color1, color2) {
	        var c1 = tinycolor(color1);
	        var c2 = tinycolor(color2);
	        var rgb1 = c1.toRgb();
	        var rgb2 = c2.toRgb();
	        var brightnessA = c1.getBrightness();
	        var brightnessB = c2.getBrightness();
	        var colorDiff = (
	            Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) +
	            Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) +
	            Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b)
	        );
	
	        return {
	            brightness: Math.abs(brightnessA - brightnessB),
	            color: colorDiff
	        };
	    };
	
	    // `readable`
	    // http://www.w3.org/TR/AERT#color-contrast
	    // Ensure that foreground and background color combinations provide sufficient contrast.
	    // *Example*
	    //    tinycolor.isReadable("#000", "#111") => false
	    tinycolor.isReadable = function(color1, color2) {
	        var readability = tinycolor.readability(color1, color2);
	        return readability.brightness > 125 && readability.color > 500;
	    };
	
	    // `mostReadable`
	    // Given a base color and a list of possible foreground or background
	    // colors for that base, returns the most readable color.
	    // *Example*
	    //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
	    tinycolor.mostReadable = function(baseColor, colorList) {
	        var bestColor = null;
	        var bestScore = 0;
	        var bestIsReadable = false;
	        for (var i=0; i < colorList.length; i++) {
	
	            // We normalize both around the "acceptable" breaking point,
	            // but rank brightness constrast higher than hue.
	
	            var readability = tinycolor.readability(baseColor, colorList[i]);
	            var readable = readability.brightness > 125 && readability.color > 500;
	            var score = 3 * (readability.brightness / 125) + (readability.color / 500);
	
	            if ((readable && ! bestIsReadable) ||
	                (readable && bestIsReadable && score > bestScore) ||
	                ((! readable) && (! bestIsReadable) && score > bestScore)) {
	                bestIsReadable = readable;
	                bestScore = score;
	                bestColor = tinycolor(colorList[i]);
	            }
	        }
	        return bestColor;
	    };
	
	
	    // Big List of Colors
	    // ------------------
	    // <http://www.w3.org/TR/css3-color/#svg-color>
	    var names = tinycolor.names = {
	        aliceblue: "f0f8ff",
	        antiquewhite: "faebd7",
	        aqua: "0ff",
	        aquamarine: "7fffd4",
	        azure: "f0ffff",
	        beige: "f5f5dc",
	        bisque: "ffe4c4",
	        black: "000",
	        blanchedalmond: "ffebcd",
	        blue: "00f",
	        blueviolet: "8a2be2",
	        brown: "a52a2a",
	        burlywood: "deb887",
	        burntsienna: "ea7e5d",
	        cadetblue: "5f9ea0",
	        chartreuse: "7fff00",
	        chocolate: "d2691e",
	        coral: "ff7f50",
	        cornflowerblue: "6495ed",
	        cornsilk: "fff8dc",
	        crimson: "dc143c",
	        cyan: "0ff",
	        darkblue: "00008b",
	        darkcyan: "008b8b",
	        darkgoldenrod: "b8860b",
	        darkgray: "a9a9a9",
	        darkgreen: "006400",
	        darkgrey: "a9a9a9",
	        darkkhaki: "bdb76b",
	        darkmagenta: "8b008b",
	        darkolivegreen: "556b2f",
	        darkorange: "ff8c00",
	        darkorchid: "9932cc",
	        darkred: "8b0000",
	        darksalmon: "e9967a",
	        darkseagreen: "8fbc8f",
	        darkslateblue: "483d8b",
	        darkslategray: "2f4f4f",
	        darkslategrey: "2f4f4f",
	        darkturquoise: "00ced1",
	        darkviolet: "9400d3",
	        deeppink: "ff1493",
	        deepskyblue: "00bfff",
	        dimgray: "696969",
	        dimgrey: "696969",
	        dodgerblue: "1e90ff",
	        firebrick: "b22222",
	        floralwhite: "fffaf0",
	        forestgreen: "228b22",
	        fuchsia: "f0f",
	        gainsboro: "dcdcdc",
	        ghostwhite: "f8f8ff",
	        gold: "ffd700",
	        goldenrod: "daa520",
	        gray: "808080",
	        green: "008000",
	        greenyellow: "adff2f",
	        grey: "808080",
	        honeydew: "f0fff0",
	        hotpink: "ff69b4",
	        indianred: "cd5c5c",
	        indigo: "4b0082",
	        ivory: "fffff0",
	        khaki: "f0e68c",
	        lavender: "e6e6fa",
	        lavenderblush: "fff0f5",
	        lawngreen: "7cfc00",
	        lemonchiffon: "fffacd",
	        lightblue: "add8e6",
	        lightcoral: "f08080",
	        lightcyan: "e0ffff",
	        lightgoldenrodyellow: "fafad2",
	        lightgray: "d3d3d3",
	        lightgreen: "90ee90",
	        lightgrey: "d3d3d3",
	        lightpink: "ffb6c1",
	        lightsalmon: "ffa07a",
	        lightseagreen: "20b2aa",
	        lightskyblue: "87cefa",
	        lightslategray: "789",
	        lightslategrey: "789",
	        lightsteelblue: "b0c4de",
	        lightyellow: "ffffe0",
	        lime: "0f0",
	        limegreen: "32cd32",
	        linen: "faf0e6",
	        magenta: "f0f",
	        maroon: "800000",
	        mediumaquamarine: "66cdaa",
	        mediumblue: "0000cd",
	        mediumorchid: "ba55d3",
	        mediumpurple: "9370db",
	        mediumseagreen: "3cb371",
	        mediumslateblue: "7b68ee",
	        mediumspringgreen: "00fa9a",
	        mediumturquoise: "48d1cc",
	        mediumvioletred: "c71585",
	        midnightblue: "191970",
	        mintcream: "f5fffa",
	        mistyrose: "ffe4e1",
	        moccasin: "ffe4b5",
	        navajowhite: "ffdead",
	        navy: "000080",
	        oldlace: "fdf5e6",
	        olive: "808000",
	        olivedrab: "6b8e23",
	        orange: "ffa500",
	        orangered: "ff4500",
	        orchid: "da70d6",
	        palegoldenrod: "eee8aa",
	        palegreen: "98fb98",
	        paleturquoise: "afeeee",
	        palevioletred: "db7093",
	        papayawhip: "ffefd5",
	        peachpuff: "ffdab9",
	        peru: "cd853f",
	        pink: "ffc0cb",
	        plum: "dda0dd",
	        powderblue: "b0e0e6",
	        purple: "800080",
	        rebeccapurple: "663399",
	        red: "f00",
	        rosybrown: "bc8f8f",
	        royalblue: "4169e1",
	        saddlebrown: "8b4513",
	        salmon: "fa8072",
	        sandybrown: "f4a460",
	        seagreen: "2e8b57",
	        seashell: "fff5ee",
	        sienna: "a0522d",
	        silver: "c0c0c0",
	        skyblue: "87ceeb",
	        slateblue: "6a5acd",
	        slategray: "708090",
	        slategrey: "708090",
	        snow: "fffafa",
	        springgreen: "00ff7f",
	        steelblue: "4682b4",
	        tan: "d2b48c",
	        teal: "008080",
	        thistle: "d8bfd8",
	        tomato: "ff6347",
	        turquoise: "40e0d0",
	        violet: "ee82ee",
	        wheat: "f5deb3",
	        white: "fff",
	        whitesmoke: "f5f5f5",
	        yellow: "ff0",
	        yellowgreen: "9acd32"
	    };
	
	    // Make it easy to access colors via `hexNames[hex]`
	    var hexNames = tinycolor.hexNames = flip(names);
	
	
	    // Utilities
	    // ---------
	
	    // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
	    function flip(o) {
	        var flipped = { };
	        for (var i in o) {
	            if (o.hasOwnProperty(i)) {
	                flipped[o[i]] = i;
	            }
	        }
	        return flipped;
	    }
	
	    // Return a valid alpha value [0,1] with all invalid values being set to 1
	    function boundAlpha(a) {
	        a = parseFloat(a);
	
	        if (isNaN(a) || a < 0 || a > 1) {
	            a = 1;
	        }
	
	        return a;
	    }
	
	    // Take input from [0, n] and return it as [0, 1]
	    function bound01(n, max) {
	        if (isOnePointZero(n)) { n = "100%"; }
	
	        var processPercent = isPercentage(n);
	        n = mathMin(max, mathMax(0, parseFloat(n)));
	
	        // Automatically convert percentage into number
	        if (processPercent) {
	            n = parseInt(n * max, 10) / 100;
	        }
	
	        // Handle floating point rounding errors
	        if ((math.abs(n - max) < 0.000001)) {
	            return 1;
	        }
	
	        // Convert into [0, 1] range if it isn't already
	        return (n % max) / parseFloat(max);
	    }
	
	    // Force a number between 0 and 1
	    function clamp01(val) {
	        return mathMin(1, mathMax(0, val));
	    }
	
	    // Parse a base-16 hex value into a base-10 integer
	    function parseIntFromHex(val) {
	        return parseInt(val, 16);
	    }
	
	    // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
	    // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
	    function isOnePointZero(n) {
	        return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
	    }
	
	    // Check to see if string passed in is a percentage
	    function isPercentage(n) {
	        return typeof n === "string" && n.indexOf('%') != -1;
	    }
	
	    // Force a hex value to have 2 characters
	    function pad2(c) {
	        return c.length == 1 ? '0' + c : '' + c;
	    }
	
	    // Replace a decimal with it's percentage value
	    function convertToPercentage(n) {
	        if (n <= 1) {
	            n = (n * 100) + "%";
	        }
	
	        return n;
	    }
	
	    // Converts a decimal to a hex value
	    function convertDecimalToHex(d) {
	        return Math.round(parseFloat(d) * 255).toString(16);
	    }
	    // Converts a hex value to a decimal
	    function convertHexToDecimal(h) {
	        return (parseIntFromHex(h) / 255);
	    }
	
	    var matchers = (function() {
	
	        // <http://www.w3.org/TR/css3-values/#integers>
	        var CSS_INTEGER = "[-\\+]?\\d+%?";
	
	        // <http://www.w3.org/TR/css3-values/#number-value>
	        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
	
	        // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
	        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
	
	        // Actual matching.
	        // Parentheses and commas are optional, but not required.
	        // Whitespace can take the place of commas or opening paren
	        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	
	        return {
	            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
	            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
	            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
	            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
	            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
	            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
	            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
	        };
	    })();
	
	    // `stringInputToObject`
	    // Permissive string parsing.  Take in a number of formats, and output an object
	    // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
	    function stringInputToObject(color) {
	
	        color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
	        var named = false;
	        if (names[color]) {
	            color = names[color];
	            named = true;
	        }
	        else if (color == 'transparent') {
	            return { r: 0, g: 0, b: 0, a: 0, format: "name" };
	        }
	
	        // Try to match string input using regular expressions.
	        // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
	        // Just return an object and let the conversion functions handle that.
	        // This way the result will be the same whether the tinycolor is initialized with string or object.
	        var match;
	        if ((match = matchers.rgb.exec(color))) {
	            return { r: match[1], g: match[2], b: match[3] };
	        }
	        if ((match = matchers.rgba.exec(color))) {
	            return { r: match[1], g: match[2], b: match[3], a: match[4] };
	        }
	        if ((match = matchers.hsl.exec(color))) {
	            return { h: match[1], s: match[2], l: match[3] };
	        }
	        if ((match = matchers.hsla.exec(color))) {
	            return { h: match[1], s: match[2], l: match[3], a: match[4] };
	        }
	        if ((match = matchers.hsv.exec(color))) {
	            return { h: match[1], s: match[2], v: match[3] };
	        }
	        if ((match = matchers.hsva.exec(color))) {
	            return { h: match[1], s: match[2], v: match[3], a: match[4] };
	        }
	        if ((match = matchers.hex8.exec(color))) {
	            return {
	                a: convertHexToDecimal(match[1]),
	                r: parseIntFromHex(match[2]),
	                g: parseIntFromHex(match[3]),
	                b: parseIntFromHex(match[4]),
	                format: named ? "name" : "hex8"
	            };
	        }
	        if ((match = matchers.hex6.exec(color))) {
	            return {
	                r: parseIntFromHex(match[1]),
	                g: parseIntFromHex(match[2]),
	                b: parseIntFromHex(match[3]),
	                format: named ? "name" : "hex"
	            };
	        }
	        if ((match = matchers.hex3.exec(color))) {
	            return {
	                r: parseIntFromHex(match[1] + '' + match[1]),
	                g: parseIntFromHex(match[2] + '' + match[2]),
	                b: parseIntFromHex(match[3] + '' + match[3]),
	                format: named ? "name" : "hex"
	            };
	        }
	
	        return false;
	    }
	
	    window.tinycolor = tinycolor;
	    })();
	
	    $(function () {
	        if ($.fn.spectrum.load) {
	            $.fn.spectrum.processNativeColorInputs();
	        }
	    });
	
	});


/***/ }),
/* 2372 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2373);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2375)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../css-loader/index.js!./spectrum.css", function() {
				var newContent = require("!!../css-loader/index.js!./spectrum.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2373 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2374)();
	// imports
	
	
	// module
	exports.push([module.id, "/***\nSpectrum Colorpicker v1.8.0\nhttps://github.com/bgrins/spectrum\nAuthor: Brian Grinstead\nLicense: MIT\n***/\n\n.sp-container {\n    position:absolute;\n    top:0;\n    left:0;\n    display:inline-block;\n    *display: inline;\n    *zoom: 1;\n    /* https://github.com/bgrins/spectrum/issues/40 */\n    z-index: 9999994;\n    overflow: hidden;\n}\n.sp-container.sp-flat {\n    position: relative;\n}\n\n/* Fix for * { box-sizing: border-box; } */\n.sp-container,\n.sp-container * {\n    -webkit-box-sizing: content-box;\n       -moz-box-sizing: content-box;\n            box-sizing: content-box;\n}\n\n/* http://ansciath.tumblr.com/post/7347495869/css-aspect-ratio */\n.sp-top {\n  position:relative;\n  width: 100%;\n  display:inline-block;\n}\n.sp-top-inner {\n   position:absolute;\n   top:0;\n   left:0;\n   bottom:0;\n   right:0;\n}\n.sp-color {\n    position: absolute;\n    top:0;\n    left:0;\n    bottom:0;\n    right:20%;\n}\n.sp-hue {\n    position: absolute;\n    top:0;\n    right:0;\n    bottom:0;\n    left:84%;\n    height: 100%;\n}\n\n.sp-clear-enabled .sp-hue {\n    top:33px;\n    height: 77.5%;\n}\n\n.sp-fill {\n    padding-top: 80%;\n}\n.sp-sat, .sp-val {\n    position: absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n}\n\n.sp-alpha-enabled .sp-top {\n    margin-bottom: 18px;\n}\n.sp-alpha-enabled .sp-alpha {\n    display: block;\n}\n.sp-alpha-handle {\n    position:absolute;\n    top:-4px;\n    bottom: -4px;\n    width: 6px;\n    left: 50%;\n    cursor: pointer;\n    border: 1px solid black;\n    background: white;\n    opacity: .8;\n}\n.sp-alpha {\n    display: none;\n    position: absolute;\n    bottom: -14px;\n    right: 0;\n    left: 0;\n    height: 8px;\n}\n.sp-alpha-inner {\n    border: solid 1px #333;\n}\n\n.sp-clear {\n    display: none;\n}\n\n.sp-clear.sp-clear-display {\n    background-position: center;\n}\n\n.sp-clear-enabled .sp-clear {\n    display: block;\n    position:absolute;\n    top:0px;\n    right:0;\n    bottom:0;\n    left:84%;\n    height: 28px;\n}\n\n/* Don't allow text selection */\n.sp-container, .sp-replacer, .sp-preview, .sp-dragger, .sp-slider, .sp-alpha, .sp-clear, .sp-alpha-handle, .sp-container.sp-dragging .sp-input, .sp-container button  {\n    -webkit-user-select:none;\n    -moz-user-select: -moz-none;\n    -o-user-select:none;\n    user-select: none;\n}\n\n.sp-container.sp-input-disabled .sp-input-container {\n    display: none;\n}\n.sp-container.sp-buttons-disabled .sp-button-container {\n    display: none;\n}\n.sp-container.sp-palette-buttons-disabled .sp-palette-button-container {\n    display: none;\n}\n.sp-palette-only .sp-picker-container {\n    display: none;\n}\n.sp-palette-disabled .sp-palette-container {\n    display: none;\n}\n\n.sp-initial-disabled .sp-initial {\n    display: none;\n}\n\n\n/* Gradients for hue, saturation and value instead of images.  Not pretty... but it works */\n.sp-sat {\n    background-image: -webkit-gradient(linear,  0 0, 100% 0, from(#FFF), to(rgba(204, 154, 129, 0)));\n    background-image: -webkit-linear-gradient(left, #FFF, rgba(204, 154, 129, 0));\n    background-image: -moz-linear-gradient(left, #fff, rgba(204, 154, 129, 0));\n    background-image: -o-linear-gradient(left, #fff, rgba(204, 154, 129, 0));\n    background-image: -ms-linear-gradient(left, #fff, rgba(204, 154, 129, 0));\n    background-image: linear-gradient(to right, #fff, rgba(204, 154, 129, 0));\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr=#FFFFFFFF, endColorstr=#00CC9A81)\";\n    filter : progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr='#FFFFFFFF', endColorstr='#00CC9A81');\n}\n.sp-val {\n    background-image: -webkit-gradient(linear, 0 100%, 0 0, from(#000000), to(rgba(204, 154, 129, 0)));\n    background-image: -webkit-linear-gradient(bottom, #000000, rgba(204, 154, 129, 0));\n    background-image: -moz-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));\n    background-image: -o-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));\n    background-image: -ms-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));\n    background-image: linear-gradient(to top, #000, rgba(204, 154, 129, 0));\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00CC9A81, endColorstr=#FF000000)\";\n    filter : progid:DXImageTransform.Microsoft.gradient(startColorstr='#00CC9A81', endColorstr='#FF000000');\n}\n\n.sp-hue {\n    background: -moz-linear-gradient(top, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n    background: -ms-linear-gradient(top, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n    background: -o-linear-gradient(top, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n    background: -webkit-gradient(linear, left top, left bottom, from(#ff0000), color-stop(0.17, #ffff00), color-stop(0.33, #00ff00), color-stop(0.5, #00ffff), color-stop(0.67, #0000ff), color-stop(0.83, #ff00ff), to(#ff0000));\n    background: -webkit-linear-gradient(top, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n    background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n/* IE filters do not support multiple color stops.\n   Generate 6 divs, line them up, and do two color gradients for each.\n   Yes, really.\n */\n.sp-1 {\n    height:17%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0000', endColorstr='#ffff00');\n}\n.sp-2 {\n    height:16%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff00', endColorstr='#00ff00');\n}\n.sp-3 {\n    height:17%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ff00', endColorstr='#00ffff');\n}\n.sp-4 {\n    height:17%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffff', endColorstr='#0000ff');\n}\n.sp-5 {\n    height:16%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0000ff', endColorstr='#ff00ff');\n}\n.sp-6 {\n    height:17%;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff00ff', endColorstr='#ff0000');\n}\n\n.sp-hidden {\n    display: none !important;\n}\n\n/* Clearfix hack */\n.sp-cf:before, .sp-cf:after { content: \"\"; display: table; }\n.sp-cf:after { clear: both; }\n.sp-cf { *zoom: 1; }\n\n/* Mobile devices, make hue slider bigger so it is easier to slide */\n@media (max-device-width: 480px) {\n    .sp-color { right: 40%; }\n    .sp-hue { left: 63%; }\n    .sp-fill { padding-top: 60%; }\n}\n.sp-dragger {\n   border-radius: 5px;\n   height: 5px;\n   width: 5px;\n   border: 1px solid #fff;\n   background: #000;\n   cursor: pointer;\n   position:absolute;\n   top:0;\n   left: 0;\n}\n.sp-slider {\n    position: absolute;\n    top:0;\n    cursor:pointer;\n    height: 3px;\n    left: -1px;\n    right: -1px;\n    border: 1px solid #000;\n    background: white;\n    opacity: .8;\n}\n\n/*\nTheme authors:\nHere are the basic themeable display options (colors, fonts, global widths).\nSee http://bgrins.github.io/spectrum/themes/ for instructions.\n*/\n\n.sp-container {\n    border-radius: 0;\n    background-color: #ECECEC;\n    border: solid 1px #f0c49B;\n    padding: 0;\n}\n.sp-container, .sp-container button, .sp-container input, .sp-color, .sp-hue, .sp-clear {\n    font: normal 12px \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Verdana, sans-serif;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.sp-top {\n    margin-bottom: 3px;\n}\n.sp-color, .sp-hue, .sp-clear {\n    border: solid 1px #666;\n}\n\n/* Input */\n.sp-input-container {\n    float:right;\n    width: 100px;\n    margin-bottom: 4px;\n}\n.sp-initial-disabled  .sp-input-container {\n    width: 100%;\n}\n.sp-input {\n   font-size: 12px !important;\n   border: 1px inset;\n   padding: 4px 5px;\n   margin: 0;\n   width: 100%;\n   background:transparent;\n   border-radius: 3px;\n   color: #222;\n}\n.sp-input:focus  {\n    border: 1px solid orange;\n}\n.sp-input.sp-validation-error {\n    border: 1px solid red;\n    background: #fdd;\n}\n.sp-picker-container , .sp-palette-container {\n    float:left;\n    position: relative;\n    padding: 10px;\n    padding-bottom: 300px;\n    margin-bottom: -290px;\n}\n.sp-picker-container {\n    width: 172px;\n    border-left: solid 1px #fff;\n}\n\n/* Palettes */\n.sp-palette-container {\n    border-right: solid 1px #ccc;\n}\n\n.sp-palette-only .sp-palette-container {\n    border: 0;\n}\n\n.sp-palette .sp-thumb-el {\n    display: block;\n    position:relative;\n    float:left;\n    width: 24px;\n    height: 15px;\n    margin: 3px;\n    cursor: pointer;\n    border:solid 2px transparent;\n}\n.sp-palette .sp-thumb-el:hover, .sp-palette .sp-thumb-el.sp-thumb-active {\n    border-color: orange;\n}\n.sp-thumb-el {\n    position:relative;\n}\n\n/* Initial */\n.sp-initial {\n    float: left;\n    border: solid 1px #333;\n}\n.sp-initial span {\n    width: 30px;\n    height: 25px;\n    border:none;\n    display:block;\n    float:left;\n    margin:0;\n}\n\n.sp-initial .sp-clear-display {\n    background-position: center;\n}\n\n/* Buttons */\n.sp-palette-button-container,\n.sp-button-container {\n    float: right;\n}\n\n/* Replacer (the little preview div that shows up instead of the <input>) */\n.sp-replacer {\n    margin:0;\n    overflow:hidden;\n    cursor:pointer;\n    padding: 4px;\n    display:inline-block;\n    *zoom: 1;\n    *display: inline;\n    border: solid 1px #91765d;\n    background: #eee;\n    color: #333;\n    vertical-align: middle;\n}\n.sp-replacer:hover, .sp-replacer.sp-active {\n    border-color: #F0C49B;\n    color: #111;\n}\n.sp-replacer.sp-disabled {\n    cursor:default;\n    border-color: silver;\n    color: silver;\n}\n.sp-dd {\n    padding: 2px 0;\n    height: 16px;\n    line-height: 16px;\n    float:left;\n    font-size:10px;\n}\n.sp-preview {\n    position:relative;\n    width:25px;\n    height: 20px;\n    border: solid 1px #222;\n    margin-right: 5px;\n    float:left;\n    z-index: 0;\n}\n\n.sp-palette {\n    *width: 220px;\n    max-width: 220px;\n}\n.sp-palette .sp-thumb-el {\n    width:16px;\n    height: 16px;\n    margin:2px 1px;\n    border: solid 1px #d0d0d0;\n}\n\n.sp-container {\n    padding-bottom:0;\n}\n\n\n/* Buttons: http://hellohappy.org/css3-buttons/ */\n.sp-container button {\n  background-color: #eeeeee;\n  background-image: -webkit-linear-gradient(top, #eeeeee, #cccccc);\n  background-image: -moz-linear-gradient(top, #eeeeee, #cccccc);\n  background-image: -ms-linear-gradient(top, #eeeeee, #cccccc);\n  background-image: -o-linear-gradient(top, #eeeeee, #cccccc);\n  background-image: linear-gradient(to bottom, #eeeeee, #cccccc);\n  border: 1px solid #ccc;\n  border-bottom: 1px solid #bbb;\n  border-radius: 3px;\n  color: #333;\n  font-size: 14px;\n  line-height: 1;\n  padding: 5px 4px;\n  text-align: center;\n  text-shadow: 0 1px 0 #eee;\n  vertical-align: middle;\n}\n.sp-container button:hover {\n    background-color: #dddddd;\n    background-image: -webkit-linear-gradient(top, #dddddd, #bbbbbb);\n    background-image: -moz-linear-gradient(top, #dddddd, #bbbbbb);\n    background-image: -ms-linear-gradient(top, #dddddd, #bbbbbb);\n    background-image: -o-linear-gradient(top, #dddddd, #bbbbbb);\n    background-image: linear-gradient(to bottom, #dddddd, #bbbbbb);\n    border: 1px solid #bbb;\n    border-bottom: 1px solid #999;\n    cursor: pointer;\n    text-shadow: 0 1px 0 #ddd;\n}\n.sp-container button:active {\n    border: 1px solid #aaa;\n    border-bottom: 1px solid #888;\n    -webkit-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n    -moz-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n    -ms-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n    -o-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n    box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n}\n.sp-cancel {\n    font-size: 11px;\n    color: #d93f3f !important;\n    margin:0;\n    padding:2px;\n    margin-right: 5px;\n    vertical-align: middle;\n    text-decoration:none;\n\n}\n.sp-cancel:hover {\n    color: #d93f3f !important;\n    text-decoration: underline;\n}\n\n\n.sp-palette span:hover, .sp-palette span.sp-thumb-active {\n    border-color: #000;\n}\n\n.sp-preview, .sp-alpha, .sp-thumb-el {\n    position:relative;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n}\n.sp-preview-inner, .sp-alpha-inner, .sp-thumb-inner {\n    display:block;\n    position:absolute;\n    top:0;left:0;bottom:0;right:0;\n}\n\n.sp-palette .sp-thumb-inner {\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n}\n\n.sp-palette .sp-thumb-light.sp-thumb-active .sp-thumb-inner {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpiYBhsgJFMffxAXABlN5JruT4Q3wfi/0DsT64h8UD8HmpIPCWG/KemIfOJCUB+Aoacx6EGBZyHBqI+WsDCwuQ9mhxeg2A210Ntfo8klk9sOMijaURm7yc1UP2RNCMbKE9ODK1HM6iegYLkfx8pligC9lCD7KmRof0ZhjQACDAAceovrtpVBRkAAAAASUVORK5CYII=);\n}\n\n.sp-palette .sp-thumb-dark.sp-thumb-active .sp-thumb-inner {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAMdJREFUOE+tkgsNwzAMRMugEAahEAahEAZhEAqlEAZhEAohEAYh81X2dIm8fKpEspLGvudPOsUYpxE2BIJCroJmEW9qJ+MKaBFhEMNabSy9oIcIPwrB+afvAUFoK4H0tMaQ3XtlrggDhOVVMuT4E5MMG0FBbCEYzjYT7OxLEvIHQLY2zWwQ3D+9luyOQTfKDiFD3iUIfPk8VqrKjgAiSfGFPecrg6HN6m/iBcwiDAo7WiBeawa+Kwh7tZoSCGLMqwlSAzVDhoK+6vH4G0P5wdkAAAAASUVORK5CYII=);\n}\n\n.sp-clear-display {\n    background-repeat:no-repeat;\n    background-position: center;\n    background-image: url(data:image/gif;base64,R0lGODlhFAAUAPcAAAAAAJmZmZ2dnZ6enqKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq/Hx8fLy8vT09PX19ff39/j4+Pn5+fr6+vv7+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAUABQAAAihAP9FoPCvoMGDBy08+EdhQAIJCCMybCDAAYUEARBAlFiQQoMABQhKUJBxY0SPICEYHBnggEmDKAuoPMjS5cGYMxHW3IiT478JJA8M/CjTZ0GgLRekNGpwAsYABHIypcAgQMsITDtWJYBR6NSqMico9cqR6tKfY7GeBCuVwlipDNmefAtTrkSzB1RaIAoXodsABiZAEFB06gIBWC1mLVgBa0AAOw==);\n}\n", ""]);
	
	// exports


/***/ }),
/* 2374 */
1485,
/* 2375 */
1486,
/* 2376 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var forEach = __webpack_require__(2377).forEach,
	    domQuery = __webpack_require__(2436),
	    domAttr = __webpack_require__(2438),
	    isUndefined = __webpack_require__(2439).isUndefined;
	
	var isList = function (list) {
	  return !(!list || Object.prototype.toString.call(list) !== '[object Array]');
	};
	
	var addEmptyParameter = function (list, concat) {
	  if (concat) {
	    list = list.concat([{name: '', value: ''}]);
	  }
	  return list;
	};
	
	function SelectEntryFactory(resource) {
	  var label = resource.label || resource.id,
	      allowEmpty = isUndefined(resource.allowEmpty) ? true : resource.allowEmpty,
	      selectOptions = (isList(resource.selectOptions)) ? addEmptyParameter(resource.selectOptions, allowEmpty)
	        : [{name: '', value: ''}],
	      modelProperty = resource.modelProperty;
	
	  resource.html =
	    '<div class="pfdjs-pp-field-wrapper" >' +
	    '<label for="pfdjs-' + resource.id + '" >' + label + '</label>' +
	    '<select id="pfdjs-' + resource.id + '" name="' + modelProperty + '" >';
	
	  forEach(selectOptions, function (option) {
	    resource.html += '<option value="' + option.value + '">' + option.name + '</option>';
	  });
	
	  resource.html += '</select></div>';
	
	  resource.get = function (element, propertyNode) {
	    var boValue = element.get(modelProperty) || 'default',
	        elementFields = domQuery.all('select#pfdjs-' + resource.id + ' > option', propertyNode);
	
	    forEach(elementFields, function (field) {
	      if (field.value === boValue) {
	        domAttr(field, 'selected', 'selected');
	      } else {
	        domAttr(field, 'selected', null);
	      }
	    });
	  };
	
	  return resource;
	}
	
	module.exports = SelectEntryFactory;

/***/ }),
/* 2377 */
[3128, 2378, 2384, 2386, 2390, 2393, 2395, 2398, 2400, 2403, 2404, 2385, 2387, 2405, 2406, 2408, 2409, 2401, 2410, 2415, 2416, 2418, 2420, 2421, 2425, 2429, 2432, 2433, 2435],
/* 2378 */
[3129, 2129, 2379],
/* 2379 */
[3130, 2380, 2381, 2274, 2064],
/* 2380 */
581,
/* 2381 */
[3131, 2382],
/* 2382 */
[3132, 2273, 2383],
/* 2383 */
[3133, 2112],
/* 2384 */
[3134, 2385],
/* 2385 */
[3135, 2328, 2382, 2306, 2064],
/* 2386 */
[3136, 2387],
/* 2387 */
[3137, 2388, 2389, 2306, 2064],
/* 2388 */
694,
/* 2389 */
[3138, 2303, 2383],
/* 2390 */
[3139, 2391, 2392, 2274, 2064, 2110],
/* 2391 */
699,
/* 2392 */
[3140, 2382],
/* 2393 */
[3141, 2291, 2394, 2274, 2064],
/* 2394 */
[3142, 2382],
/* 2395 */
[3143, 2396, 2397],
/* 2396 */
[3144, 2274, 2112, 2166],
/* 2397 */
[3145, 2178, 2274, 2089],
/* 2398 */
[3146, 2396, 2399],
/* 2399 */
[3147, 2178, 2274, 2089],
/* 2400 */
[3148, 2227, 2401],
/* 2401 */
[3149, 2063, 2274, 2402, 2064],
/* 2402 */
[3150, 2382, 2112],
/* 2403 */
[3151, 2227, 2401],
/* 2404 */
[3152, 2227, 2401, 2089],
/* 2405 */
[3153, 2129, 2379],
/* 2406 */
[3154, 2177, 2112, 2407, 2089, 2360],
/* 2407 */
[3119, 2066, 2064, 2069],
/* 2408 */
[3156, 2141, 2382, 2320, 2138, 2112],
/* 2409 */
[3157, 2129, 2379],
/* 2410 */
[3158, 2411, 2064],
/* 2411 */
[3159, 2063, 2274, 2402, 2412, 2121, 2413, 2139],
/* 2412 */
743,
/* 2413 */
[3160, 2414],
/* 2414 */
[3161, 2065],
/* 2415 */
[3162, 2379],
/* 2416 */
[3163, 2079, 2382, 2274, 2417, 2064],
/* 2417 */
749,
/* 2418 */
[3164, 2419, 2389, 2274, 2417, 2064],
/* 2419 */
751,
/* 2420 */
[3165, 2291, 2394, 2274, 2064, 2346],
/* 2421 */
[3166, 2422, 2424, 2064],
/* 2422 */
[3167, 2423],
/* 2423 */
756,
/* 2424 */
[3168, 2422, 2360],
/* 2425 */
[3169, 2426, 2428, 2064, 2110, 2089],
/* 2426 */
[3170, 2088, 2251, 2427],
/* 2427 */
[3171, 2423],
/* 2428 */
[3172, 2088, 2427, 2360],
/* 2429 */
[3173, 2430, 2431, 2064],
/* 2430 */
[3174, 2251, 2427],
/* 2431 */
[3175, 2427, 2360],
/* 2432 */
[3176, 2167, 2260, 2112, 2407, 2102],
/* 2433 */
[3179, 2283, 2274, 2434, 2064, 2110],
/* 2434 */
[3180, 2382],
/* 2435 */
[3181, 2227, 2411, 2138, 2110],
/* 2436 */
[2895, 2437],
/* 2437 */
5,
/* 2438 */
1626,
/* 2439 */
[3081, 2440, 2441, 2442, 2443, 2444, 2445, 2111, 2447, 2450, 2149, 2064, 2451, 2112, 2253, 2453, 2151, 2454, 2456, 2457, 2458, 2459, 2159, 2460, 2113, 2461, 2114, 2462, 2464, 2465, 2466, 2468, 2470, 2471, 2467, 2092, 2069, 2160, 2119, 2472, 2473, 2407, 2065, 2153, 2475, 2476, 2477, 2478, 2480, 2481, 2090, 2089, 2483, 2091, 2254, 2484, 2058],
/* 2440 */
[3082, 2064],
/* 2441 */
[3083, 2327],
/* 2442 */
[3084, 2327],
/* 2443 */
[3085, 2327],
/* 2444 */
[3086, 2327],
/* 2445 */
[3087, 2446, 2166],
/* 2446 */
375,
/* 2447 */
[3088, 2448, 2449],
/* 2448 */
377,
/* 2449 */
[3089, 2091],
/* 2450 */
[3091, 2449],
/* 2451 */
[3092, 2452, 2121, 2122],
/* 2452 */
[3093, 2066, 2069],
/* 2453 */
[3094, 2066, 2069],
/* 2454 */
[3095, 2455, 2121, 2122],
/* 2455 */
[3096, 2066, 2069],
/* 2456 */
[3097, 2069, 2160],
/* 2457 */
[3098, 2167, 2260, 2149, 2064, 2112, 2151, 2156, 2153],
/* 2458 */
[3099, 2277],
/* 2459 */
[3100, 2277],
/* 2460 */
[3102, 2061],
/* 2461 */
[3103, 2089],
/* 2462 */
[3106, 2463, 2121, 2122],
/* 2463 */
[3107, 2260, 2069],
/* 2464 */
[3108, 2276, 2293],
/* 2465 */
[3109, 2276, 2293],
/* 2466 */
[3110, 2467],
/* 2467 */
[3111, 2066, 2069],
/* 2468 */
[3112, 2132, 2469],
/* 2469 */
[3113, 2134, 2113, 2152],
/* 2470 */
419,
/* 2471 */
420,
/* 2472 */
[3116, 2461],
/* 2473 */
[3117, 2474, 2121, 2122],
/* 2474 */
[3118, 2260, 2069],
/* 2475 */
427,
/* 2476 */
[3120, 2260, 2069],
/* 2477 */
[3121, 2066, 2069],
/* 2478 */
[3122, 2479, 2449],
/* 2479 */
431,
/* 2480 */
[3123, 2449],
/* 2481 */
[3124, 2060, 2251, 2260, 2112, 2407, 2482, 2265, 2286, 2075, 2360],
/* 2482 */
434,
/* 2483 */
[3126, 2088, 2089],
/* 2484 */
[3127, 2088, 2089],
/* 2485 */
/***/ (function(module, exports) {

	'use strict';
	
	function SpreadsheetEntryFactory(){
	
	}
	
	module.exports = SpreadsheetEntryFactory;

/***/ }),
/* 2486 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  __init__: ['propertiesPanel'],
	  propertiesPanel: ['type', __webpack_require__(2487)],
	  __depends__: [
	    //
	  ]
	};

/***/ }),
/* 2487 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var forEach = __webpack_require__(2377).forEach,
	    forIn = __webpack_require__(2188).forIn,
	    debounce = __webpack_require__(2488).debounce,
	    _set = __webpack_require__(2188).set,
	    _get = __webpack_require__(2188).get,
	    domify = __webpack_require__(2545),
	    domQuery = __webpack_require__(2436),
	    domAttr = __webpack_require__(2438),
	    domClear = __webpack_require__(2547),
	    scrollTabs = __webpack_require__(2548),
	    domClasses = __webpack_require__(2875),
	    domDelegate = __webpack_require__(2878),
	    $ = __webpack_require__(2370)
	    ;
	
	__webpack_require__(2883);
	
	function PropertiesPanel(sideTabsProvider, eventBus, propertiesProvider, diagramSettings) {
	  this._sideTabsProvider = sideTabsProvider;
	  this._eventBus = eventBus;
	  this._propertiesProvider = propertiesProvider;
	  this._diagramSettings = diagramSettings;
	
	  this._entries = {};
	  this._init();
	}
	
	PropertiesPanel.$inject = [
	  'sideTabsProvider',
	  'eventBus',
	  'propertiesProvider',
	  'd3polytree.definitions.settings'
	];
	
	module.exports = PropertiesPanel;
	
	PropertiesPanel.prototype._init = function(){
	  this._registerSideTab();
	  this._registerSelectionListener();
	};
	
	
	PropertiesPanel.prototype._handleChange = function(event){
	  var entryId = $(event.delegateTarget).attr('name') || event.propertyId,
	      newVal = $(event.delegateTarget).val() || _get(event.definition, event.propertyId) ,
	      entry = this._entries[entryId];
	  if (entry){
	    var scope = entry.scope,
	        props = {};
	    _set(props, entryId, newVal);
	    scope.set.call(scope, entry.definition, props);
	    // update the drawing
	    this._propertiesProvider.updateDrawing(entry.definition);
	  }
	};
	
	PropertiesPanel.prototype._registerInputChangeHandlers = function(){
	  var that = this;
	  // debounce update only elements that are target of key events,
	  // i.e. INPUT and TEXTAREA. SELECTs will trigger an immediate update anyway.
	  domDelegate.bind(this._scrolltabsContainer, 'input, textarea', 'input', debounce(function(){
	    that._handleChange.apply(that, arguments);
	  }, 300));
	  // domDelegate.bind(container, 'input, textarea, select', 'change', handleChange);
	  domDelegate.bind(this._scrolltabsContainer, 'input, textarea, select', 'change', function(){
	    that._handleChange.apply(that, arguments);
	  });
	  this._eventBus.on('PropertiesPanel.propertyChanged', function(propertyId, definition){
	    that._handleChange.call(that, {definition: definition, propertyId: propertyId});
	  });
	};
	
	PropertiesPanel.prototype._registerSelectionListener = function(){
	  var that = this;
	  this._eventBus.on('selection.changed', function(oldSelection, newSelection){
	    var selected = that._diagramSettings;
	    if (newSelection.length === 1 && (oldSelection.length !== 1 || oldSelection[0].definition.id !== newSelection[0].definition.id)){
	      selected = newSelection[0].definition;
	    }
	    that._update(selected);
	  });
	};
	
	PropertiesPanel.prototype._registerSideTab = function(){
	  var that = this;
	  this._sideTabsProvider.
	  registerSideTab({
	    title: 'Properties',
	    iconClassName: 'icon-sliders',
	    action: {
	      created: function (content) {
	        that._drawPanel(content);
	      }//,
	      // click: function () {
	      //   console.log('that._reIndexItems();', arguments);
	      // },
	      // close: function () {
	      //   console.log('search panel close');
	      // }
	    },
	  }, 1);
	};
	
	PropertiesPanel.prototype._selectTab = function(tabId){
	  var allTabs = domQuery.all('.tab-sheet', this._scrolltabsTabs);
	  forEach(allTabs, function(t){
	    domClasses(t).remove('tab-sheet-active');
	  });
	  var activeTab = domQuery('[data-tab-target="' + tabId + '"]', this._scrolltabsTabs);
	  domClasses(activeTab).add('tab-sheet-active');
	
	  var allContents = domQuery.all('.pfdjs-pp-content', this._scrolltabsContents);
	  forEach(allContents, function(t){
	    domClasses(t).remove('open');
	  });
	  var activeContent = domQuery('[data-tab-target="' + tabId + '"]', this._scrolltabsContents);
	  domClasses(activeContent).add('open');
	};
	
	PropertiesPanel.prototype._drawPanel = function(content){
	  //
	  this._drawContainer(content);
	  this._update(this._diagramSettings);
	};
	
	PropertiesPanel.prototype._drawContainer = function(content){
	  //
	  var that = this;
	  this._scrolltabsContainer = domify(PropertiesPanel.HTML_MARKUP);
	
	  content.insertBefore(this._scrolltabsContainer, content.childNodes[0]);
	
	  this._scrolltabsEntries = domQuery('.pfdjs-pp-tabs', this._scrolltabsContainer);
	  this._scrolltabsTabs = domQuery('.tab-sheets', this._scrolltabsEntries);
	  this._scrolltabsContents = domQuery('.pfdjs-pp-contents', this._scrolltabsContainer);
	
	  domDelegate.bind(this._scrolltabsContainer, '.tab-sheet', 'click', function (event) {
	    var tabId = domAttr(event.delegateTarget, 'data-tab-target');
	    that._selectTab(tabId);
	    event.stopImmediatePropagation();
	  });
	  this._registerInputChangeHandlers();
	
	};
	
	PropertiesPanel.prototype._update = function(definition){
	  //
	  if (this._scrolltabsEntries) {
	    domClear(this._scrolltabsTabs);
	    domClear(this._scrolltabsContents);
	  }
	  if (definition) {
	    this._drawEntries(definition);
	  }
	};
	
	PropertiesPanel.prototype._drawEntries = function(definition){
	  var that = this,
	      tabs = this._propertiesProvider.getTabs(definition),
	      tabs2 = [];
	
	  this._entries = [];
	  // create the tabs
	  forEach(tabs, function(t){
	    var tabHasContent = false;
	    var content = domify('<div class="pfdjs-pp-content" data-tab-target="'+t.id+'"></div>');
	    // create the groups
	    forEach(t.groups, function(g){
	      var groupHasContent = g.entries.length > 0;
	      var groupContent = domify('<div class="pfdjs-pp-content-group" data-group-target="'+g.id+'">' +
	        '<div class="tab-content-group-title">' + g.label + '</div>' +
	        '</div>');
	      // create the entries
	      forEach(g.entries, function(e){
	        var entryContent = domify('<div>'+e.html+'</div>');
	        groupContent.appendChild(entryContent);
	        that._entries[e.id] ={
	          scope: e,
	          definition: definition,
	          formNode: entryContent
	        };
	      });
	      if (groupHasContent){
	        content.appendChild(groupContent);
	        tabHasContent = true;
	      }
	    });
	    if (tabHasContent){
	      that._scrolltabsContents.appendChild(content);
	      tabs2.push(t);
	    }
	  });
	  // fill entries
	  forIn(this._entries, function(e){
	    e.scope.get.call(e.scope, e.definition, e.formNode);
	  });
	  // draw the tabs
	  var firstTab = null;
	  forEach(tabs2, function(t){
	    if (!firstTab){
	      firstTab = t.id;
	    }
	    var tab = domify('<li class="tab-sheet" data-tab-target="'+t.id+'">'+
	      '<a href="#">'+t.label+'</a>'+
	      '</li>');
	    that._scrolltabsTabs.appendChild(tab);
	  });
	  if (this._scTabs){
	    // destroy the previous event listeners
	    this._scTabs.removeAllListeners();
	  }
	  this._scTabs = new scrollTabs(
	    this._scrolltabsEntries,
	    {
	      selectors: {
	        tabsContainer: '.tab-sheets',
	        tab: '.tab-sheet',
	        ignore: '.tab-sheet-ignore',
	        active: '.tab-sheet-active'
	      }
	    }
	  );
	
	  this._scTabs.on('scroll', function(newActiveTab){
	    var tabId = domAttr(newActiveTab, 'data-tab-target');
	    that._selectTab(tabId);
	  });
	
	  this._selectTab(firstTab);
	
	};
	
	/* markup definition */
	
	PropertiesPanel.HTML_MARKUP =
	  '<div id="pfdjs-pp-container">' +
	  '  <div class="pfdjs-pp-tabs">' +
	  '    <ul class="tab-sheets"></ul>' +
	  '  </div>' +
	  '  <div class="pfdjs-pp-contents">' +
	  '  </div>' +
	  '</div>';

/***/ }),
/* 2488 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  'after': __webpack_require__(2489),
	  'ary': __webpack_require__(2490),
	  'before': __webpack_require__(2523),
	  'bind': __webpack_require__(2524),
	  'bindKey': __webpack_require__(2525),
	  'curry': __webpack_require__(2526),
	  'curryRight': __webpack_require__(2527),
	  'debounce': __webpack_require__(2528),
	  'defer': __webpack_require__(2530),
	  'delay': __webpack_require__(2532),
	  'flip': __webpack_require__(2533),
	  'memoize': __webpack_require__(2200),
	  'negate': __webpack_require__(2346),
	  'once': __webpack_require__(2534),
	  'overArgs': __webpack_require__(2535),
	  'partial': __webpack_require__(2537),
	  'partialRight': __webpack_require__(2538),
	  'rearg': __webpack_require__(2539),
	  'rest': __webpack_require__(2540),
	  'spread': __webpack_require__(2541),
	  'throttle': __webpack_require__(2542),
	  'unary': __webpack_require__(2543),
	  'wrap': __webpack_require__(2544)
	};


/***/ }),
/* 2489 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(2089);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * The opposite of `_.before`; this method creates a function that invokes
	 * `func` once it's called `n` or more times.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {number} n The number of calls before `func` is invoked.
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * var saves = ['profile', 'settings'];
	 *
	 * var done = _.after(saves.length, function() {
	 *   console.log('done saving!');
	 * });
	 *
	 * _.forEach(saves, function(type) {
	 *   asyncSave({ 'type': type, 'complete': done });
	 * });
	 * // => Logs 'done saving!' after the two async saves have completed.
	 */
	function after(n, func) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  n = toInteger(n);
	  return function() {
	    if (--n < 1) {
	      return func.apply(this, arguments);
	    }
	  };
	}
	
	module.exports = after;


/***/ }),
/* 2490 */
/***/ (function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(2491);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_ARY_FLAG = 128;
	
	/**
	 * Creates a function that invokes `func`, with up to `n` arguments,
	 * ignoring any additional arguments.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} [n=func.length] The arity cap.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new capped function.
	 * @example
	 *
	 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	 * // => [6, 8, 10]
	 */
	function ary(func, n, guard) {
	  n = guard ? undefined : n;
	  n = (func && n == null) ? func.length : n;
	  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
	}
	
	module.exports = ary;


/***/ }),
/* 2491 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(2492),
	    createBind = __webpack_require__(2494),
	    createCurry = __webpack_require__(2496),
	    createHybrid = __webpack_require__(2497),
	    createPartial = __webpack_require__(2521),
	    getData = __webpack_require__(2505),
	    mergeData = __webpack_require__(2522),
	    setData = __webpack_require__(2512),
	    setWrapToString = __webpack_require__(2513),
	    toInteger = __webpack_require__(2089);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags.
	 *    1 - `_.bind`
	 *    2 - `_.bindKey`
	 *    4 - `_.curry` or `_.curryRight` of a bound function
	 *    8 - `_.curry`
	 *   16 - `_.curryRight`
	 *   32 - `_.partial`
	 *   64 - `_.partialRight`
	 *  128 - `_.rearg`
	 *  256 - `_.ary`
	 *  512 - `_.flip`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	  arity = arity === undefined ? arity : toInteger(arity);
	  length -= holders ? holders.length : 0;
	
	  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;
	
	    partials = holders = undefined;
	  }
	  var data = isBindKey ? undefined : getData(func);
	
	  var newData = [
	    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	    argPos, ary, arity
	  ];
	
	  if (data) {
	    mergeData(newData, data);
	  }
	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] === undefined
	    ? (isBindKey ? 0 : func.length)
	    : nativeMax(newData[9] - length, 0);
	
	  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
	    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
	  }
	  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
	    var result = createBind(func, bitmask, thisArg);
	  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
	    result = createCurry(func, bitmask, arity);
	  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
	    result = createPartial(func, bitmask, thisArg, partials);
	  } else {
	    result = createHybrid.apply(undefined, newData);
	  }
	  var setter = data ? baseSetData : setData;
	  return setWrapToString(setter(result, newData), func, bitmask);
	}
	
	module.exports = createWrap;


/***/ }),
/* 2492 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(2139),
	    metaMap = __webpack_require__(2493);
	
	/**
	 * The base implementation of `setData` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetData = !metaMap ? identity : function(func, data) {
	  metaMap.set(func, data);
	  return func;
	};
	
	module.exports = baseSetData;


/***/ }),
/* 2493 */
/***/ (function(module, exports, __webpack_require__) {

	var WeakMap = __webpack_require__(2264);
	
	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;
	
	module.exports = metaMap;


/***/ }),
/* 2494 */
/***/ (function(module, exports, __webpack_require__) {

	var createCtor = __webpack_require__(2495),
	    root = __webpack_require__(2061);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;
	
	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createBind(func, bitmask, thisArg) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = createCtor(func);
	
	  function wrapper() {
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }
	  return wrapper;
	}
	
	module.exports = createBind;


/***/ }),
/* 2495 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(2232),
	    isObject = __webpack_require__(2092);
	
	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtor(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);
	
	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}
	
	module.exports = createCtor;


/***/ }),
/* 2496 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(2141),
	    createCtor = __webpack_require__(2495),
	    createHybrid = __webpack_require__(2497),
	    createRecurry = __webpack_require__(2501),
	    getHolder = __webpack_require__(2518),
	    replaceHolders = __webpack_require__(2520),
	    root = __webpack_require__(2061);
	
	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCurry(func, bitmask, arity) {
	  var Ctor = createCtor(func);
	
	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = getHolder(wrapper);
	
	    while (index--) {
	      args[index] = arguments[index];
	    }
	    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	      ? []
	      : replaceHolders(args, placeholder);
	
	    length -= holders.length;
	    if (length < arity) {
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, undefined,
	        args, holders, undefined, undefined, arity - length);
	    }
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return apply(fn, this, args);
	  }
	  return wrapper;
	}
	
	module.exports = createCurry;


/***/ }),
/* 2497 */
/***/ (function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(2498),
	    composeArgsRight = __webpack_require__(2499),
	    countHolders = __webpack_require__(2500),
	    createCtor = __webpack_require__(2495),
	    createRecurry = __webpack_require__(2501),
	    getHolder = __webpack_require__(2518),
	    reorder = __webpack_require__(2519),
	    replaceHolders = __webpack_require__(2520),
	    root = __webpack_require__(2061);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_ARY_FLAG = 128,
	    WRAP_FLIP_FLAG = 512;
	
	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & WRAP_ARY_FLAG,
	      isBind = bitmask & WRAP_BIND_FLAG,
	      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
	      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
	      isFlip = bitmask & WRAP_FLIP_FLAG,
	      Ctor = isBindKey ? undefined : createCtor(func);
	
	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length;
	
	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (isCurried) {
	      var placeholder = getHolder(wrapper),
	          holdersCount = countHolders(args, placeholder);
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders, isCurried);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }
	    length -= holdersCount;
	    if (isCurried && length < arity) {
	      var newHolders = replaceHolders(args, placeholder);
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	        args, newHolders, argPos, ary, arity - length
	      );
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;
	
	    length = args.length;
	    if (argPos) {
	      args = reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }
	    if (isAry && ary < length) {
	      args.length = ary;
	    }
	    if (this && this !== root && this instanceof wrapper) {
	      fn = Ctor || createCtor(fn);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}
	
	module.exports = createHybrid;


/***/ }),
/* 2498 */
/***/ (function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;
	
	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }
	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}
	
	module.exports = composeArgs;


/***/ }),
/* 2499 */
/***/ (function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;
	
	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }
	  return result;
	}
	
	module.exports = composeArgsRight;


/***/ }),
/* 2500 */
/***/ (function(module, exports) {

	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;
	
	  while (length--) {
	    if (array[length] === placeholder) {
	      ++result;
	    }
	  }
	  return result;
	}
	
	module.exports = countHolders;


/***/ }),
/* 2501 */
/***/ (function(module, exports, __webpack_require__) {

	var isLaziable = __webpack_require__(2502),
	    setData = __webpack_require__(2512),
	    setWrapToString = __webpack_require__(2513);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64;
	
	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & WRAP_CURRY_FLAG,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;
	
	  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
	  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
	
	  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
	    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
	  }
	  var newData = [
	    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	    newHoldersRight, argPos, ary, arity
	  ];
	
	  var result = wrapFunc.apply(undefined, newData);
	  if (isLaziable(func)) {
	    setData(result, newData);
	  }
	  result.placeholder = placeholder;
	  return setWrapToString(result, func, bitmask);
	}
	
	module.exports = createRecurry;


/***/ }),
/* 2502 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(2503),
	    getData = __webpack_require__(2505),
	    getFuncName = __webpack_require__(2507),
	    lodash = __webpack_require__(2509);
	
	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	 *  else `false`.
	 */
	function isLaziable(func) {
	  var funcName = getFuncName(func),
	      other = lodash[funcName];
	
	  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	    return false;
	  }
	  if (func === other) {
	    return true;
	  }
	  var data = getData(other);
	  return !!data && func === data[0];
	}
	
	module.exports = isLaziable;


/***/ }),
/* 2503 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(2232),
	    baseLodash = __webpack_require__(2504);
	
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	
	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @constructor
	 * @param {*} value The value to wrap.
	 */
	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = MAX_ARRAY_LENGTH;
	  this.__views__ = [];
	}
	
	// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;
	
	module.exports = LazyWrapper;


/***/ }),
/* 2504 */
/***/ (function(module, exports) {

	/**
	 * The function whose prototype chain sequence wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {
	  // No operation performed.
	}
	
	module.exports = baseLodash;


/***/ }),
/* 2505 */
/***/ (function(module, exports, __webpack_require__) {

	var metaMap = __webpack_require__(2493),
	    noop = __webpack_require__(2506);
	
	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */
	var getData = !metaMap ? noop : function(func) {
	  return metaMap.get(func);
	};
	
	module.exports = getData;


/***/ }),
/* 2506 */
845,
/* 2507 */
/***/ (function(module, exports, __webpack_require__) {

	var realNames = __webpack_require__(2508);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */
	function getFuncName(func) {
	  var result = (func.name + ''),
	      array = realNames[result],
	      length = hasOwnProperty.call(realNames, result) ? array.length : 0;
	
	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;
	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }
	  return result;
	}
	
	module.exports = getFuncName;


/***/ }),
/* 2508 */
/***/ (function(module, exports) {

	/** Used to lookup unminified function names. */
	var realNames = {};
	
	module.exports = realNames;


/***/ }),
/* 2509 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(2503),
	    LodashWrapper = __webpack_require__(2510),
	    baseLodash = __webpack_require__(2504),
	    isArray = __webpack_require__(2064),
	    isObjectLike = __webpack_require__(2069),
	    wrapperClone = __webpack_require__(2511);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit method
	 * chain sequences. Methods that operate on and return arrays, collections,
	 * and functions can be chained together. Methods that retrieve a single value
	 * or may return a primitive value will automatically end the chain sequence
	 * and return the unwrapped value. Otherwise, the value must be unwrapped
	 * with `_#value`.
	 *
	 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	 * enabled using `_.chain`.
	 *
	 * The execution of chained methods is lazy, that is, it's deferred until
	 * `_#value` is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion.
	 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	 * the creation of intermediate arrays and can greatly reduce the number of
	 * iteratee executions. Sections of a chain sequence qualify for shortcut
	 * fusion if the section is applied to an array and iteratees accept only
	 * one argument. The heuristic for whether a section qualifies for shortcut
	 * fusion is subject to change.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	 * `zipObject`, `zipObjectDeep`, and `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	 * `upperFirst`, `value`, and `words`
	 *
	 * @name _
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // Returns an unwrapped value.
	 * wrapped.reduce(_.add);
	 * // => 6
	 *
	 * // Returns a wrapped value.
	 * var squares = wrapped.map(square);
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */
	function lodash(value) {
	  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	    if (value instanceof LodashWrapper) {
	      return value;
	    }
	    if (hasOwnProperty.call(value, '__wrapped__')) {
	      return wrapperClone(value);
	    }
	  }
	  return new LodashWrapper(value);
	}
	
	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype = baseLodash.prototype;
	lodash.prototype.constructor = lodash;
	
	module.exports = lodash;


/***/ }),
/* 2510 */
/***/ (function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(2232),
	    baseLodash = __webpack_require__(2504);
	
	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable explicit method chain sequences.
	 */
	function LodashWrapper(value, chainAll) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__chain__ = !!chainAll;
	  this.__index__ = 0;
	  this.__values__ = undefined;
	}
	
	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;
	
	module.exports = LodashWrapper;


/***/ }),
/* 2511 */
/***/ (function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(2503),
	    LodashWrapper = __webpack_require__(2510),
	    copyArray = __webpack_require__(2251);
	
	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */
	function wrapperClone(wrapper) {
	  if (wrapper instanceof LazyWrapper) {
	    return wrapper.clone();
	  }
	  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	  result.__actions__ = copyArray(wrapper.__actions__);
	  result.__index__  = wrapper.__index__;
	  result.__values__ = wrapper.__values__;
	  return result;
	}
	
	module.exports = wrapperClone;


/***/ }),
/* 2512 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(2492),
	    shortOut = __webpack_require__(2145);
	
	/**
	 * Sets metadata for `func`.
	 *
	 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	 * period of time, it will trip its breaker and transition to an identity
	 * function to avoid garbage collection pauses in V8. See
	 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	 * for more details.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var setData = shortOut(baseSetData);
	
	module.exports = setData;


/***/ }),
/* 2513 */
/***/ (function(module, exports, __webpack_require__) {

	var getWrapDetails = __webpack_require__(2514),
	    insertWrapDetails = __webpack_require__(2515),
	    setToString = __webpack_require__(2142),
	    updateWrapDetails = __webpack_require__(2516);
	
	/**
	 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	 * with wrapper details in a comment at the top of the source body.
	 *
	 * @private
	 * @param {Function} wrapper The function to modify.
	 * @param {Function} reference The reference function.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Function} Returns `wrapper`.
	 */
	function setWrapToString(wrapper, reference, bitmask) {
	  var source = (reference + '');
	  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	}
	
	module.exports = setWrapToString;


/***/ }),
/* 2514 */
/***/ (function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	    reSplitDetails = /,? & /;
	
	/**
	 * Extracts wrapper details from the `source` body comment.
	 *
	 * @private
	 * @param {string} source The source to inspect.
	 * @returns {Array} Returns the wrapper details.
	 */
	function getWrapDetails(source) {
	  var match = source.match(reWrapDetails);
	  return match ? match[1].split(reSplitDetails) : [];
	}
	
	module.exports = getWrapDetails;


/***/ }),
/* 2515 */
/***/ (function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
	
	/**
	 * Inserts wrapper `details` in a comment at the top of the `source` body.
	 *
	 * @private
	 * @param {string} source The source to modify.
	 * @returns {Array} details The details to insert.
	 * @returns {string} Returns the modified source.
	 */
	function insertWrapDetails(source, details) {
	  var length = details.length;
	  if (!length) {
	    return source;
	  }
	  var lastIndex = length - 1;
	  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	  details = details.join(length > 2 ? ', ' : ' ');
	  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}
	
	module.exports = insertWrapDetails;


/***/ }),
/* 2516 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(2328),
	    arrayIncludes = __webpack_require__(2517);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_CURRY_RIGHT_FLAG = 16,
	    WRAP_PARTIAL_FLAG = 32,
	    WRAP_PARTIAL_RIGHT_FLAG = 64,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256,
	    WRAP_FLIP_FLAG = 512;
	
	/** Used to associate wrap methods with their bit flags. */
	var wrapFlags = [
	  ['ary', WRAP_ARY_FLAG],
	  ['bind', WRAP_BIND_FLAG],
	  ['bindKey', WRAP_BIND_KEY_FLAG],
	  ['curry', WRAP_CURRY_FLAG],
	  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
	  ['flip', WRAP_FLIP_FLAG],
	  ['partial', WRAP_PARTIAL_FLAG],
	  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
	  ['rearg', WRAP_REARG_FLAG]
	];
	
	/**
	 * Updates wrapper `details` based on `bitmask` flags.
	 *
	 * @private
	 * @returns {Array} details The details to modify.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Array} Returns `details`.
	 */
	function updateWrapDetails(details, bitmask) {
	  arrayEach(wrapFlags, function(pair) {
	    var value = '_.' + pair[0];
	    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	      details.push(value);
	    }
	  });
	  return details.sort();
	}
	
	module.exports = updateWrapDetails;


/***/ }),
/* 2517 */
[3182, 2177],
/* 2518 */
/***/ (function(module, exports) {

	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getHolder(func) {
	  var object = func;
	  return object.placeholder;
	}
	
	module.exports = getHolder;


/***/ }),
/* 2519 */
/***/ (function(module, exports, __webpack_require__) {

	var copyArray = __webpack_require__(2251),
	    isIndex = __webpack_require__(2115);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = copyArray(array);
	
	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}
	
	module.exports = reorder;


/***/ }),
/* 2520 */
/***/ (function(module, exports) {

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';
	
	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }
	  return result;
	}
	
	module.exports = replaceHolders;


/***/ }),
/* 2521 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(2141),
	    createCtor = __webpack_require__(2495),
	    root = __webpack_require__(2061);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1;
	
	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createPartial(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & WRAP_BIND_FLAG,
	      Ctor = createCtor(func);
	
	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	
	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    return apply(fn, isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}
	
	module.exports = createPartial;


/***/ }),
/* 2522 */
/***/ (function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(2498),
	    composeArgsRight = __webpack_require__(2499),
	    replaceHolders = __webpack_require__(2520);
	
	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_CURRY_BOUND_FLAG = 4,
	    WRAP_CURRY_FLAG = 8,
	    WRAP_ARY_FLAG = 128,
	    WRAP_REARG_FLAG = 256;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Merges the function metadata of `source` into `data`.
	 *
	 * Merging metadata reduces the number of wrappers used to invoke a function.
	 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	 * may be applied regardless of execution order. Methods like `_.ary` and
	 * `_.rearg` modify function arguments, making the order in which they are
	 * executed important, preventing the merging of metadata. However, we make
	 * an exception for a safe combined case where curried functions have `_.ary`
	 * and or `_.rearg` applied.
	 *
	 * @private
	 * @param {Array} data The destination metadata.
	 * @param {Array} source The source metadata.
	 * @returns {Array} Returns `data`.
	 */
	function mergeData(data, source) {
	  var bitmask = data[1],
	      srcBitmask = source[1],
	      newBitmask = bitmask | srcBitmask,
	      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
	
	  var isCombo =
	    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
	    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
	    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));
	
	  // Exit early if metadata can't be merged.
	  if (!(isCommon || isCombo)) {
	    return data;
	  }
	  // Use source `thisArg` if available.
	  if (srcBitmask & WRAP_BIND_FLAG) {
	    data[2] = source[2];
	    // Set when currying a bound function.
	    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
	  }
	  // Compose partial arguments.
	  var value = source[3];
	  if (value) {
	    var partials = data[3];
	    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	  }
	  // Compose partial right arguments.
	  value = source[5];
	  if (value) {
	    partials = data[5];
	    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	  }
	  // Use source `argPos` if available.
	  value = source[7];
	  if (value) {
	    data[7] = value;
	  }
	  // Use source `ary` if it's smaller.
	  if (srcBitmask & WRAP_ARY_FLAG) {
	    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	  }
	  // Use source `arity` if one is not provided.
	  if (data[9] == null) {
	    data[9] = source[9];
	  }
	  // Use source `func` and merge bitmasks.
	  data[0] = source[0];
	  data[1] = newBitmask;
	
	  return data;
	}
	
	module.exports = mergeData;


/***/ }),
/* 2523 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(2089);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that invokes `func`, with the `this` binding and arguments
	 * of the created function, while it's called less than `n` times. Subsequent
	 * calls to the created function return the result of the last `func` invocation.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {number} n The number of calls at which `func` is no longer invoked.
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * jQuery(element).on('click', _.before(5, addContactToList));
	 * // => Allows adding up to 4 contacts to the list.
	 */
	function before(n, func) {
	  var result;
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  n = toInteger(n);
	  return function() {
	    if (--n > 0) {
	      result = func.apply(this, arguments);
	    }
	    if (n <= 1) {
	      func = undefined;
	    }
	    return result;
	  };
	}
	
	module.exports = before;


/***/ }),
/* 2524 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(2138),
	    createWrap = __webpack_require__(2491),
	    getHolder = __webpack_require__(2518),
	    replaceHolders = __webpack_require__(2520);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_PARTIAL_FLAG = 32;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of `thisArg`
	 * and `partials` prepended to the arguments it receives.
	 *
	 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	 * property of bound functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new bound function.
	 * @example
	 *
	 * function greet(greeting, punctuation) {
	 *   return greeting + ' ' + this.user + punctuation;
	 * }
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * var bound = _.bind(greet, object, 'hi');
	 * bound('!');
	 * // => 'hi fred!'
	 *
	 * // Bound with placeholders.
	 * var bound = _.bind(greet, object, _, '!');
	 * bound('hi');
	 * // => 'hi fred!'
	 */
	var bind = baseRest(function(func, thisArg, partials) {
	  var bitmask = WRAP_BIND_FLAG;
	  if (partials.length) {
	    var holders = replaceHolders(partials, getHolder(bind));
	    bitmask |= WRAP_PARTIAL_FLAG;
	  }
	  return createWrap(func, bitmask, thisArg, partials, holders);
	});
	
	// Assign default placeholders.
	bind.placeholder = {};
	
	module.exports = bind;


/***/ }),
/* 2525 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(2138),
	    createWrap = __webpack_require__(2491),
	    getHolder = __webpack_require__(2518),
	    replaceHolders = __webpack_require__(2520);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_BIND_FLAG = 1,
	    WRAP_BIND_KEY_FLAG = 2,
	    WRAP_PARTIAL_FLAG = 32;
	
	/**
	 * Creates a function that invokes the method at `object[key]` with `partials`
	 * prepended to the arguments it receives.
	 *
	 * This method differs from `_.bind` by allowing bound functions to reference
	 * methods that may be redefined or don't yet exist. See
	 * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	 * for more details.
	 *
	 * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Function
	 * @param {Object} object The object to invoke the method on.
	 * @param {string} key The key of the method.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new bound function.
	 * @example
	 *
	 * var object = {
	 *   'user': 'fred',
	 *   'greet': function(greeting, punctuation) {
	 *     return greeting + ' ' + this.user + punctuation;
	 *   }
	 * };
	 *
	 * var bound = _.bindKey(object, 'greet', 'hi');
	 * bound('!');
	 * // => 'hi fred!'
	 *
	 * object.greet = function(greeting, punctuation) {
	 *   return greeting + 'ya ' + this.user + punctuation;
	 * };
	 *
	 * bound('!');
	 * // => 'hiya fred!'
	 *
	 * // Bound with placeholders.
	 * var bound = _.bindKey(object, 'greet', _, '!');
	 * bound('hi');
	 * // => 'hiya fred!'
	 */
	var bindKey = baseRest(function(object, key, partials) {
	  var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
	  if (partials.length) {
	    var holders = replaceHolders(partials, getHolder(bindKey));
	    bitmask |= WRAP_PARTIAL_FLAG;
	  }
	  return createWrap(key, bitmask, object, partials, holders);
	});
	
	// Assign default placeholders.
	bindKey.placeholder = {};
	
	module.exports = bindKey;


/***/ }),
/* 2526 */
/***/ (function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(2491);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_CURRY_FLAG = 8;
	
	/**
	 * Creates a function that accepts arguments of `func` and either invokes
	 * `func` returning its result, if at least `arity` number of arguments have
	 * been provided, or returns a function that accepts the remaining `func`
	 * arguments, and so on. The arity of `func` may be specified if `func.length`
	 * is not sufficient.
	 *
	 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Function
	 * @param {Function} func The function to curry.
	 * @param {number} [arity=func.length] The arity of `func`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new curried function.
	 * @example
	 *
	 * var abc = function(a, b, c) {
	 *   return [a, b, c];
	 * };
	 *
	 * var curried = _.curry(abc);
	 *
	 * curried(1)(2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2, 3);
	 * // => [1, 2, 3]
	 *
	 * // Curried with placeholders.
	 * curried(1)(_, 3)(2);
	 * // => [1, 2, 3]
	 */
	function curry(func, arity, guard) {
	  arity = guard ? undefined : arity;
	  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	  result.placeholder = curry.placeholder;
	  return result;
	}
	
	// Assign default placeholders.
	curry.placeholder = {};
	
	module.exports = curry;


/***/ }),
/* 2527 */
/***/ (function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(2491);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_CURRY_RIGHT_FLAG = 16;
	
	/**
	 * This method is like `_.curry` except that arguments are applied to `func`
	 * in the manner of `_.partialRight` instead of `_.partial`.
	 *
	 * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of curried functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to curry.
	 * @param {number} [arity=func.length] The arity of `func`.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Function} Returns the new curried function.
	 * @example
	 *
	 * var abc = function(a, b, c) {
	 *   return [a, b, c];
	 * };
	 *
	 * var curried = _.curryRight(abc);
	 *
	 * curried(3)(2)(1);
	 * // => [1, 2, 3]
	 *
	 * curried(2, 3)(1);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2, 3);
	 * // => [1, 2, 3]
	 *
	 * // Curried with placeholders.
	 * curried(3)(1, _)(2);
	 * // => [1, 2, 3]
	 */
	function curryRight(func, arity, guard) {
	  arity = guard ? undefined : arity;
	  var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
	  result.placeholder = curryRight.placeholder;
	  return result;
	}
	
	// Assign default placeholders.
	curryRight.placeholder = {};
	
	module.exports = curryRight;


/***/ }),
/* 2528 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2092),
	    now = __webpack_require__(2529),
	    toNumber = __webpack_require__(2091);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	module.exports = debounce;


/***/ }),
/* 2529 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(2061);
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	module.exports = now;


/***/ }),
/* 2530 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDelay = __webpack_require__(2531),
	    baseRest = __webpack_require__(2138);
	
	/**
	 * Defers invoking the `func` until the current call stack has cleared. Any
	 * additional arguments are provided to `func` when it's invoked.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to defer.
	 * @param {...*} [args] The arguments to invoke `func` with.
	 * @returns {number} Returns the timer id.
	 * @example
	 *
	 * _.defer(function(text) {
	 *   console.log(text);
	 * }, 'deferred');
	 * // => Logs 'deferred' after one millisecond.
	 */
	var defer = baseRest(function(func, args) {
	  return baseDelay(func, 1, args);
	});
	
	module.exports = defer;


/***/ }),
/* 2531 */
/***/ (function(module, exports) {

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * The base implementation of `_.delay` and `_.defer` which accepts `args`
	 * to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to delay.
	 * @param {number} wait The number of milliseconds to delay invocation.
	 * @param {Array} args The arguments to provide to `func`.
	 * @returns {number|Object} Returns the timer id or timeout object.
	 */
	function baseDelay(func, wait, args) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  return setTimeout(function() { func.apply(undefined, args); }, wait);
	}
	
	module.exports = baseDelay;


/***/ }),
/* 2532 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDelay = __webpack_require__(2531),
	    baseRest = __webpack_require__(2138),
	    toNumber = __webpack_require__(2091);
	
	/**
	 * Invokes `func` after `wait` milliseconds. Any additional arguments are
	 * provided to `func` when it's invoked.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to delay.
	 * @param {number} wait The number of milliseconds to delay invocation.
	 * @param {...*} [args] The arguments to invoke `func` with.
	 * @returns {number} Returns the timer id.
	 * @example
	 *
	 * _.delay(function(text) {
	 *   console.log(text);
	 * }, 1000, 'later');
	 * // => Logs 'later' after one second.
	 */
	var delay = baseRest(function(func, wait, args) {
	  return baseDelay(func, toNumber(wait) || 0, args);
	});
	
	module.exports = delay;


/***/ }),
/* 2533 */
/***/ (function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(2491);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_FLIP_FLAG = 512;
	
	/**
	 * Creates a function that invokes `func` with arguments reversed.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to flip arguments for.
	 * @returns {Function} Returns the new flipped function.
	 * @example
	 *
	 * var flipped = _.flip(function() {
	 *   return _.toArray(arguments);
	 * });
	 *
	 * flipped('a', 'b', 'c', 'd');
	 * // => ['d', 'c', 'b', 'a']
	 */
	function flip(func) {
	  return createWrap(func, WRAP_FLIP_FLAG);
	}
	
	module.exports = flip;


/***/ }),
/* 2534 */
/***/ (function(module, exports, __webpack_require__) {

	var before = __webpack_require__(2523);
	
	/**
	 * Creates a function that is restricted to invoking `func` once. Repeat calls
	 * to the function return the value of the first invocation. The `func` is
	 * invoked with the `this` binding and arguments of the created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * var initialize = _.once(createApplication);
	 * initialize();
	 * initialize();
	 * // => `createApplication` is invoked once
	 */
	function once(func) {
	  return before(2, func);
	}
	
	module.exports = once;


/***/ }),
/* 2535 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(2141),
	    arrayMap = __webpack_require__(2063),
	    baseFlatten = __webpack_require__(2227),
	    baseIteratee = __webpack_require__(2274),
	    baseRest = __webpack_require__(2138),
	    baseUnary = __webpack_require__(2121),
	    castRest = __webpack_require__(2536),
	    isArray = __webpack_require__(2064);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Creates a function that invokes `func` with its arguments transformed.
	 *
	 * @static
	 * @since 4.0.0
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to wrap.
	 * @param {...(Function|Function[])} [transforms=[_.identity]]
	 *  The argument transforms.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * function doubled(n) {
	 *   return n * 2;
	 * }
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var func = _.overArgs(function(x, y) {
	 *   return [x, y];
	 * }, [square, doubled]);
	 *
	 * func(9, 3);
	 * // => [81, 6]
	 *
	 * func(10, 5);
	 * // => [100, 10]
	 */
	var overArgs = castRest(function(func, transforms) {
	  transforms = (transforms.length == 1 && isArray(transforms[0]))
	    ? arrayMap(transforms[0], baseUnary(baseIteratee))
	    : arrayMap(baseFlatten(transforms, 1), baseUnary(baseIteratee));
	
	  var funcsLength = transforms.length;
	  return baseRest(function(args) {
	    var index = -1,
	        length = nativeMin(args.length, funcsLength);
	
	    while (++index < length) {
	      args[index] = transforms[index].call(this, args[index]);
	    }
	    return apply(func, this, args);
	  });
	});
	
	module.exports = overArgs;


/***/ }),
/* 2536 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(2138);
	
	/**
	 * A `baseRest` alias which can be replaced with `identity` by module
	 * replacement plugins.
	 *
	 * @private
	 * @type {Function}
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	var castRest = baseRest;
	
	module.exports = castRest;


/***/ }),
/* 2537 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(2138),
	    createWrap = __webpack_require__(2491),
	    getHolder = __webpack_require__(2518),
	    replaceHolders = __webpack_require__(2520);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_PARTIAL_FLAG = 32;
	
	/**
	 * Creates a function that invokes `func` with `partials` prepended to the
	 * arguments it receives. This method is like `_.bind` except it does **not**
	 * alter the `this` binding.
	 *
	 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.2.0
	 * @category Function
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new partially applied function.
	 * @example
	 *
	 * function greet(greeting, name) {
	 *   return greeting + ' ' + name;
	 * }
	 *
	 * var sayHelloTo = _.partial(greet, 'hello');
	 * sayHelloTo('fred');
	 * // => 'hello fred'
	 *
	 * // Partially applied with placeholders.
	 * var greetFred = _.partial(greet, _, 'fred');
	 * greetFred('hi');
	 * // => 'hi fred'
	 */
	var partial = baseRest(function(func, partials) {
	  var holders = replaceHolders(partials, getHolder(partial));
	  return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
	});
	
	// Assign default placeholders.
	partial.placeholder = {};
	
	module.exports = partial;


/***/ }),
/* 2538 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(2138),
	    createWrap = __webpack_require__(2491),
	    getHolder = __webpack_require__(2518),
	    replaceHolders = __webpack_require__(2520);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_PARTIAL_RIGHT_FLAG = 64;
	
	/**
	 * This method is like `_.partial` except that partially applied arguments
	 * are appended to the arguments it receives.
	 *
	 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Function
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new partially applied function.
	 * @example
	 *
	 * function greet(greeting, name) {
	 *   return greeting + ' ' + name;
	 * }
	 *
	 * var greetFred = _.partialRight(greet, 'fred');
	 * greetFred('hi');
	 * // => 'hi fred'
	 *
	 * // Partially applied with placeholders.
	 * var sayHelloTo = _.partialRight(greet, 'hello', _);
	 * sayHelloTo('fred');
	 * // => 'hello fred'
	 */
	var partialRight = baseRest(function(func, partials) {
	  var holders = replaceHolders(partials, getHolder(partialRight));
	  return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
	});
	
	// Assign default placeholders.
	partialRight.placeholder = {};
	
	module.exports = partialRight;


/***/ }),
/* 2539 */
/***/ (function(module, exports, __webpack_require__) {

	var createWrap = __webpack_require__(2491),
	    flatRest = __webpack_require__(2225);
	
	/** Used to compose bitmasks for function metadata. */
	var WRAP_REARG_FLAG = 256;
	
	/**
	 * Creates a function that invokes `func` with arguments arranged according
	 * to the specified `indexes` where the argument value at the first index is
	 * provided as the first argument, the argument value at the second index is
	 * provided as the second argument, and so on.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {Function} func The function to rearrange arguments for.
	 * @param {...(number|number[])} indexes The arranged argument indexes.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var rearged = _.rearg(function(a, b, c) {
	 *   return [a, b, c];
	 * }, [2, 0, 1]);
	 *
	 * rearged('b', 'c', 'a')
	 * // => ['a', 'b', 'c']
	 */
	var rearg = flatRest(function(func, indexes) {
	  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
	});
	
	module.exports = rearg;


/***/ }),
/* 2540 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(2138),
	    toInteger = __webpack_require__(2089);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = start === undefined ? start : toInteger(start);
	  return baseRest(func, start);
	}
	
	module.exports = rest;


/***/ }),
/* 2541 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(2141),
	    arrayPush = __webpack_require__(2228),
	    baseRest = __webpack_require__(2138),
	    castSlice = __webpack_require__(2072),
	    toInteger = __webpack_require__(2089);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * create function and an array of arguments much like
	 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	 *
	 * **Note:** This method is based on the
	 * [spread operator](https://mdn.io/spread_operator).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.2.0
	 * @category Function
	 * @param {Function} func The function to spread arguments over.
	 * @param {number} [start=0] The start position of the spread.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.spread(function(who, what) {
	 *   return who + ' says ' + what;
	 * });
	 *
	 * say(['fred', 'hello']);
	 * // => 'fred says hello'
	 *
	 * var numbers = Promise.all([
	 *   Promise.resolve(40),
	 *   Promise.resolve(36)
	 * ]);
	 *
	 * numbers.then(_.spread(function(x, y) {
	 *   return x + y;
	 * }));
	 * // => a Promise of 76
	 */
	function spread(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = start == null ? 0 : nativeMax(toInteger(start), 0);
	  return baseRest(function(args) {
	    var array = args[start],
	        otherArgs = castSlice(args, 0, start);
	
	    if (array) {
	      arrayPush(otherArgs, array);
	    }
	    return apply(func, this, otherArgs);
	  });
	}
	
	module.exports = spread;


/***/ }),
/* 2542 */
/***/ (function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(2528),
	    isObject = __webpack_require__(2092);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	module.exports = throttle;


/***/ }),
/* 2543 */
/***/ (function(module, exports, __webpack_require__) {

	var ary = __webpack_require__(2490);
	
	/**
	 * Creates a function that accepts up to one argument, ignoring any
	 * additional arguments.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 * @example
	 *
	 * _.map(['6', '8', '10'], _.unary(parseInt));
	 * // => [6, 8, 10]
	 */
	function unary(func) {
	  return ary(func, 1);
	}
	
	module.exports = unary;


/***/ }),
/* 2544 */
/***/ (function(module, exports, __webpack_require__) {

	var castFunction = __webpack_require__(2306),
	    partial = __webpack_require__(2537);
	
	/**
	 * Creates a function that provides `value` to `wrapper` as its first
	 * argument. Any additional arguments provided to the function are appended
	 * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	 * binding of the created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {*} value The value to wrap.
	 * @param {Function} [wrapper=identity] The wrapper function.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var p = _.wrap(_.escape, function(func, text) {
	 *   return '<p>' + func(text) + '</p>';
	 * });
	 *
	 * p('fred, barney, & pebbles');
	 * // => '<p>fred, barney, &amp; pebbles</p>'
	 */
	function wrap(value, wrapper) {
	  return partial(castFunction(wrapper), value);
	}
	
	module.exports = wrap;


/***/ }),
/* 2545 */
[3236, 2546],
/* 2546 */
1637,
/* 2547 */
1630,
/* 2548 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var domify = __webpack_require__(2549),
	    domClasses = __webpack_require__(2551),
	    domMatches = __webpack_require__(2554),
	    domDelegate = __webpack_require__(2557),
	    domQuery = __webpack_require__(2561),
	    domEvent = __webpack_require__(2562),
	    domAttr = __webpack_require__(2563);
	
	var filter = __webpack_require__(2564).filter,
	    assign = __webpack_require__(2777).assign;
	
	var inherits = __webpack_require__(2873);
	
	var EventEmitter = __webpack_require__(2874);
	
	var DEFAULT_OPTIONS = {
	  scrollSymbolLeft: '‹',
	  scrollSymbolRight: '›'
	};
	
	
	/**
	 * This component adds the functionality to scroll over a list of tabs.
	 *
	 * It adds scroll buttons on the left and right side of the tabs container
	 * if not all tabs are visible. It also adds a mouse wheel listener on the
	 * container.
	 *
	 * If either a button is clicked or the mouse wheel is used over the tabs,
	 * a 'scroll' event is being fired. This event contains the node elements
	 * of the new and old active tab, and the direction in which the tab has
	 * changed relative to the old active tab.
	 *
	 * @example:
	 * (1) provide a tabs-container:
	 *
	 * var $el = (
	 *   <div>
	 *     <!-- button added by scrollTabs -->
	 *     <span class="scroll-tabs-button scroll-tabs-left"></span>
	 *     <ul class="my-tabs-container">
	 *       <li class="my-tab i-am-active"></li>
	 *       <li class="my-tab"></li>
	 *       <li class="my-tab ignore-me"></li>
	 *     </ul>
	 *     <!-- button added by scrollTabs -->
	 *     <span class="scroll-tabs-button scroll-tabs-right"></span>
	 *   </div>
	 * );
	 *
	 *
	 * (2) initialize scrollTabs:
	 *
	 *  var scroller = scrollTabs(tabBarNode, {
	 *    selectors: {
	 *      tabsContainer: '.my-tabs-container',
	 *      tab: '.my-tab',
	 *      ignore: '.ignore-me',
	 *      active: '.i-am-active'
	 *    }
	 *  });
	 *
	 *
	 * (3) listen to the scroll event:
	 *
	 * scroller.on('scroll', function(newActiveNode, oldActiveNode, direction) {
	 *   // direction is any of (-1: left, 1: right)
	 *   // activate the new active tab
	 * });
	 *
	 *
	 * (4) update the scroller if tabs change and or the tab container resizes:
	 *
	 * scroller.update();
	 *
	 *
	 * @param  {DOMElement} $el
	 * @param  {Object} options
	 * @param  {Object} options.selectors
	 * @param  {String} options.selectors.tabsContainer the container all tabs are contained in
	 * @param  {String} options.selectors.tab a single tab inside the tab container
	 * @param  {String} options.selectors.ignore tabs that should be ignored during scroll left/right
	 * @param  {String} options.selectors.active selector for the current active tab
	 * @param  {String} [options.scrollSymbolLeft]
	 * @param  {String} [options.scrollSymbolRight]
	 */
	function ScrollTabs($el, options) {
	
	  // we are an event emitter
	  EventEmitter.call(this);
	
	  this.options = options = assign({}, DEFAULT_OPTIONS, options);
	  this.container = $el;
	
	  this._createScrollButtons($el, options);
	
	  this._bindEvents($el);
	}
	
	inherits(ScrollTabs, EventEmitter);
	
	
	/**
	 * Create a clickable scroll button
	 *
	 * @param  {DOMElement} parentNode
	 * @param {Object} options
	 * @param {String} options.className
	 * @param {String} options.label
	 * @param {Number} options.direction
	 *
	 * @return {DOMElement} The created scroll button node
	 */
	ScrollTabs.prototype._createButton = function(parentNode, options) {
	
	  var className = options.className,
	      direction = options.direction;
	
	
	  var button = domQuery('.' + className, parentNode);
	
	  if (!button) {
	    button = domify('<span class="scroll-tabs-button ' + className + '">' +
	                                options.label +
	                              '</span>');
	
	    parentNode.insertBefore(button, parentNode.childNodes[0]);
	  }
	
	  domAttr(button, 'data-direction', direction);
	
	  return button;
	};
	
	/**
	 * Create both scroll buttons
	 *
	 * @param  {DOMElement} parentNode
	 * @param  {Object} options
	 * @param  {String} options.scrollSymbolLeft
	 * @param  {String} options.scrollSymbolRight
	 */
	ScrollTabs.prototype._createScrollButtons = function(parentNode, options) {
	
	  // Create a button that scrolls to the tab left to the currently active tab
	  this._createButton(parentNode, {
	    className: 'scroll-tabs-left',
	    label: options.scrollSymbolLeft,
	    direction: -1
	  });
	
	  // Create a button that scrolls to the tab right to the currently active tab
	  this._createButton(parentNode, {
	    className: 'scroll-tabs-right',
	    label: options.scrollSymbolRight,
	    direction: 1
	  });
	};
	
	/**
	 * Get the current active tab
	 *
	 * @return {DOMElement}
	 */
	ScrollTabs.prototype.getActiveTabNode = function() {
	  return domQuery(this.options.selectors.active, this.container);
	};
	
	
	/**
	 * Get the container all tabs are contained in
	 *
	 * @return {DOMElement}
	 */
	ScrollTabs.prototype.getTabsContainerNode = function () {
	  return domQuery(this.options.selectors.tabsContainer, this.container);
	};
	
	
	/**
	 * Get all tabs (visible and invisible ones)
	 *
	 * @return {Array<DOMElement>}
	 */
	ScrollTabs.prototype.getAllTabNodes = function () {
	  return domQuery.all(this.options.selectors.tab, this.container);
	};
	
	
	/**
	 * Gets all tabs that don't have the ignore class set
	 *
	 * @return {Array<DOMElement>}
	 */
	ScrollTabs.prototype.getVisibleTabs = function() {
	  var allTabs = this.getAllTabNodes();
	
	  var ignore = this.options.selectors.ignore;
	
	  return filter(allTabs, function(tabNode) {
	    return !domMatches(tabNode, ignore);
	  });
	};
	
	
	/**
	 * Get a tab relative to a reference tab.
	 *
	 * @param  {DOMElement} referenceTabNode
	 * @param  {Number} n gets the nth tab next or previous to the reference tab
	 *
	 * @return {DOMElement}
	 *
	 * @example:
	 * Visible tabs: [ A | B | C | D | E ]
	 * Assume tab 'C' is the reference tab:
	 * If direction === -1, it returns tab 'B',
	 * if direction ===  2, it returns tab 'E'
	 */
	ScrollTabs.prototype.getAdjacentTab = function(referenceTabNode, n) {
	  var visibleTabs = this.getVisibleTabs();
	
	  var index = visibleTabs.indexOf(referenceTabNode);
	
	  return visibleTabs[index + n];
	};
	
	ScrollTabs.prototype._bindEvents = function(node) {
	  this._bindWheelEvent(node);
	  this._bindTabClickEvents(node);
	  this._bindScrollButtonEvents(node);
	};
	
	/**
	 *  Bind a click listener to a DOM node.
	 *  Make sure a tab link is entirely visible after onClick.
	 *
	 * @param {DOMElement} node
	 */
	ScrollTabs.prototype._bindTabClickEvents = function(node) {
	  var selector = this.options.selectors.tab;
	
	  var self = this;
	
	  domDelegate.bind(node, selector, 'click', function onClick(event) {
	    self.scrollToTabNode(event.delegateTarget);
	  });
	};
	
	
	/**
	 * Bind the wheel event listener to a DOM node
	 *
	 * @param {DOMElement} node
	 */
	ScrollTabs.prototype._bindWheelEvent = function(node) {
	  var self = this;
	
	  domEvent.bind(node, 'wheel', function(e) {
	
	    // scroll direction (-1: left, 1: right)
	    var direction = Math.sign(e.deltaY);
	
	    var oldActiveTab = self.getActiveTabNode();
	
	    var newActiveTab = self.getAdjacentTab(oldActiveTab, direction);
	
	    if (newActiveTab) {
	      self.scrollToTabNode(newActiveTab);
	      self.emit('scroll', newActiveTab, oldActiveTab, direction);
	    }
	
	    e.preventDefault();
	  });
	};
	
	/**
	 * Bind scroll button events to a DOM node
	 *
	 * @param  {DOMElement} node
	 */
	ScrollTabs.prototype._bindScrollButtonEvents = function(node) {
	
	  var self = this;
	
	  domDelegate.bind(node, '.scroll-tabs-button', 'click', function(event) {
	
	    var target = event.delegateTarget;
	
	    // data-direction is either -1 or 1
	    var direction = parseInt(domAttr(target, 'data-direction'), 10);
	
	    var oldActiveTabNode = self.getActiveTabNode();
	
	    var newActiveTabNode = self.getAdjacentTab(oldActiveTabNode, direction);
	
	    if (newActiveTabNode) {
	      self.scrollToTabNode(newActiveTabNode);
	      self.emit('scroll', newActiveTabNode, oldActiveTabNode, direction);
	    }
	
	    event.preventDefault();
	  });
	};
	
	
	/**
	* Scroll to a tab if it is not entirely visible
	*
	* @param  {DOMElement} tabNode tab node to scroll to
	*/
	ScrollTabs.prototype.scrollToTabNode = function(tabNode) {
	  if (!tabNode) {
	    return;
	  }
	
	  var tabsContainerNode = tabNode.parentNode;
	
	  var tabWidth = tabNode.offsetWidth,
	      tabOffsetLeft = tabNode.offsetLeft,
	      tabOffsetRight = tabOffsetLeft + tabWidth,
	      containerWidth = tabsContainerNode.offsetWidth,
	      containerScrollLeft = tabsContainerNode.scrollLeft;
	
	  if (containerScrollLeft > tabOffsetLeft) {
	    // scroll to the left, if the tab is overflowing on the left side
	    tabsContainerNode.scrollLeft = 0;
	  } else if (tabOffsetRight > containerWidth) {
	    // scroll to the right, if the tab is overflowing on the right side
	    tabsContainerNode.scrollLeft = tabOffsetRight - containerWidth;
	  }
	};
	
	
	/**
	 * React on tab changes from outside (resize/show/hide/add/remove),
	 * update scroll button visibility.
	 */
	ScrollTabs.prototype.update = function() {
	
	  var tabsContainerNode = this.getTabsContainerNode();
	
	  // check if tabs fit in container
	  var overflow = tabsContainerNode.scrollWidth > tabsContainerNode.offsetWidth;
	
	  // TODO(nikku): distinguish overflow left / overflow right?
	  var overflowClass = 'scroll-tabs-overflow';
	
	  domClasses(this.container).toggle(overflowClass, overflow);
	
	  if (overflow) {
	    // make sure the current active tab is always visible
	    this.scrollToTabNode(this.getActiveTabNode());
	  }
	};
	
	
	////// module exports /////////////////////////////////////////
	
	/**
	 * Create a scrollTabs instance on the given element.
	 *
	 * @param {DOMElement} $el
	 * @param {Object} options
	 *
	 * @return {ScrollTabs}
	 */
	function create($el, options) {
	
	  var scrollTabs = get($el);
	
	  if (!scrollTabs) {
	    scrollTabs = new ScrollTabs($el, options);
	
	    $el.__scrollTabs = scrollTabs;
	  }
	
	  return scrollTabs;
	}
	
	/**
	 * Factory function to get or create a new scroll tabs instance.
	 */
	module.exports = create;
	
	
	/**
	 * Return the scrollTabs instance that has been previously
	 * initialized on the element.
	 *
	 * @param {DOMElement} $el
	 * @return {ScrollTabs}
	 */
	function get($el) {
	  return $el.__scrollTabs;
	}
	
	/**
	 * Getter to retrieve an already initialized scroll tabs instance.
	 */
	module.exports.get = get;

/***/ }),
/* 2549 */
[3236, 2550],
/* 2550 */
1637,
/* 2551 */
[3230, 2552],
/* 2552 */
[3231, 2553, 2553],
/* 2553 */
1629,
/* 2554 */
[3237, 2555],
/* 2555 */
[3233, 2556, 2556],
/* 2556 */
5,
/* 2557 */
[3234, 2558],
/* 2558 */
[3235, 2559, 2559, 2560, 2560],
/* 2559 */
[3232, 2555],
/* 2560 */
1004,
/* 2561 */
[2895, 2556],
/* 2562 */
[3183, 2560],
/* 2563 */
1626,
/* 2564 */
[3128, 2565, 2690, 2694, 2700, 2704, 2706, 2713, 2715, 2720, 2721, 2691, 2695, 2722, 2723, 2730, 2742, 2718, 2743, 2748, 2749, 2752, 2754, 2756, 2760, 2766, 2769, 2774, 2776],
/* 2565 */
[3129, 2566, 2582],
/* 2566 */
[2899, 2567],
/* 2567 */
[2900, 2568],
/* 2568 */
[2901, 2569, 2581],
/* 2569 */
[2902, 2570, 2578, 2577, 2580],
/* 2570 */
[2903, 2571, 2577],
/* 2571 */
[2904, 2572, 2575, 2576],
/* 2572 */
[2905, 2573],
/* 2573 */
[2906, 2574],
/* 2574 */
17,
/* 2575 */
[2907, 2572],
/* 2576 */
19,
/* 2577 */
20,
/* 2578 */
[2908, 2579],
/* 2579 */
[2909, 2573],
/* 2580 */
23,
/* 2581 */
24,
/* 2582 */
[3130, 2583, 2584, 2610, 2595],
/* 2583 */
581,
/* 2584 */
[3131, 2585],
/* 2585 */
[3132, 2586, 2609],
/* 2586 */
[3008, 2587, 2589],
/* 2587 */
[2982, 2588],
/* 2588 */
122,
/* 2589 */
[2918, 2590, 2604, 2608],
/* 2590 */
[2919, 2591, 2592, 2595, 2596, 2598, 2599],
/* 2591 */
43,
/* 2592 */
[2920, 2593, 2594],
/* 2593 */
[2921, 2571, 2594],
/* 2594 */
46,
/* 2595 */
47,
/* 2596 */
[2922, 2573, 2597],
/* 2597 */
50,
/* 2598 */
39,
/* 2599 */
[2923, 2600, 2602, 2603],
/* 2600 */
[2924, 2571, 2601, 2594],
/* 2601 */
38,
/* 2602 */
53,
/* 2603 */
[2925, 2574],
/* 2604 */
[2926, 2605, 2606],
/* 2605 */
40,
/* 2606 */
[2927, 2607],
/* 2607 */
57,
/* 2608 */
[2917, 2570, 2601],
/* 2609 */
[3133, 2608],
/* 2610 */
[3009, 2611, 2670, 2686, 2595, 2687],
/* 2611 */
[3010, 2612, 2667, 2669],
/* 2612 */
[3011, 2613, 2643],
/* 2613 */
[2978, 2614, 2622, 2623, 2624, 2625, 2626],
/* 2614 */
[2951, 2615, 2616, 2619, 2620, 2621],
/* 2615 */
84,
/* 2616 */
[2952, 2617],
/* 2617 */
[2953, 2618],
/* 2618 */
25,
/* 2619 */
[2954, 2617],
/* 2620 */
[2955, 2617],
/* 2621 */
[2956, 2617],
/* 2622 */
[2979, 2614],
/* 2623 */
116,
/* 2624 */
117,
/* 2625 */
118,
/* 2626 */
[2980, 2614, 2627, 2628],
/* 2627 */
[2957, 2568, 2573],
/* 2628 */
[2943, 2629, 2637, 2640, 2641, 2642],
/* 2629 */
[2944, 2630, 2614, 2627],
/* 2630 */
[2945, 2631, 2633, 2634, 2635, 2636],
/* 2631 */
[2946, 2632],
/* 2632 */
[2947, 2568],
/* 2633 */
79,
/* 2634 */
[2948, 2632],
/* 2635 */
[2949, 2632],
/* 2636 */
[2950, 2632],
/* 2637 */
[2958, 2638],
/* 2638 */
[2959, 2639],
/* 2639 */
93,
/* 2640 */
[2960, 2638],
/* 2641 */
[2961, 2638],
/* 2642 */
[2962, 2638],
/* 2643 */
[3012, 2644, 2594],
/* 2644 */
[3013, 2613, 2645, 2651, 2655, 2662, 2595, 2596, 2599],
/* 2645 */
[3014, 2646, 2649, 2650],
/* 2646 */
[3015, 2628, 2647, 2648],
/* 2647 */
160,
/* 2648 */
161,
/* 2649 */
162,
/* 2650 */
163,
/* 2651 */
[3016, 2572, 2652, 2618, 2645, 2653, 2654],
/* 2652 */
[2987, 2573],
/* 2653 */
144,
/* 2654 */
165,
/* 2655 */
[3017, 2656],
/* 2656 */
[3018, 2657, 2659, 2589],
/* 2657 */
[3019, 2658, 2595],
/* 2658 */
104,
/* 2659 */
[3020, 2660, 2661],
/* 2660 */
170,
/* 2661 */
171,
/* 2662 */
[2998, 2663, 2627, 2664, 2665, 2666, 2571, 2580],
/* 2663 */
[2999, 2568, 2573],
/* 2664 */
[3000, 2568, 2573],
/* 2665 */
[3001, 2568, 2573],
/* 2666 */
[3002, 2568, 2573],
/* 2667 */
[3021, 2668, 2589],
/* 2668 */
[3022, 2577],
/* 2669 */
174,
/* 2670 */
[3023, 2643, 2671, 2683, 2674, 2668, 2669, 2682],
/* 2671 */
[2935, 2672],
/* 2672 */
[2936, 2673, 2682],
/* 2673 */
[2937, 2595, 2674, 2676, 2679],
/* 2674 */
[2938, 2595, 2675],
/* 2675 */
[2939, 2571, 2594],
/* 2676 */
[2940, 2677],
/* 2677 */
[2941, 2678],
/* 2678 */
[2942, 2628],
/* 2679 */
[2963, 2680],
/* 2680 */
[2964, 2572, 2681, 2595, 2675],
/* 2681 */
99,
/* 2682 */
[2965, 2675],
/* 2683 */
[3024, 2684, 2685],
/* 2684 */
177,
/* 2685 */
[3025, 2673, 2592, 2595, 2598, 2601, 2682],
/* 2686 */
29,
/* 2687 */
[3026, 2688, 2689, 2674, 2682],
/* 2688 */
180,
/* 2689 */
[3027, 2672],
/* 2690 */
[3134, 2691],
/* 2691 */
[3135, 2692, 2585, 2693, 2595],
/* 2692 */
209,
/* 2693 */
[3032, 2686],
/* 2694 */
[3136, 2695],
/* 2695 */
[3137, 2696, 2697, 2693, 2595],
/* 2696 */
694,
/* 2697 */
[3138, 2698, 2609],
/* 2698 */
[3029, 2699, 2589],
/* 2699 */
[3030, 2588],
/* 2700 */
[3139, 2701, 2702, 2610, 2595, 2703],
/* 2701 */
699,
/* 2702 */
[3140, 2585],
/* 2703 */
[2916, 2618, 2608, 2598, 2577],
/* 2704 */
[3141, 2660, 2705, 2610, 2595],
/* 2705 */
[3142, 2585],
/* 2706 */
[3143, 2707, 2708],
/* 2707 */
[3144, 2610, 2608, 2589],
/* 2708 */
[3145, 2709, 2610, 2710],
/* 2709 */
707,
/* 2710 */
[3104, 2711],
/* 2711 */
[3105, 2712],
/* 2712 */
[3090, 2577, 2675],
/* 2713 */
[3146, 2707, 2714],
/* 2714 */
[3147, 2709, 2610, 2710],
/* 2715 */
[3148, 2716, 2718],
/* 2716 */
[2968, 2658, 2717],
/* 2717 */
[2969, 2572, 2592, 2595],
/* 2718 */
[3149, 2681, 2610, 2719, 2595],
/* 2719 */
[3150, 2585, 2608],
/* 2720 */
[3151, 2716, 2718],
/* 2721 */
[3152, 2716, 2718, 2710],
/* 2722 */
[3153, 2566, 2582],
/* 2723 */
[3154, 2724, 2608, 2727, 2710, 2728],
/* 2724 */
[3155, 2709, 2725, 2726],
/* 2725 */
723,
/* 2726 */
724,
/* 2727 */
[3119, 2571, 2595, 2594],
/* 2728 */
[3078, 2729, 2589],
/* 2729 */
[3079, 2681],
/* 2730 */
[3156, 2731, 2585, 2732, 2736, 2608],
/* 2731 */
31,
/* 2732 */
[3045, 2731, 2673, 2733, 2734, 2682],
/* 2733 */
201,
/* 2734 */
[3046, 2672, 2735],
/* 2735 */
203,
/* 2736 */
[2912, 2686, 2737, 2738],
/* 2737 */
[2913, 2731],
/* 2738 */
[2914, 2739, 2741],
/* 2739 */
[2915, 2740, 2567, 2686],
/* 2740 */
34,
/* 2741 */
35,
/* 2742 */
[3157, 2566, 2582],
/* 2743 */
[3158, 2744, 2595],
/* 2744 */
[3159, 2681, 2610, 2719, 2745, 2602, 2746, 2686],
/* 2745 */
743,
/* 2746 */
[3160, 2747],
/* 2747 */
[3161, 2675],
/* 2748 */
[3162, 2582],
/* 2749 */
[3163, 2750, 2585, 2610, 2751, 2595],
/* 2750 */
220,
/* 2751 */
749,
/* 2752 */
[3164, 2753, 2697, 2610, 2751, 2595],
/* 2753 */
751,
/* 2754 */
[3165, 2660, 2705, 2610, 2595, 2755],
/* 2755 */
228,
/* 2756 */
[3166, 2757, 2759, 2595],
/* 2757 */
[3167, 2758],
/* 2758 */
756,
/* 2759 */
[3168, 2757, 2728],
/* 2760 */
[3169, 2761, 2765, 2595, 2703, 2710],
/* 2761 */
[3170, 2762, 2763, 2764],
/* 2762 */
443,
/* 2763 */
128,
/* 2764 */
[3171, 2758],
/* 2765 */
[3172, 2762, 2764, 2728],
/* 2766 */
[3173, 2767, 2768, 2595],
/* 2767 */
[3174, 2763, 2764],
/* 2768 */
[3175, 2764, 2728],
/* 2769 */
[3176, 2604, 2662, 2608, 2727, 2770],
/* 2770 */
[3177, 2771, 2772, 2773],
/* 2771 */
[3178, 2688],
/* 2772 */
437,
/* 2773 */
771,
/* 2774 */
[3179, 2649, 2610, 2775, 2595, 2703],
/* 2775 */
[3180, 2585],
/* 2776 */
[3181, 2716, 2744, 2736, 2703],
/* 2777 */
[2896, 2778, 2782, 2786, 2787, 2788, 2792, 2795, 2797, 2811, 2816, 2818, 2819, 2820, 2822, 2823, 2824, 2825, 2826, 2827, 2829, 2671, 2830, 2683, 2832, 2835, 2836, 2589, 2783, 2837, 2838, 2839, 2810, 2840, 2858, 2862, 2859, 2864, 2865, 2866, 2812, 2817, 2867, 2868, 2869, 2871, 2728, 2872],
/* 2778 */
[2897, 2779, 2780, 2781, 2608, 2605, 2589],
/* 2779 */
[2898, 2566, 2618],
/* 2780 */
[2910, 2779, 2566],
/* 2781 */
[2911, 2736, 2703],
/* 2782 */
[2928, 2780, 2781, 2783],
/* 2783 */
[2929, 2590, 2784, 2608],
/* 2784 */
[2930, 2577, 2605, 2785],
/* 2785 */
61,
/* 2786 */
[2931, 2780, 2781, 2783],
/* 2787 */
[2932, 2780, 2781, 2589],
/* 2788 */
[2933, 2789, 2790],
/* 2789 */
[2934, 2671],
/* 2790 */
[2966, 2791, 2737, 2738],
/* 2791 */
[2967, 2716],
/* 2792 */
[2970, 2793, 2794],
/* 2793 */
[2971, 2780, 2589],
/* 2794 */
[2972, 2577],
/* 2795 */
[2973, 2731, 2786, 2736, 2796],
/* 2796 */
[2974, 2618],
/* 2797 */
[2975, 2731, 2736, 2798, 2810],
/* 2798 */
[2976, 2799, 2577],
/* 2799 */
[2977, 2613, 2800, 2587, 2801, 2577, 2783],
/* 2800 */
[2981, 2566, 2618],
/* 2801 */
[2983, 2800, 2802, 2803, 2763, 2805, 2592, 2595, 2807, 2596, 2570, 2577, 2808, 2599, 2809],
/* 2802 */
[2984, 2573],
/* 2803 */
[2985, 2804],
/* 2804 */
[2986, 2652],
/* 2805 */
[2988, 2794, 2806, 2605],
/* 2806 */
[2989, 2607],
/* 2807 */
[2990, 2608, 2594],
/* 2808 */
[2991, 2571, 2806, 2594],
/* 2809 */
[2992, 2780, 2783],
/* 2810 */
[2993, 2799, 2781],
/* 2811 */
[2994, 2812],
/* 2812 */
[2995, 2813, 2589],
/* 2813 */
[2996, 2814, 2662, 2653, 2815],
/* 2814 */
[2997, 2681],
/* 2815 */
145,
/* 2816 */
[3003, 2817],
/* 2817 */
[3004, 2813, 2783],
/* 2818 */
[3005, 2782],
/* 2819 */
[3006, 2786],
/* 2820 */
[3007, 2821, 2586, 2610],
/* 2821 */
151,
/* 2822 */
[3028, 2821, 2698, 2610],
/* 2823 */
[3031, 2587, 2693, 2783],
/* 2824 */
[3033, 2699, 2693, 2783],
/* 2825 */
[3034, 2586, 2693],
/* 2826 */
[3035, 2698, 2693],
/* 2827 */
[3036, 2828, 2589],
/* 2828 */
[3037, 2660, 2570],
/* 2829 */
[3038, 2828, 2783],
/* 2830 */
[3039, 2831, 2685],
/* 2831 */
194,
/* 2832 */
[3040, 2740, 2833, 2686],
/* 2833 */
[3041, 2834],
/* 2834 */
[3042, 2586],
/* 2835 */
[3043, 2610, 2833],
/* 2836 */
[3044, 2732, 2736],
/* 2837 */
[3047, 2566, 2586, 2610],
/* 2838 */
[3048, 2566, 2586, 2610],
/* 2839 */
[3049, 2799, 2781],
/* 2840 */
[3050, 2681, 2841, 2856, 2673, 2780, 2857, 2790, 2846],
/* 2841 */
[3051, 2613, 2692, 2779, 2793, 2842, 2802, 2763, 2843, 2844, 2656, 2846, 2662, 2847, 2848, 2805, 2595, 2596, 2577, 2589],
/* 2842 */
[3052, 2780, 2783],
/* 2843 */
[3053, 2780, 2659],
/* 2844 */
[3054, 2780, 2845],
/* 2845 */
[3055, 2658, 2806, 2659, 2661],
/* 2846 */
[3056, 2657, 2845, 2783],
/* 2847 */
215,
/* 2848 */
[3057, 2804, 2849, 2850, 2852, 2853, 2855, 2803],
/* 2849 */
[3058, 2804],
/* 2850 */
[3059, 2851, 2750, 2653],
/* 2851 */
219,
/* 2852 */
221,
/* 2853 */
[3060, 2854, 2750, 2654],
/* 2854 */
223,
/* 2855 */
[3061, 2572],
/* 2856 */
[3062, 2673, 2733, 2734, 2682],
/* 2857 */
[3063, 2808],
/* 2858 */
[3064, 2610, 2755, 2859],
/* 2859 */
[3065, 2681, 2610, 2860, 2846],
/* 2860 */
[3066, 2672, 2861, 2673],
/* 2861 */
[3067, 2779, 2673, 2598, 2577, 2682],
/* 2862 */
[3068, 2863, 2790],
/* 2863 */
[3069, 2860, 2683],
/* 2864 */
[3070, 2673, 2570, 2682],
/* 2865 */
[3071, 2861],
/* 2866 */
[3072, 2861],
/* 2867 */
[3073, 2692, 2794, 2586, 2610, 2806, 2595, 2596, 2570, 2577, 2599],
/* 2868 */
[3074, 2856],
/* 2869 */
[3075, 2870, 2693],
/* 2870 */
[3076, 2672, 2861],
/* 2871 */
[3077, 2870, 2693],
/* 2872 */
[3080, 2729, 2783],
/* 2873 */
2,
/* 2874 */
1452,
/* 2875 */
[3230, 2876],
/* 2876 */
[3231, 2877, 2877],
/* 2877 */
1629,
/* 2878 */
[3234, 2879],
/* 2879 */
[3235, 2880, 2880, 2882, 2882],
/* 2880 */
[3232, 2881],
/* 2881 */
[3233, 2437, 2437],
/* 2882 */
1004,
/* 2883 */
[3228, 2884, 2375],
/* 2884 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2374)();
	// imports
	
	
	// module
	exports.push([module.id, ".pfdjs-container #pfdjs-pp-container {\n  margin: 10px 16px;\n  /*=============================================\n=            Generic styling                  =\n=============================================*/\n  /*=====  End of Section comment block  ======*/\n  /*===============================\n=            Choices            =\n===============================*/\n  /*=====  End of Choices  ======*/ }\n  .pfdjs-container #pfdjs-pp-container * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  .pfdjs-container #pfdjs-pp-container *, .pfdjs-container #pfdjs-pp-container *:before, .pfdjs-container #pfdjs-pp-container *:after {\n    box-sizing: border-box; }\n  .pfdjs-container #pfdjs-pp-container html, .pfdjs-container #pfdjs-pp-container body {\n    position: relative;\n    margin: 0;\n    width: 100%;\n    height: 100%; }\n  .pfdjs-container #pfdjs-pp-container body {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-size: 16px;\n    line-height: 1.4;\n    color: #FFFFFF;\n    background-color: #333;\n    overflow-x: hidden; }\n  .pfdjs-container #pfdjs-pp-container label {\n    display: block;\n    margin-bottom: 8px;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer; }\n  .pfdjs-container #pfdjs-pp-container p {\n    margin-top: 0; }\n  .pfdjs-container #pfdjs-pp-container hr {\n    display: block;\n    margin: 36px 0;\n    border: 0;\n    border-bottom: 1px solid #eaeaea;\n    height: 1px; }\n  .pfdjs-container #pfdjs-pp-container h1, .pfdjs-container #pfdjs-pp-container h2, .pfdjs-container #pfdjs-pp-container h3, .pfdjs-container #pfdjs-pp-container h4, .pfdjs-container #pfdjs-pp-container h5, .pfdjs-container #pfdjs-pp-container h6 {\n    margin-top: 0;\n    margin-bottom: 12px;\n    font-weight: 400;\n    line-height: 1.2; }\n  .pfdjs-container #pfdjs-pp-container a, .pfdjs-container #pfdjs-pp-container a:visited, .pfdjs-container #pfdjs-pp-container a:focus {\n    color: #FFFFFF;\n    text-decoration: none;\n    font-weight: 600; }\n  .pfdjs-container #pfdjs-pp-container .form-control {\n    display: block;\n    width: 100%;\n    background-color: #f9f9f9;\n    padding: 12px;\n    border: 1px solid #ddd;\n    border-radius: 2.5px;\n    font-size: 14px;\n    -webkit-appearance: none;\n    appearance: none;\n    margin-bottom: 24px; }\n  .pfdjs-container #pfdjs-pp-container h1, .pfdjs-container #pfdjs-pp-container .h1 {\n    font-size: 32px; }\n  .pfdjs-container #pfdjs-pp-container h2, .pfdjs-container #pfdjs-pp-container .h2 {\n    font-size: 24px; }\n  .pfdjs-container #pfdjs-pp-container h3, .pfdjs-container #pfdjs-pp-container .h3 {\n    font-size: 20px; }\n  .pfdjs-container #pfdjs-pp-container h4, .pfdjs-container #pfdjs-pp-container .h4 {\n    font-size: 18px; }\n  .pfdjs-container #pfdjs-pp-container h5, .pfdjs-container #pfdjs-pp-container .h5 {\n    font-size: 16px; }\n  .pfdjs-container #pfdjs-pp-container h6, .pfdjs-container #pfdjs-pp-container .h6 {\n    font-size: 14px; }\n  .pfdjs-container #pfdjs-pp-container .container {\n    display: block;\n    margin: auto;\n    max-width: 40em;\n    padding: 48px; }\n    @media (max-width: 620px) {\n      .pfdjs-container #pfdjs-pp-container .container {\n        padding: 0; } }\n  .pfdjs-container #pfdjs-pp-container .section {\n    background-color: #FFFFFF;\n    padding: 24px;\n    color: #333; }\n    .pfdjs-container #pfdjs-pp-container .section a, .pfdjs-container #pfdjs-pp-container .section a:visited, .pfdjs-container #pfdjs-pp-container .section a:focus {\n      color: #00bcd4; }\n  .pfdjs-container #pfdjs-pp-container .logo {\n    display: block;\n    margin-bottom: 12px; }\n  .pfdjs-container #pfdjs-pp-container .logo__img {\n    width: 100%;\n    height: auto;\n    display: inline-block;\n    max-width: 100%;\n    vertical-align: top;\n    padding: 6px 0; }\n  .pfdjs-container #pfdjs-pp-container .visible-ie {\n    display: none; }\n  .pfdjs-container #pfdjs-pp-container .zero-bottom {\n    margin-bottom: 0; }\n  .pfdjs-container #pfdjs-pp-container .zero-top {\n    margin-top: 0; }\n  .pfdjs-container #pfdjs-pp-container .choices {\n    position: relative;\n    margin-bottom: 24px;\n    font-size: 16px; }\n    .pfdjs-container #pfdjs-pp-container .choices:focus {\n      outline: none; }\n    .pfdjs-container #pfdjs-pp-container .choices:last-child {\n      margin-bottom: 0; }\n    .pfdjs-container #pfdjs-pp-container .choices.is-disabled .choices__inner, .pfdjs-container #pfdjs-pp-container .choices.is-disabled .choices__input {\n      background-color: #EAEAEA;\n      cursor: not-allowed;\n      user-select: none; }\n    .pfdjs-container #pfdjs-pp-container .choices.is-disabled .choices__item {\n      cursor: not-allowed; }\n  .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"] {\n    cursor: pointer; }\n    .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"] .choices__inner {\n      padding-bottom: 7.5px; }\n    .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"] .choices__input {\n      display: block;\n      width: 100%;\n      padding: 10px;\n      border-bottom: 1px solid #DDDDDD;\n      background-color: #FFFFFF;\n      margin: 0; }\n    .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"] .choices__button {\n      background-image: url(" + __webpack_require__(2885) + ");\n      padding: 0;\n      background-size: 8px;\n      height: 100%;\n      position: absolute;\n      top: 50%;\n      right: 0;\n      margin-top: -10px;\n      margin-right: 25px;\n      height: 20px;\n      width: 20px;\n      border-radius: 10em;\n      opacity: .5; }\n      .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"] .choices__button:hover, .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"] .choices__button:focus {\n        opacity: 1; }\n      .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"] .choices__button:focus {\n        box-shadow: 0px 0px 0px 2px #00BCD4; }\n    .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"]:after {\n      content: \"\";\n      height: 0;\n      width: 0;\n      border-style: solid;\n      border-color: #333333 transparent transparent transparent;\n      border-width: 5px;\n      position: absolute;\n      right: 11.5px;\n      top: 50%;\n      margin-top: -2.5px;\n      pointer-events: none; }\n    .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"].is-open:after {\n      border-color: transparent transparent #333333 transparent;\n      margin-top: -7.5px; }\n    .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"][dir=\"rtl\"]:after {\n      left: 11.5px;\n      right: auto; }\n    .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-one\"][dir=\"rtl\"] .choices__button {\n      right: auto;\n      left: 0;\n      margin-left: 25px;\n      margin-right: 0; }\n  .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-multiple\"] .choices__inner, .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"text\"] .choices__inner {\n    cursor: text; }\n  .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-multiple\"] .choices__button, .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"text\"] .choices__button {\n    position: relative;\n    display: inline-block;\n    margin-top: 0;\n    margin-right: -4px;\n    margin-bottom: 0;\n    margin-left: 8px;\n    padding-left: 16px;\n    border-left: 1px solid #008fa1;\n    background-image: url(" + __webpack_require__(2886) + ");\n    background-size: 8px;\n    width: 8px;\n    line-height: 1;\n    opacity: .75; }\n    .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-multiple\"] .choices__button:hover, .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"select-multiple\"] .choices__button:focus, .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"text\"] .choices__button:hover, .pfdjs-container #pfdjs-pp-container .choices[data-type*=\"text\"] .choices__button:focus {\n      opacity: 1; }\n  .pfdjs-container #pfdjs-pp-container .choices__inner {\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    background-color: #f9f9f9;\n    padding: 7.5px 7.5px 3.75px;\n    border: 1px solid #DDDDDD;\n    border-radius: 2.5px;\n    font-size: 14px;\n    min-height: 44px;\n    overflow: hidden; }\n    .is-focused .pfdjs-container #pfdjs-pp-container .choices__inner, .is-open .pfdjs-container #pfdjs-pp-container .choices__inner {\n      border-color: #b7b7b7; }\n    .is-open .pfdjs-container #pfdjs-pp-container .choices__inner {\n      border-radius: 2.5px 2.5px 0 0; }\n    .is-flipped.is-open .pfdjs-container #pfdjs-pp-container .choices__inner {\n      border-radius: 0 0 2.5px 2.5px; }\n  .pfdjs-container #pfdjs-pp-container .choices__list {\n    margin: 0;\n    padding-left: 0;\n    list-style: none; }\n  .pfdjs-container #pfdjs-pp-container .choices__list--single {\n    display: inline-block;\n    padding: 4px 16px 4px 4px;\n    width: 100%; }\n    [dir=\"rtl\"] .pfdjs-container #pfdjs-pp-container .choices__list--single {\n      padding-right: 4px;\n      padding-left: 16px; }\n    .pfdjs-container #pfdjs-pp-container .choices__list--single .choices__item {\n      width: 100%; }\n  .pfdjs-container #pfdjs-pp-container .choices__list--multiple {\n    display: inline; }\n    .pfdjs-container #pfdjs-pp-container .choices__list--multiple .choices__item {\n      display: inline-block;\n      vertical-align: middle;\n      border-radius: 20px;\n      padding: 4px 10px;\n      font-size: 12px;\n      font-weight: 500;\n      margin-right: 3.75px;\n      margin-bottom: 3.75px;\n      background-color: #00BCD4;\n      border: 1px solid #00a5bb;\n      color: #FFFFFF;\n      word-break: break-all; }\n      .pfdjs-container #pfdjs-pp-container .choices__list--multiple .choices__item[data-deletable] {\n        padding-right: 5px; }\n      [dir=\"rtl\"] .pfdjs-container #pfdjs-pp-container .choices__list--multiple .choices__item {\n        margin-right: 0;\n        margin-left: 3.75px; }\n      .pfdjs-container #pfdjs-pp-container .choices__list--multiple .choices__item.is-highlighted {\n        background-color: #00a5bb;\n        border: 1px solid #008fa1; }\n      .is-disabled .pfdjs-container #pfdjs-pp-container .choices__list--multiple .choices__item {\n        background-color: #aaaaaa;\n        border: 1px solid #919191; }\n  .pfdjs-container #pfdjs-pp-container .choices__list--dropdown {\n    display: none;\n    z-index: 1;\n    position: absolute;\n    width: 100%;\n    background-color: #FFFFFF;\n    border: 1px solid #DDDDDD;\n    top: 100%;\n    margin-top: -1px;\n    border-bottom-left-radius: 2.5px;\n    border-bottom-right-radius: 2.5px;\n    overflow: hidden;\n    word-break: break-all; }\n    .pfdjs-container #pfdjs-pp-container .choices__list--dropdown.is-active {\n      display: block; }\n    .is-open .pfdjs-container #pfdjs-pp-container .choices__list--dropdown {\n      border-color: #b7b7b7; }\n    .is-flipped .pfdjs-container #pfdjs-pp-container .choices__list--dropdown {\n      top: auto;\n      bottom: 100%;\n      margin-top: 0;\n      margin-bottom: -1px;\n      border-radius: .25rem .25rem 0 0; }\n    .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__list {\n      position: relative;\n      max-height: 300px;\n      overflow: auto;\n      -webkit-overflow-scrolling: touch;\n      will-change: scroll-position; }\n    .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__item {\n      position: relative;\n      padding: 10px;\n      font-size: 14px; }\n      [dir=\"rtl\"] .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__item {\n        text-align: right; }\n    @media (min-width: 640px) {\n      .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__item--selectable {\n        padding-right: 100px; }\n        .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__item--selectable:after {\n          content: attr(data-select-text);\n          font-size: 12px;\n          opacity: 0;\n          position: absolute;\n          right: 10px;\n          top: 50%;\n          transform: translateY(-50%); }\n        [dir=\"rtl\"] .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__item--selectable {\n          text-align: right;\n          padding-left: 100px;\n          padding-right: 10px; }\n          [dir=\"rtl\"] .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__item--selectable:after {\n            right: auto;\n            left: 10px; } }\n    .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__item--selectable.is-highlighted {\n      background-color: #f2f2f2; }\n      .pfdjs-container #pfdjs-pp-container .choices__list--dropdown .choices__item--selectable.is-highlighted:after {\n        opacity: .5; }\n  .pfdjs-container #pfdjs-pp-container .choices__item {\n    cursor: default; }\n  .pfdjs-container #pfdjs-pp-container .choices__item--selectable {\n    cursor: pointer; }\n  .pfdjs-container #pfdjs-pp-container .choices__item--disabled {\n    cursor: not-allowed;\n    user-select: none;\n    opacity: .5; }\n  .pfdjs-container #pfdjs-pp-container .choices__heading {\n    font-weight: 600;\n    font-size: 12px;\n    padding: 10px;\n    border-bottom: 1px solid #f7f7f7;\n    color: gray; }\n  .pfdjs-container #pfdjs-pp-container .choices__button {\n    text-indent: -9999px;\n    -webkit-appearance: none;\n    appearance: none;\n    border: 0;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: center;\n    cursor: pointer; }\n    .pfdjs-container #pfdjs-pp-container .choices__button:focus {\n      outline: none; }\n  .pfdjs-container #pfdjs-pp-container .choices__input {\n    display: inline-block;\n    vertical-align: baseline;\n    background-color: #f9f9f9;\n    font-size: 14px;\n    margin-bottom: 5px;\n    border: 0;\n    border-radius: 0;\n    max-width: 100%;\n    padding: 4px 0 4px 2px; }\n    .pfdjs-container #pfdjs-pp-container .choices__input:focus {\n      outline: 0; }\n    [dir=\"rtl\"] .pfdjs-container #pfdjs-pp-container .choices__input {\n      padding-right: 2px;\n      padding-left: 0; }\n  .pfdjs-container #pfdjs-pp-container .choices__placeholder {\n    opacity: .5; }\n  .pfdjs-container #pfdjs-pp-container .pfdjs-pp-tabs {\n    padding: 0 15px;\n    text-align: left; }\n  .pfdjs-container #pfdjs-pp-container .pfdjs-pp-tabs .scroll-tabs-button {\n    color: gray;\n    cursor: pointer;\n    font-size: 16px;\n    padding: 3px 4px 3px 4px; }\n  .pfdjs-container #pfdjs-pp-container .pfdjs-pp-tabs .scroll-tabs-button:hover {\n    font-weight: bold; }\n  .pfdjs-container #pfdjs-pp-container .pfdjs-pp-tabs .scroll-tabs-button.scroll-tabs-left {\n    float: left;\n    margin-left: -15px; }\n  .pfdjs-container #pfdjs-pp-container .pfdjs-pp-tabs .scroll-tabs-button.scroll-tabs-right {\n    float: right;\n    margin-right: -15px; }\n  .pfdjs-container #pfdjs-pp-container .pfdjs-pp-tabs:not(.scroll-tabs-overflow) .scroll-tabs-button {\n    display: none; }\n  .pfdjs-container #pfdjs-pp-container ul.tab-sheets {\n    margin: -1px 0 5px 0;\n    overflow: hidden;\n    padding: 0;\n    white-space: nowrap; }\n  .pfdjs-container #pfdjs-pp-container ul.tab-sheets > li {\n    display: inline-block;\n    margin: 0; }\n  .pfdjs-container #pfdjs-pp-container ul.tab-sheets > li.tab-sheet-ignore {\n    display: none; }\n  .pfdjs-container #pfdjs-pp-container ul.tab-sheets > li > a {\n    background-color: #fff;\n    border: 1px solid lightgray;\n    -ms-border-radius: 4px 4px 0 0;\n    border-radius: 4px 4px 0 0;\n    border-bottom: transparent;\n    color: gray;\n    display: inline-block;\n    font-size: 12px;\n    padding: 4px 7px;\n    text-decoration: none; }\n  .pfdjs-container #pfdjs-pp-container ul.tab-sheets > li > a:hover {\n    color: gray; }\n  .pfdjs-container #pfdjs-pp-container ul.tab-sheets > li + li {\n    margin-left: 1px; }\n  .pfdjs-container #pfdjs-pp-container ul.tab-sheets > li.tab-sheet-active a {\n    border: 1px solid gray;\n    border-top: 2px solid #5990bd;\n    border-bottom: #fff;\n    color: #333;\n    padding-bottom: 5px; }\n  .pfdjs-container #pfdjs-pp-container .pfdjs-pp-contents {\n    margin-top: -6px; }\n    .pfdjs-container #pfdjs-pp-container .pfdjs-pp-contents .pfdjs-pp-content {\n      display: none;\n      border: 1px solid gray;\n      background-color: #fff;\n      padding: 6px; }\n      .pfdjs-container #pfdjs-pp-container .pfdjs-pp-contents .pfdjs-pp-content .pfdjs-pp-content-group {\n        text-align: left;\n        border-bottom: 1px solid lightgray;\n        padding-bottom: 6px;\n        margin-bottom: 6px;\n        font-size: 12px;\n        font-weight: bold; }\n        .pfdjs-container #pfdjs-pp-container .pfdjs-pp-contents .pfdjs-pp-content .pfdjs-pp-content-group .pfdjs-pp-field-wrapper {\n          margin: 4px; }\n        .pfdjs-container #pfdjs-pp-container .pfdjs-pp-contents .pfdjs-pp-content .pfdjs-pp-content-group label {\n          margin-bottom: 2px;\n          margin-top: 6px;\n          font-size: inherit; }\n        .pfdjs-container #pfdjs-pp-container .pfdjs-pp-contents .pfdjs-pp-content .pfdjs-pp-content-group input, .pfdjs-container #pfdjs-pp-container .pfdjs-pp-contents .pfdjs-pp-content .pfdjs-pp-content-group select {\n          width: 100%;\n          font-size: 11px; }\n      .pfdjs-container #pfdjs-pp-container .pfdjs-pp-contents .pfdjs-pp-content.open {\n        display: block; }\n", ""]);
	
	// exports


/***/ }),
/* 2885 */
/***/ (function(module, exports) {

	module.exports = "<svg viewBox=\"0 0 21 21\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><path d=\"M2.592.044l18.364 18.364-2.548 2.548L.044 2.592z\"></path><path d=\"M0 18.364L18.364 0l2.548 2.548L2.548 20.912z\"></path></g></svg>"

/***/ }),
/* 2886 */
/***/ (function(module, exports) {

	module.exports = "<svg viewBox=\"0 0 21 21\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#FFF\" fill-rule=\"evenodd\"><path d=\"M2.592.044l18.364 18.364-2.548 2.548L.044 2.592z\"></path><path d=\"M0 18.364L18.364 0l2.548 2.548L2.548 20.912z\"></path></g></svg>"

/***/ }),
/* 2887 */,
/* 2888 */,
/* 2889 */,
/* 2890 */,
/* 2891 */,
/* 2892 */,
/* 2893 */
/***/ (function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(__webpack_module_template_argument_0__);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(__webpack_module_template_argument_1__)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ })
])
});
;
//# sourceMappingURL=D3P.Editor.js.map
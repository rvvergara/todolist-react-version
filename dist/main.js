!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=160)}([function(e,t,n){var r=n(58),o=n(12),a=36e5,u=6e4,i=2,s=/[T ]/,c=/:/,f=/^(\d{2})$/,d=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],l=/^(\d{4})/,m=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],p=/^-(\d{2})$/,v=/^-?(\d{3})$/,g=/^-?(\d{2})-?(\d{2})$/,h=/^-?W(\d{2})$/,x=/^-?W(\d{2})-?(\d{1})$/,D=/^(\d{2}([.,]\d*)?)$/,b=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,y=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,T=/([Z+-].*)$/,M=/^(Z)$/,S=/^([+-])(\d{2})$/,Y=/^([+-])(\d{2}):?(\d{2})$/;function I(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}e.exports=function(e,t){if(o(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?i:Number(n);var N=function(e){var t,n={},r=e.split(s);if(c.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var o=T.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e),O=function(e,t){var n,r=d[t],o=m[t];if(n=l.exec(e)||o.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=f.exec(e)||r.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}(N.date,n),w=O.year,E=function(e,t){if(null===t)return null;var n,r,o,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=p.exec(e))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(t,o),r;if(n=v.exec(e)){r=new Date(0);var u=parseInt(n[1],10);return r.setUTCFullYear(t,0,u),r}if(n=g.exec(e)){r=new Date(0),o=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,o,i),r}if(n=h.exec(e))return a=parseInt(n[1],10)-1,I(t,a);if(n=x.exec(e)){a=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return I(t,a,s)}return null}(O.restDateString,w);if(E){var A,F=E.getTime(),H=0;if(N.time&&(H=function(e){var t,n,r;if(t=D.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*a;if(t=b.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*a+r*u;if(t=y.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return n%24*a+r*u+1e3*o}return null}(N.time)),N.timezone)k=N.timezone,A=(($=M.exec(k))?0:($=S.exec(k))?(z=60*parseInt($[2],10),"+"===$[1]?-z:z):($=Y.exec(k))?(z=60*parseInt($[2],10)+parseInt($[3],10),"+"===$[1]?-z:z):0)*u;else{var B=F+H,j=new Date(B);A=r(j);var C=new Date(B);C.setDate(j.getDate()+1);var W=r(C)-r(j);W>0&&(A+=W)}return new Date(F+H+A)}var k,$,z;return new Date(e)}},function(e,t,n){var r=n(0),o=n(2);e.exports=function(e){var t=r(e),n=t.getFullYear(),a=new Date(0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);var u=o(a),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var s=o(i);return t.getTime()>=u.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}},function(e,t,n){var r=n(8);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setDate(n.getDate()+o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=Number(t);return new Date(n+o)}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),o(n)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=r(t).getTime();return n<o?-1:n>o?1:0}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=(a<n?7:0)+a-n;return o.setDate(o.getDate()-u),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(3),o=6e4,a=864e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},function(e,t,n){var r=n(0),o=n(13);e.exports=function(e,t){var n=r(e),a=Number(t),u=n.getMonth()+a,i=new Date(0);i.setFullYear(n.getFullYear(),u,1),i.setHours(0,0,0,0);var s=o(i);return n.setMonth(u,Math.min(s,n.getDate())),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()-o.getTime()}},function(e,t){e.exports=function(e){return e instanceof Date}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear(),o=t.getMonth(),a=new Date(0);return a.setFullYear(n,o+1,0),a.setHours(0,0,0,0),a.getDate()}},function(e,t,n){var r=n(4);e.exports=function(e,t){var n=Number(t);return r(e,7*n)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=r(t).getTime();return n>o?-1:n<o?1:0}},function(e,t,n){var r=n(0),o=n(30),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setMonth(n.getMonth()-i*s),i*(s-(a(n,u)===-i))}},function(e,t,n){var r=n(11);e.exports=function(e,t){var n=r(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(71),o=n(72);e.exports={distanceInWords:r(),format:o()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0),o=n(2),a=n(6),u=6048e5;e.exports=function(e){var t=r(e),n=o(t).getTime()-a(t).getTime();return Math.round(n/u)+1}},function(e,t,n){var r=n(8);e.exports=function(e,t,n){var o=r(e,n),a=r(t,n);return o.getTime()===a.getTime()}},function(e,t,n){var r=n(5),o=36e5;e.exports=function(e,t){var n=Number(t);return r(e,n*o)}},function(e,t,n){var r=n(1),o=n(24);e.exports=function(e,t){var n=Number(t);return o(e,r(e)+n)}},function(e,t,n){var r=n(0),o=n(6),a=n(9);e.exports=function(e,t){var n=r(e),u=Number(t),i=a(n,o(n)),s=new Date(0);return s.setFullYear(u,0,4),s.setHours(0,0,0,0),(n=o(s)).setDate(n.getDate()+i),n}},function(e,t,n){var r=n(5),o=6e4;e.exports=function(e,t){var n=Number(t);return r(e,n*o)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,3*n)}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=Number(t);return r(e,1e3*n)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,12*n)}},function(e,t,n){var r=n(1);e.exports=function(e,t){return r(e)-r(t)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return Math.floor(t.getMonth()/3)+1}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()-o.getFullYear()}},function(e,t,n){var r=n(0),o=n(9),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setDate(n.getDate()-i*s),i*(s-(a(n,u)===-i))}},function(e,t,n){var r=n(23);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(15),o=n(0),a=n(17),u=n(16),i=n(18),s=1440,c=2520,f=43200,d=86400;e.exports=function(e,t,n){var l=n||{},m=r(e,t),p=l.locale,v=i.distanceInWords.localize;p&&p.distanceInWords&&p.distanceInWords.localize&&(v=p.distanceInWords.localize);var g,h,x={addSuffix:Boolean(l.addSuffix),comparison:m};m>0?(g=o(e),h=o(t)):(g=o(t),h=o(e));var D,b=a(h,g),y=h.getTimezoneOffset()-g.getTimezoneOffset(),T=Math.round(b/60)-y;if(T<2)return l.includeSeconds?b<5?v("lessThanXSeconds",5,x):b<10?v("lessThanXSeconds",10,x):b<20?v("lessThanXSeconds",20,x):b<40?v("halfAMinute",null,x):v(b<60?"lessThanXMinutes":"xMinutes",1,x):0===T?v("lessThanXMinutes",1,x):v("xMinutes",T,x);if(T<45)return v("xMinutes",T,x);if(T<90)return v("aboutXHours",1,x);if(T<s)return v("aboutXHours",Math.round(T/60),x);if(T<c)return v("xDays",1,x);if(T<f)return v("xDays",Math.round(T/s),x);if(T<d)return v("aboutXMonths",D=Math.round(T/f),x);if((D=u(h,g))<12)return v("xMonths",Math.round(T/f),x);var M=D%12,S=Math.floor(D/12);return M<3?v("aboutXYears",S,x):M<9?v("overXYears",S,x):v("almostXYears",S+1,x)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=6+(a<n?-7:0)-(a-n);return o.setDate(o.getDate()+u),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0),o=n(39),a=n(9);e.exports=function(e){var t=r(e);return a(t,o(t))+1}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},function(e,t,n){var r=n(12);e.exports=function(e){if(r(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getFullYear();return t%400==0||t%4==0&&t%100!=0}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getDay();return 0===t&&(t=7),t}},function(e,t,n){var r=n(44);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMinutes(0,0,0),t}},function(e,t,n){var r=n(21);e.exports=function(e,t){return r(e,t,{weekStartsOn:1})}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(48);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setSeconds(0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}},function(e,t,n){var r=n(51);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3;return t.setMonth(o,1),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(53);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMilliseconds(0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()===o.getFullYear()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=6+(a<n?-7:0)-(a-n);return o.setHours(0,0,0,0),o.setDate(o.getDate()+u),o}},function(e,t,n){var r=n(0),o=n(13);e.exports=function(e,t){var n=r(e),a=Number(t),u=n.getFullYear(),i=n.getDate(),s=new Date(0);s.setFullYear(u,a,15),s.setHours(0,0,0,0);var c=o(s);return n.setMonth(a,Math.min(i,c)),n}},function(e,t,n){e.exports={addDays:n(4),addHours:n(22),addISOYears:n(23),addMilliseconds:n(5),addMinutes:n(25),addMonths:n(10),addQuarters:n(26),addSeconds:n(27),addWeeks:n(14),addYears:n(28),areRangesOverlapping:n(59),closestIndexTo:n(60),closestTo:n(61),compareAsc:n(7),compareDesc:n(15),differenceInCalendarDays:n(9),differenceInCalendarISOWeeks:n(62),differenceInCalendarISOYears:n(29),differenceInCalendarMonths:n(30),differenceInCalendarQuarters:n(63),differenceInCalendarWeeks:n(64),differenceInCalendarYears:n(32),differenceInDays:n(33),differenceInHours:n(65),differenceInISOYears:n(66),differenceInMilliseconds:n(11),differenceInMinutes:n(67),differenceInMonths:n(16),differenceInQuarters:n(68),differenceInSeconds:n(17),differenceInWeeks:n(69),differenceInYears:n(70),distanceInWords:n(35),distanceInWordsStrict:n(74),distanceInWordsToNow:n(75),eachDay:n(76),endOfDay:n(19),endOfHour:n(77),endOfISOWeek:n(78),endOfISOYear:n(79),endOfMinute:n(80),endOfMonth:n(37),endOfQuarter:n(81),endOfSecond:n(82),endOfToday:n(83),endOfTomorrow:n(84),endOfWeek:n(36),endOfYear:n(85),endOfYesterday:n(86),format:n(87),getDate:n(88),getDay:n(89),getDayOfYear:n(38),getDaysInMonth:n(13),getDaysInYear:n(90),getHours:n(91),getISODay:n(42),getISOWeek:n(20),getISOWeeksInYear:n(92),getISOYear:n(1),getMilliseconds:n(93),getMinutes:n(94),getMonth:n(95),getOverlappingDaysInRanges:n(96),getQuarter:n(31),getSeconds:n(97),getTime:n(98),getYear:n(99),isAfter:n(100),isBefore:n(101),isDate:n(12),isEqual:n(102),isFirstDayOfMonth:n(103),isFriday:n(104),isFuture:n(105),isLastDayOfMonth:n(106),isLeapYear:n(41),isMonday:n(107),isPast:n(108),isSameDay:n(109),isSameHour:n(43),isSameISOWeek:n(45),isSameISOYear:n(46),isSameMinute:n(47),isSameMonth:n(49),isSameQuarter:n(50),isSameSecond:n(52),isSameWeek:n(21),isSameYear:n(54),isSaturday:n(110),isSunday:n(111),isThisHour:n(112),isThisISOWeek:n(113),isThisISOYear:n(114),isThisMinute:n(115),isThisMonth:n(116),isThisQuarter:n(117),isThisSecond:n(118),isThisWeek:n(119),isThisYear:n(120),isThursday:n(121),isToday:n(122),isTomorrow:n(123),isTuesday:n(124),isValid:n(40),isWednesday:n(125),isWeekend:n(126),isWithinRange:n(127),isYesterday:n(128),lastDayOfISOWeek:n(129),lastDayOfISOYear:n(130),lastDayOfMonth:n(131),lastDayOfQuarter:n(132),lastDayOfWeek:n(55),lastDayOfYear:n(133),max:n(134),min:n(135),parse:n(0),setDate:n(136),setDay:n(137),setDayOfYear:n(138),setHours:n(139),setISODay:n(140),setISOWeek:n(141),setISOYear:n(24),setMilliseconds:n(142),setMinutes:n(143),setMonth:n(56),setQuarter:n(144),setSeconds:n(145),setYear:n(146),startOfDay:n(3),startOfHour:n(44),startOfISOWeek:n(2),startOfISOYear:n(6),startOfMinute:n(48),startOfMonth:n(147),startOfQuarter:n(51),startOfSecond:n(53),startOfToday:n(148),startOfTomorrow:n(149),startOfWeek:n(8),startOfYear:n(39),startOfYesterday:n(150),subDays:n(151),subHours:n(152),subISOYears:n(34),subMilliseconds:n(153),subMinutes:n(154),subMonths:n(155),subQuarters:n(156),subSeconds:n(157),subWeeks:n(158),subYears:n(159)}},function(e,t){e.exports=function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}},function(e,t,n){var r=n(0);e.exports=function(e,t,n,o){var a=r(e).getTime(),u=r(t).getTime(),i=r(n).getTime(),s=r(o).getTime();if(a>u||i>s)throw new Error("The start of the range cannot be after the end of the range");return a<s&&i<u}},function(e,t,n){var r=n(0);e.exports=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,o,a=r(e).getTime();return t.forEach(function(e,t){var u=r(e),i=Math.abs(a-u.getTime());(void 0===n||i<o)&&(n=t,o=i)}),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,o,a=r(e).getTime();return t.forEach(function(e){var t=r(e),u=Math.abs(a-t.getTime());(void 0===n||u<o)&&(n=t,o=u)}),n}},function(e,t,n){var r=n(2),o=6e4,a=6048e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},function(e,t,n){var r=n(31),o=n(0);e.exports=function(e,t){var n=o(e),a=o(t);return 4*(n.getFullYear()-a.getFullYear())+(r(n)-r(a))}},function(e,t,n){var r=n(8),o=6e4,a=6048e5;e.exports=function(e,t,n){var u=r(e,n),i=r(t,n),s=u.getTime()-u.getTimezoneOffset()*o,c=i.getTime()-i.getTimezoneOffset()*o;return Math.round((s-c)/a)}},function(e,t,n){var r=n(11),o=36e5;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(0),o=n(29),a=n(7),u=n(34);e.exports=function(e,t){var n=r(e),i=r(t),s=a(n,i),c=Math.abs(o(n,i));return n=u(n,s*c),s*(c-(a(n,i)===-s))}},function(e,t,n){var r=n(11),o=6e4;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(16);e.exports=function(e,t){var n=r(e,t)/3;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(33);e.exports=function(e,t){var n=r(e,t)/7;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(0),o=n(32),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setFullYear(n.getFullYear()-i*s),i*(s-(a(n,u)===-i))}},function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var o;return r=r||{},o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}}}},function(e,t,n){var r=n(73);e.exports=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],c={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){c[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}}),{formatters:c,formattingTokensRegExp:r(c)}}},function(e,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);var o=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(e,t,n){var r=n(15),o=n(0),a=n(17),u=n(18),i=1440,s=43200,c=525600;e.exports=function(e,t,n){var f=n||{},d=r(e,t),l=f.locale,m=u.distanceInWords.localize;l&&l.distanceInWords&&l.distanceInWords.localize&&(m=l.distanceInWords.localize);var p,v,g,h={addSuffix:Boolean(f.addSuffix),comparison:d};d>0?(p=o(e),v=o(t)):(p=o(t),v=o(e));var x=Math[f.partialMethod?String(f.partialMethod):"floor"],D=a(v,p),b=v.getTimezoneOffset()-p.getTimezoneOffset(),y=x(D/60)-b;if("s"===(g=f.unit?String(f.unit):y<1?"s":y<60?"m":y<i?"h":y<s?"d":y<c?"M":"Y"))return m("xSeconds",D,h);if("m"===g)return m("xMinutes",y,h);if("h"===g)return m("xHours",x(y/60),h);if("d"===g)return m("xDays",x(y/i),h);if("M"===g)return m("xMonths",x(y/s),h);if("Y"===g)return m("xYears",x(y/c),h);throw new Error("Unknown unit: "+g)}},function(e,t,n){var r=n(35);e.exports=function(e,t){return r(Date.now(),e,t)}},function(e,t,n){var r=n(0);e.exports=function(e,t,n){var o=r(e),a=void 0!==n?n:1,u=r(t).getTime();if(o.getTime()>u)throw new Error("The first date cannot be after the second date");var i=[],s=o;for(s.setHours(0,0,0,0);s.getTime()<=u;)i.push(r(s)),s.setDate(s.getDate()+a);return i}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMinutes(59,59,999),t}},function(e,t,n){var r=n(36);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=o(n);return a.setMilliseconds(a.getMilliseconds()-1),a}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setSeconds(59,999),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMilliseconds(999),t}},function(e,t,n){var r=n(19);e.exports=function(){return r(new Date)}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(38),o=n(20),a=n(1),u=n(0),i=n(40),s=n(18);var c={M:function(e){return e.getMonth()+1},MM:function(e){return d(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return d(e.getDate(),2)},DDD:function(e){return r(e)},DDDD:function(e){return d(r(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return o(e)},WW:function(e){return d(o(e),2)},YY:function(e){return d(e.getFullYear(),4).substr(2)},YYYY:function(e){return d(e.getFullYear(),4)},GG:function(e){return String(a(e)).substr(2)},GGGG:function(e){return a(e)},H:function(e){return e.getHours()},HH:function(e){return d(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return d(c.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return d(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return d(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return d(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return d(e.getMilliseconds(),3)},Z:function(e){return f(e.getTimezoneOffset(),":")},ZZ:function(e){return f(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function f(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),o=r%60;return n+d(Math.floor(r/60),2)+t+d(o,2)}function d(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}e.exports=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=(n||{}).locale,a=s.format.formatters,f=s.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(a=o.format.formatters,o.format.formattingTokensRegExp&&(f=o.format.formattingTokensRegExp));var d=u(e);return i(d)?function(e,t,n){var r,o,a,u=e.match(n),i=u.length;for(r=0;r<i;r++)o=t[u[r]]||c[u[r]],u[r]=o||((a=u[r]).match(/\[[\s\S]/)?a.replace(/^\[|]$/g,""):a.replace(/\\/g,""));return function(e){for(var t="",n=0;n<i;n++)u[n]instanceof Function?t+=u[n](e,c):t+=u[n];return t}}(r,a,f)(d):"Invalid Date"}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getDate()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getDay()}},function(e,t,n){var r=n(41);e.exports=function(e){return r(e)?366:365}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getHours()}},function(e,t,n){var r=n(6),o=n(14),a=6048e5;e.exports=function(e){var t=r(e),n=r(o(t,60)).valueOf()-t.valueOf();return Math.round(n/a)}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMilliseconds()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMinutes()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMonth()}},function(e,t,n){var r=n(0),o=864e5;e.exports=function(e,t,n,a){var u=r(e).getTime(),i=r(t).getTime(),s=r(n).getTime(),c=r(a).getTime();if(u>i||s>c)throw new Error("The start of the range cannot be after the end of the range");if(!(u<c&&s<i))return 0;var f=(c>i?i:c)-(s<u?u:s);return Math.ceil(f/o)}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getSeconds()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getFullYear()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()>o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()<o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 1===r(e).getDate()}},function(e,t,n){var r=n(0);e.exports=function(e){return 5===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()>(new Date).getTime()}},function(e,t,n){var r=n(0),o=n(19),a=n(37);e.exports=function(e){var t=r(e);return o(t).getTime()===a(t).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 1===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()<(new Date).getTime()}},function(e,t,n){var r=n(3);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 6===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return 0===r(e).getDay()}},function(e,t,n){var r=n(43);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(45);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(46);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(47);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(49);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(50);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(52);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(21);e.exports=function(e,t){return r(new Date,e,t)}},function(e,t,n){var r=n(54);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(0);e.exports=function(e){return 4===r(e).getDay()}},function(e,t,n){var r=n(3);e.exports=function(e){return r(e).getTime()===r(new Date).getTime()}},function(e,t,n){var r=n(3);e.exports=function(e){var t=new Date;return t.setDate(t.getDate()+1),r(e).getTime()===r(t).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 2===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return 3===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getDay();return 0===t||6===t}},function(e,t,n){var r=n(0);e.exports=function(e,t,n){var o=r(e).getTime(),a=r(t).getTime(),u=r(n).getTime();if(a>u)throw new Error("The start of the range cannot be after the end of the range");return o>=a&&o<=u}},function(e,t,n){var r=n(3);e.exports=function(e){var t=new Date;return t.setDate(t.getDate()-1),r(e).getTime()===r(t).getTime()}},function(e,t,n){var r=n(55);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=o(n);return a.setDate(a.getDate()-1),a}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(){var e=Array.prototype.slice.call(arguments).map(function(e){return r(e)}),t=Math.max.apply(null,e);return new Date(t)}},function(e,t,n){var r=n(0);e.exports=function(){var e=Array.prototype.slice.call(arguments).map(function(e){return r(e)}),t=Math.min.apply(null,e);return new Date(t)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setDate(o),n}},function(e,t,n){var r=n(0),o=n(4);e.exports=function(e,t,n){var a=n&&Number(n.weekStartsOn)||0,u=r(e),i=Number(t),s=u.getDay();return o(u,((i%7+7)%7<a?7:0)+i-s)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMonth(0),n.setDate(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setHours(o),n}},function(e,t,n){var r=n(0),o=n(4),a=n(42);e.exports=function(e,t){var n=r(e),u=Number(t),i=a(n);return o(n,u-i)}},function(e,t,n){var r=n(0),o=n(20);e.exports=function(e,t){var n=r(e),a=Number(t),u=o(n)-a;return n.setDate(n.getDate()-7*u),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMilliseconds(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMinutes(o),n}},function(e,t,n){var r=n(0),o=n(56);e.exports=function(e,t){var n=r(e),a=Number(t)-(Math.floor(n.getMonth()/3)+1);return o(n,n.getMonth()+3*a)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setSeconds(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setFullYear(o),n}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setDate(1),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(3);e.exports=function(){return r(new Date)}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(0,0,0,0),o}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(4);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(22);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(25);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(26);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(27);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(14);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(28);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){"use strict";n.r(t);class r{constructor(e,t){this.name=e,this.todos=[],this.id=t}}const o=e=>JSON.parse(localStorage.getItem(e)),a=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},u=e=>{localStorage.removeItem(e)};var i=(()=>{let e=o("projectsArray")?o("projectsArray"):[];return null===o("projectCount")&&a("projectCount",0),{create(t){""===t&&(t="Project Name (Please customize name)");let n=o("projectCount"),u=new r(t,n+=1);return a(t,u),a("projectCount",n),e.push(u),a("projectsArray",e),u},update(t){let n=e.find(e=>e.id===t).name,r=o(n),i=o(r.name),s=e.findIndex(e=>e.name===i.name);return i.name=document.getElementById("projectName").value,i.todos=r.todos.slice(),e.splice(s,1,i),a(i.name,i),a("projectsArray",e),u(r.name),i},delete(t){let n=o(t),r=o("projectCount"),i=e.findIndex(e=>e.name===n.name);u(t),e.splice(i,1),a("projectCount",r-=1),a("projectsArray",e)}}})();const s=e=>{let t=i.create(e);B(t)},c=e=>{let t=i.update(Number(e.getAttribute("data-id")));document.getElementById(`update-proj-${e.getAttribute("data-id")}`).setAttribute("class","btn btn-sm btn-info ml-3"),document.getElementById(`projectSpan-${e.getAttribute("data-id")}`).innerText=t.name};class f{constructor(e,t,n,r,o="",a){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.notes=o,this.project=a,this.id=Math.round(1e21*Math.random(),0),this.done=!1}}const d=e=>{let t=l(e);v(t,e),"d-none"!==document.getElementById("todosSection").getAttribute("class")&&document.getElementById("todosSection").setAttribute("class","d-none")},l=e=>{let t=document.createElement("button");return t.setAttribute("class","btn btn-sm btn-block btn-primary addTodoBtn"),t.setAttribute("id",`addTodoBtn-${e.id}`),t.setAttribute("data-id",e.id),t.innerText=`Add Todo for ${e.name}`,t.addEventListener("click",t=>{t.stopPropagation(),m(t.target,e,"newTodo")}),t},m=(e,t,n)=>{document.getElementById("todosDiv").removeChild(e),p(t,n)},p=(e,t,n)=>{let r=document.getElementById("todosForm");r.setAttribute("data-id",e.id),void 0!==n&&r.setAttribute("data-update",n),document.getElementById("todosSection").setAttribute("class","mt-3"),document.getElementById("todosForm").setAttribute("data-action",t)},v=(e,t)=>{document.getElementsByClassName("addTodoBtn")[0]&&document.getElementById("todosDiv").removeChild(document.getElementsByClassName("addTodoBtn")[0]),null===document.getElementById(`addTodoBtn-${t.id}`)&&document.getElementById("todosDiv").appendChild(e)},g=e=>{let t=Number(e.getAttribute("data-update")),n=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),r=y(n),o=T(r);x.update(o,t,r)},h=e=>{let t=document.getElementsByClassName("todo-form");return[t[0].value,t[1].value,new Date(t[2].value).toDateString(),document.getElementsByTagName("select")[0].value,t[3].value,e]};document.getElementById("todosForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=o("projectsArray"),n=Number(e.getAttribute("data-id")),r=t.find(e=>e.id===n),a=h(r.name);"newTodo"===e.getAttribute("data-action")?x.create(...a):g(e),e.reset(),document.getElementById("todosSection").setAttribute("class","d-none"),b(r.name),d(r)})(e.target)});var x=(()=>({create(e,t,n,r,u,i){const s=new f(e,t,n,r,u,i),c=o(i);return c.todos.push(s),a(i,c),s},update(e,t,n){const r=e.todos.findIndex(e=>e.id===t),{done:o}=e.todos[r],[u,i,s,c,f,d]=h(n),l={title:u,description:i,dueDate:s,priority:c,notes:f,project:d,done:o,id:t};e.todos.splice(r,1,l),a(e.name,e)},delete(e,t){const n=o(e),r=n.todos.findIndex(e=>e.id===Number(t));n.todos.splice(r,1),a(e,n)}}))(),D=n(57);const b=e=>{let t=T(e),n=document.getElementById("todoBody");n.innerHTML="",null===t||0===t.todos.length?M(e):(document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),t.todos.forEach(e=>{S(n,e,t)}))},y=e=>o("projectsArray").find(t=>t.id===e).name,T=e=>o(e),M=e=>{let t=document.createElement("p");t.setAttribute("class","emptyTodoMessage"),t.innerText=`No todo items for ${e} yet`,document.getElementsByTagName("table")[0].setAttribute("class","table table-striped"),document.getElementById("todoBody").appendChild(t)},S=(e,t,n)=>{let r=document.createElement("tr"),o=document.createElement("td"),a=O(),u=Y(t.id);o.appendChild(u),o.appendChild(a),r.setAttribute("id",t.id),t.done&&r.setAttribute("class","strikeout"),["title","description","dueDate","priority","notes","done"].forEach(e=>{"done"===e?E(r,t[e],t,n):E(r,t[e])}),r.appendChild(o),e.appendChild(r)},Y=e=>{let t=document.createElement("button");return t.setAttribute("class","btn btn-sm btn-warning mx-1 updateTodo"),t.setAttribute("id",e),t.innerText="Update",t.addEventListener("click",e=>{e.stopPropagation(),I(e.target)}),t},I=e=>{let t=e.parentNode.parentNode,n=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),r=y(n),o=e.getAttribute("id"),a=T(r);t.parentNode.removeChild(t),p(a,"updateTodo",o),N(a,o)},N=(e,t)=>{let n=e.todos.find(e=>e.id==t),r=document.getElementsByClassName("todo-form"),o=D.format(new Date(n.dueDate),"YYYY-MM-DD");window.curDueDate=o,r[0].value=n.title,r[1].value=n.description,r[2].value=o,document.getElementsByTagName("select")[0].value=n.priority,r[3].value=n.notes},O=()=>{let e=document.createElement("button");return e.setAttribute("class","btn btn-sm btn-danger mx-1 deleteTodo"),e.innerText="Delete",e.addEventListener("click",e=>{e.stopPropagation(),w(e.target)}),e},w=e=>{let t=Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),n=y(t),r=e.parentNode.parentNode.getAttribute("id");x.delete(n,r),e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)},E=(e,t,n,r)=>{let o=document.createElement("td");"boolean"==typeof t?o.appendChild(A(t,n,r)):o.innerText=t,e.appendChild(o)},A=(e,t,n)=>{let r=document.createElement("input");return r.setAttribute("type","checkbox"),t.done&&r.setAttribute("checked",!0),r.setAttribute("value",e),r.addEventListener("change",e=>{e.stopPropagation(),F(e.target,t,n)}),r},F=(e,t,n)=>{t.done=!t.done,H(e,t.done),[...e.parentNode.parentNode.childNodes[6].childNodes].forEach(e=>e.toggleAttribute("disabled"));let r=t.done;e.setAttribute("value",r);let o=n.todos.findIndex(e=>e.id===t.id);n.todos.splice(o,1,t),a(n.name,n)},H=(e,t)=>{t?e.parentNode.parentNode.setAttribute("class","strikeout"):e.parentNode.parentNode.removeAttribute("class")},B=e=>{j(),C(e)},j=()=>{let e=document.getElementsByClassName("emptyMessage")[0];void 0!==e&&document.getElementsByTagName("ul")[0].removeChild(e)},C=e=>{let t=document.createElement("li"),n=document.createElement("span"),r=W("delete",e),a=W("update",e);n.setAttribute("id",`projectSpan-${e.id}`),n.innerText=e.name,t.setAttribute("class","list-group-item"),t.setAttribute("id",`projectLi-${e.id}`),t.addEventListener("click",()=>{e=o("projectsArray").find(t=>t.id===e.id),d(e),b(e.name)}),[n,r,a].forEach(e=>t.appendChild(e)),document.getElementsByTagName("ul")[0].appendChild(t)},W=(e,t)=>{let n=k(e,t);return $(n,t,e),n},k=(e,t)=>{let n="update"===e?"btn-info":"btn-danger",r="update"===e?`update-proj-${t.id}`:`delete-proj-${t.id}`,o=document.createElement("button");return o.setAttribute("class",`btn btn-sm ml-3 ${n}`),o.setAttribute("id",r),o.innerText=e.toUpperCase(),"update"===e&&o.setAttribute("data-id",`${t.id}`),o},$=(e,t,n)=>{e.addEventListener("click",e=>{e.stopPropagation(),t=o("projectsArray").find(e=>e.id===t.id),"update"===n?z(e.target,t):X(t)})},z=(e,t)=>{P(e,"update",e.getAttribute("data-id")),document.getElementById("projectName").value=t.name},P=(e,t,n)=>{let r=document.getElementById("projectNameForm");r.removeAttribute("class"),r.setAttribute("data-action",t),r.setAttribute("data-id",n),e.setAttribute("class","d-none")},X=e=>{i.delete(e.name),L(e)},L=e=>{let t=document.getElementById(`projectLi-${e.id}`);if(document.getElementsByTagName("ul")[0].removeChild(t),"[]"===o("projectsArray")){let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}};document.getElementById("projectNameForm").addEventListener("submit",e=>{e.preventDefault(),(e=>{let t=document.getElementById("projectName").value;"new"===e.getAttribute("data-action")?s(t):c(e),e.setAttribute("class","d-none"),e.reset(),document.getElementById("addProjBtn").setAttribute("class","btn btn-sm btn-primary mt-2")})(e.target)}),document.getElementById("addProjBtn").addEventListener("click",e=>{P(e.target,"new")}),null===o("projectsArray")&&a("projectsArray",[]),(()=>{let e;0===o("projectCount")&&(e=i.create("Default Project")),null!==o("Default Project")&&(e=o("Default Project"),d(e),b(e.name))})(),(()=>{let e=o("projectsArray");if(e.length>0)e.forEach(e=>{B(e)});else{let e=document.createElement("li");e.setAttribute("class","list-group-item emptyMessage"),e.innerText="No projects yet, create one",document.getElementsByTagName("ul")[0].appendChild(e)}})()}]);
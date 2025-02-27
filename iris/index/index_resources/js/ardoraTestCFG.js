//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cuál es el principal componente del sistema nervioso central?","¿Cuál es el principal órgano del sistema circulatorio?","¿Qué sistema del cuerpo humano se encarga de la defensa contra infecciones?","¿Cuál es la función principal del sistema digestivo?"];
var answers1=["MU3DqWR1bGEgZXNwaW5hbA==","ME5lcnZpb3MgcGVyaWbDqXJpY29z","MEPDqWx1bGFzIHNhbmd1w61uZWFz","MEh1ZXNvcw=="];
var answers2=["MUNvcmF6w7Nu","MEjDrWdhZG8=","MFB1bG3Ds24=","MFJpw7HDs24="];
var answers3=["MVNpc3RlbWEgaW5tdW5vbMOzZ2ljbw==","MFNpc3RlbWEgbmVydmlvc28=","MFNpc3RlbWEgZGlnZXN0aXZv","MFNpc3RlbWEgZXNxdWVsw6l0aWNv"];
var answers4=["MURlc2NvbXBvbmVyIGxvcyBhbGltZW50b3M=","MFRyYW5zcG9ydGFyIHNhbmdyZQ==","MFJlZ3VsYXIgbGEgdGVtcGVyYXR1cmE=","MFByb2R1Y2lyIGhvcm1vbmFz"];
var ans=[answers1,answers2,answers3,answers4];
var err=["","","",""];
var ima=["sistema-circulatorio-default.jpg","descarga__8_.jpeg","descarga__9_.jpeg","descarga__10_.jpeg"];
var mp4=["","","",""];
var ogv=["","","",""];
var alt=["","","",""];
var info=["","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="index_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];

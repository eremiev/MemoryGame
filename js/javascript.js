
$(document).ready(function(){ 
	
var x=0;
var y=0;
var lastx;
var lasty;
var br=0;
var obr=0;
			
				var massPic = new Array();

				massPic[0]='01.jpg';
				massPic[1]='02.jpg';
				massPic[2]='03.jpg';
				massPic[3]='04.jpg';
				massPic[4]='05.jpg';
				massPic[5]='06.jpg';
				massPic[6]='01.jpg';
				massPic[7]='02.jpg';
				massPic[8]='03.jpg';
				massPic[9]='04.jpg';
				massPic[10]='05.jpg';
				massPic[11]='06.jpg';
			
		  
				var MASS = new Array();	

				MASS[0]=new Array();
				MASS[0][0]=new Array();
				MASS[0][0]['txt']='01.jpg';
				MASS[0][0]['open']=false;
				MASS[0][0]['side']='a';
				
				MASS[0][1]=new Array();
				MASS[0][1]['txt']='02.jpg';
				MASS[0][1]['open']=false;
				MASS[0][1]['side']='a';

				MASS[0][2]=new Array();
				MASS[0][2]['txt']='03.jpg';
				MASS[0][2]['open']=false;
				MASS[0][2]['side']='a';

				MASS[0][3]=new Array();
				MASS[0][3]['txt']='04.jpg';
				MASS[0][3]['open']=false;
				MASS[0][3]['side']='a';

				MASS[1]=new Array();
				MASS[1][0]=new Array();
				MASS[1][0]['txt']='05.jpg';
				MASS[1][0]['open']=false;
				MASS[1][0]['side']='a';

				MASS[1][1]=new Array();
				MASS[1][1]['txt']='06.jpg';
				MASS[1][1]['open']=false;
				MASS[1][1]['side']='a';

				MASS[1][2]=new Array();
				MASS[1][2]['txt']='01.jpg';
				MASS[1][2]['open']=false;
				MASS[1][2]['side']='a';

				MASS[1][3]=new Array();
				MASS[1][3]['txt']='02.jpg';
				MASS[1][3]['open']=false;
				MASS[1][3]['side']='a';

				MASS[2]=new Array();
				MASS[2][0]=new Array();
				MASS[2][0]['txt']='03.jpg';
				MASS[2][0]['open']=false;
				MASS[2][0]['side']='a';
				
				MASS[2][1]=new Array();
				MASS[2][1]['txt']='04.jpg';
				MASS[2][1]['open']=false;		
				MASS[2][1]['side']='a';				
				
				MASS[2][2]=new Array();
				MASS[2][2]['txt']='05.jpg';
				MASS[2][2]['open']=false;
				MASS[2][2]['side']='a';

				MASS[2][3]=new Array();
				MASS[2][3]['txt']='06.jpg';
				MASS[2][3]['open']=false;
				MASS[2][3]['side']='a';


				
				ranPics = [];
				l = massPic.length;
   				r = 0;
	 		
			  			while(l--){
							r = Math.floor(Math.random() * (l+1));
							ranPics.push(massPic[r]);
							massPic.splice(r,1);
						}
						//Math.floor(Math.random()* 11) +1;
					
					//	console.log(ranPics);
				var k=0;
						for(var j=0; j < 3; j++)
				 	 		for(var j1=0; j1 < 4; j1++){
								MASS[j][j1]['txt'] = ranPics[k];
								k++
						}
			
		

		$(".flipbox").click(function() {
			
var x = $(this).attr("x");
var y = $(this).attr("y");
				
				if(	MASS[x][y]['side']=='a'){ 
						
					MASS[x][y]['side']='b';
					
							$(this).flippy({
								depth : "0.17",
								color_target : "#420021",
								direction : "top",
				    			duration: "500",
				    			verso: "<img src= 'img/"+ MASS[x][y]['txt']+" ' width='296' height='150' /> ",
				    			onStart : function() {},
				    			onReverseFinish : function(){},
				        		onFinish : function() { 
				        					
				        				
				        				
				        			if(lastx || lasty === 0){
				        				
				        				
					        				if( MASS[x][y]['txt'] != MASS[lastx][lasty]['txt']){
					        					
					        					
						        					if(MASS[lastx][lasty]['open'] == false)
						        						
						        						$('div[x='+lastx+'][y='+lasty+']').flippyReverse();
						        					
						        					if(MASS[x][y]['open'] == false)
						        						
						        						$('div[x='+x+'][y='+y+']').flippyReverse();
						        						
						        						MASS[x][y]['side']='a';
														MASS[lastx][lasty]['side']='a';
						        						
						        						lastx=null;
						        						lasty=null;
														
														br++;
														$("#br").text("Points: " +br);
														
													//	console.log(MASS[x][y]['side']);
											
					        				}else{
					        						
					        						MASS[x][y]['open']= true;
													MASS[lastx][lasty]['open']= true;
					        					obr++;
					        					if(obr == "6"){
														$('.flipbox').hide();
														$("#br").animate({top:'295px'}, 'slow');
														$('.finish').show("slow");
												}

					        						lastx=null;
					        						lasty=null;

					        						
					        					//	console.log(obr);
					        						br++;
													$("#br").text("Points: " +br);
					        					}
				        			}else{ 
				        					
				        					lastx=x;
				        					lasty=y;
				        					
				        				  }
									
									
				        		}
				        		
				          
				 			});
				
				} 
					
		});



	
});

				
			

			
	

			





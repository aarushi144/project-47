function Asteroids( width, height ){
           if(frameCount% 70 === 0){
            asteroid = createSprite( random(50,750),0, width, height);
            asteroid.velocityY = 4
           asteroid.addImage(asteroidimg)
           asteroid.scale = 0.15
           asteroidGroup.push(asteroid)
           }
      
 
    }

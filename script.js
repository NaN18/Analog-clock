setInterval(setClock,1000)
            
            const hourHand=document.querySelector('[data-hour-hand]')
            const minuteHand=document.querySelector('[data-minute-hand]')
            const secHand=document.querySelector('[data-second-hand]')

                function setClock()
                {
                    const currentDate=new Date()
                    const secRatio=currentDate.getSeconds()/60
                    const minuteRatio=(secRatio + currentDate.getMinutes()) / 60
                    const hourRatio=(minuteRatio + currentDate.getHours()) / 12
                    setRotation(secHand,secRatio)
                    setRotation(minuteHand,minuteRatio)
                    setRotation(hourHand,hourRatio)

                }
            function setRotation(element,rotationRatio)
            {
                element.style.setProperty('--rotation', rotationRatio * 360)
            }
            setClock()
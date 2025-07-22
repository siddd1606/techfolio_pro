import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  texts = ["I craft digital experiences that bridge imagination and innovation"],
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  className = ""
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? delayBetween : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isWaiting, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-electric-cyan">|</span>
    </span>
  );
};

export default TypewriterText;
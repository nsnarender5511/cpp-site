import React, { useEffect } from 'react';

// Default implementation, that you can customize
export default function Root({children}) {
  useEffect(() => {
    // Add client-side only code to implement copy functionality
    const addCodeBlockCopyFunctionality = () => {
      const copyButtons = document.querySelectorAll('.copyButton');
      
      copyButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Find the closest code block
          const codeBlock = button.closest('.codeBlockWrapper')?.querySelector('code');
          
          if (codeBlock) {
            const code = codeBlock.textContent;
            
            // Use clipboard API
            navigator.clipboard.writeText(code)
              .then(() => {
                // Show success feedback
                button.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                
                // Reset after 2 seconds
                setTimeout(() => {
                  button.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>';
                }, 2000);
              })
              .catch(err => {
                console.error('Failed to copy text: ', err);
              });
          }
        });
      });
    };

    // Run once the DOM is fully loaded
    if (document.readyState === 'complete') {
      addCodeBlockCopyFunctionality();
    } else {
      window.addEventListener('load', addCodeBlockCopyFunctionality);
      return () => window.removeEventListener('load', addCodeBlockCopyFunctionality);
    }

    // Also add a MutationObserver to handle dynamically added copy buttons
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const newCopyButtons = document.querySelectorAll('.copyButton:not([data-initialized])');
          
          newCopyButtons.forEach(button => {
            button.setAttribute('data-initialized', 'true');
            button.addEventListener('click', () => {
              // Find the closest code block
              const codeBlock = button.closest('.codeBlockWrapper')?.querySelector('code');
              
              if (codeBlock) {
                const code = codeBlock.textContent;
                
                // Use clipboard API
                navigator.clipboard.writeText(code)
                  .then(() => {
                    // Show success feedback
                    button.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                      button.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>';
                    }, 2000);
                  })
                  .catch(err => {
                    console.error('Failed to copy text: ', err);
                  });
              }
            });
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {children}
    </>
  );
} 
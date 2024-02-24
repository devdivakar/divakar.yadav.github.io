import React from 'react';
import './RenderContent.css';

const RenderContent = ({ jsonData }) => {
  // Function to render HTML content based on type
  const renderHTMLContent = (item) => {
    switch (item.type) {
      case 'text_para_with_heading':
       return  (
            <div class="detail_content_para">
                <div class="detail_content_heading">{item.heading}</div>
                <div class="detail_para">{item.text_para_with_heading}</div>
            </div>
        )
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Map through JSON data and render content */}
      {jsonData.map((item, index) => (
        <div key={index}>
          {renderHTMLContent(item)}
        </div>
      ))}
    </div>
  );
};

export default RenderContent;

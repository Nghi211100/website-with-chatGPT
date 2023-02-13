import React from "react";

export default function Map() {
  return (
    <div>
      <p className="text-2xl sm:text-3xl font-bold ">Location on the map</p>
      <div className="mx-auto w-max p-6 my-6 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2865708020836!2d106.69788995088277!3d10.789349661866394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b555c872a7%3A0xd4c90543ff33dc01!2zNTYgTmd1eeG7hW4gxJDDrG5oIENoaeG7g3UsIMSQYSBLYW8sIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1676015715105!5m2!1svi!2s"
          className="border md:w-[800px] h-[500px]"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

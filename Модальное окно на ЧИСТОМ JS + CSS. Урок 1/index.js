const modal = $.modal({
  title: "Vladimir Modal",
  closable: true,
  content: `
   <p>Lorem ipsum dolor sit amet</p>
   <p>Lorem ipsum dolor sit amet</p>
 `,
  width: "400px",
  footerButtons: [
    {
      text: "Okey",
      type: "primary",
      header() {
        console.log("Primary btn clicked");
      },
    },
    {
      text: "Cancel",
      type: "danger",
      header() {
        console.log("Danger btn clicked");
      },
    },
  ],
});

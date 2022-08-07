wp.blocks.registerBlockType('testimonials/custom-block', {
    title: 'Tarjeta de Testimonios',
    icon: 'media-document',
    category: 'design',
    attributes: {
        autor: { type: 'string', default:'' },
        comentario: { type: 'string', default: '' },
        imagen: { type: 'string', default: ''}
    },
    edit: function (props) {
        const { InspectorControls, MediaUpload, useBlockProps,
            MediaUploadCheck } = wp.blockEditor;
        const { PanelBody, Button } = wp.components;

        const blockProps = useBlockProps();

        function updateAutor(evt) {
            props.setAttributes({ autor: evt.target.value });
        }

        function updateImagen(newImage) {
            props.setAttributes({ imagen: newImage.sizes.full.url });
        }
        function updateComentario(evt) {
            props.setAttributes({comentario: evt.target.value });
        }

        console.log(blockProps);

        return ([wp.element.createElement("div", useBlockProps({
            key: Math.floor(Math.random())
          }), /*#__PURE__*/wp.element.createElement(InspectorControls, null, /*#__PURE__*/wp.element.createElement(PanelBody, {
              title: 'Imagen para el testimonio'
            }, /*#__PURE__*/wp.element.createElement("p", null, /*#__PURE__*/wp.element.createElement("strong", null, "Selecciones una imagen")), /*#__PURE__*/wp.element.createElement(MediaUploadCheck, null, /*#__PURE__*/wp.element.createElement(MediaUpload, {
              onSelect: updateImagen,
              type: "image",
              value: props.attributes.imagen,
              render: ({
                open
              }) => /*#__PURE__*/wp.element.createElement(wp.element.Fragment, null, /*#__PURE__*/wp.element.createElement(Button, {
                onClick: open
              }, "Seleccionar imagen"))
            }))), /*#__PURE__*/wp.element.createElement(PanelBody, null, /*#__PURE__*/wp.element.createElement("label", {
              htmlFor: "Autor"
            }, "Autor"), /*#__PURE__*/wp.element.createElement("input", {
              type: "text",
              id: "Autor",
              placeholder: "Ingrese el Autor",
              value: props.attributes.autor,
              onChange: updateAutor
            })), /*#__PURE__*/wp.element.createElement(PanelBody, null, /*#__PURE__*/wp.element.createElement("label", {
              htmlFor: "comentario"
            }, "Testimonio"), /*#__PURE__*/wp.element.createElement("textarea", {
              id: "comentario",
              placeholder: "Ingrese el testimonio",
              value: props.attributes.comentario,
              onChange: updateComentario
            })))),
            wp.element.createElement("div", {
                className: "testimonios"
              }, /*#__PURE__*/wp.element.createElement("div", {
                className: "testimonios-imagen"
              }, /*#__PURE__*/wp.element.createElement("img", {
                src: props.attributes.imagen,
                loading: "lazy"
              })), /*#__PURE__*/wp.element.createElement("div", {
                className: "testimonio-contenido"
              }, /*#__PURE__*/wp.element.createElement("h3", null, "Ambientales en acci\xF3n"), /*#__PURE__*/wp.element.createElement("blockquote", {
                className: "contenido-comentario"
              }, props.attributes.comentario)), /*#__PURE__*/wp.element.createElement("div", {
                className: "testimonios-pie-card"
              }, /*#__PURE__*/wp.element.createElement("cite", {
                className: "contenido-estudiante"
              }, "- ", props.attributes.autor, " -")))
        ]);
    },
    save: function (props) {
        const blockProps = useBlockProps.save({
            className: 'testimonios'
        });

        return wp.element.createElement("div", blockProps, /*#__PURE__*/wp.element.createElement("div", {
            className: "testimonios-icon"
          }, /*#__PURE__*/wp.element.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, /*#__PURE__*/wp.element.createElement("path", {
            d: "M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
          }))), /*#__PURE__*/wp.element.createElement("div", {
            className: "testimonios-imagen"
          }, /*#__PURE__*/wp.element.createElement("img", {
            src: props.attributes.imagen,
            loading: "lazy"
          })), /*#__PURE__*/wp.element.createElement("div", {
            className: "testimonio-contenido"
          }, /*#__PURE__*/wp.element.createElement("h3", null, "Ambientales en acci\xF3n"), /*#__PURE__*/wp.element.createElement("blockquote", {
            className: "contenido-comentario"
          }, props.attributes.comentario)), /*#__PURE__*/wp.element.createElement("div", {
            className: "testimonios-pie-card"
          }, /*#__PURE__*/wp.element.createElement("cite", {
            className: "contenido-estudiante"
          }, "- ", props.attributes.autor, " -")));
    }
});
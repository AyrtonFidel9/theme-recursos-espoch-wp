//registrar tipo de bloque 
const { registerBlockType } = wp.blocks;
const { InspectorControls, MediaUpload, useBlockProps,
    RichText,
    AlignmentToolbar,
    BlockControls,MediaUploadCheck } = wp.blockEditor;
const { PanelBody, Button, Panel } = wp.components;

registerBlockType('card-menu/custom-block', {
    title: 'Menu de opciones como tarjetas',
    icon: 'screenoptions',
    category: 'design',
    attributes: {
        titulo: { type: 'string', default:'' },
        imagen: { type: 'string', default: null },
        alto: { type: 'string', default: ''},
        ancho: { type: 'string', default: '' },
        link: { type: 'string', default: '' }
    },
    edit: function (props) {
        const blockProps = useBlockProps();
        console.log(props.attributes);
        function updateTitulo(evt) {
            props.setAttributes({ titulo: evt.target.value });
        }

        function updateImagen(newImage) {
            props.setAttributes({ imagen: newImage.sizes.full.url });
        }

        function updateAlto(evt) {
            props.setAttributes({ alto: evt.target.value });
        }

        function updateAncho(evt) {
            props.setAttributes({ ancho: evt.target.value });
        }

        function updateLink(evt) {
            props.setAttributes({ link: evt.target.value });
        }

        return ([wp.element.createElement("div", useBlockProps({
          key: Math.floor(Math.random())
        }), /*#__PURE__*/wp.element.createElement(InspectorControls, null, /*#__PURE__*/wp.element.createElement(PanelBody, {
            title: 'Imagen de fondo'
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
            htmlFor: "titulo"
          }, "Titulo"), /*#__PURE__*/wp.element.createElement("input", {
            type: "text",
            id: "titulo",
            placeholder: "Ingrese el titulo",
            value: props.attributes.titulo,
            onChange: updateTitulo
          })), /*#__PURE__*/wp.element.createElement(PanelBody, null, /*#__PURE__*/wp.element.createElement("label", {
            htmlFor: "alto"
          }, "Alto"), /*#__PURE__*/wp.element.createElement("input", {
            type: "number",
            id: "alto",
            placeholder: "Ingrese el alto",
            value: props.attributes.alto,
            onChange: updateAlto
          })), /*#__PURE__*/wp.element.createElement(PanelBody, null, /*#__PURE__*/wp.element.createElement("label", {
            htmlFor: "ancho"
          }, "Ancho"), /*#__PURE__*/wp.element.createElement("input", {
            type: "number",
            id: "ancho",
            placeholder: "Ingrese el ancho",
            value: props.attributes.ancho,
            onChange: updateAncho
          })), /*#__PURE__*/wp.element.createElement(PanelBody, null, /*#__PURE__*/wp.element.createElement("label", {
            htmlFor: "link"
          }, "Link"), /*#__PURE__*/wp.element.createElement("input", {
            type: "text",
            id: "link",
            placeholder: "Ingrese el link del recurso",
            value: props.attributes.link,
            onChange: updateLink
          })))),
          wp.element.createElement("div", {
            className: "card-menu",
            key:props.attributes.titulo
          }, /*#__PURE__*/wp.element.createElement("div", {
            className: "card-menu__principal"
          }, /*#__PURE__*/wp.element.createElement("div", {
            className: "card-menu__principal-titulo"
          }, /*#__PURE__*/wp.element.createElement("h3", null, props.attributes.titulo)), /*#__PURE__*/wp.element.createElement("img", {
            src: props.attributes.imagen,
            style: {
              height:props.attributes.alto+"px",
              width:props.attributes.ancho+"px",
              objectFit: "cover"
            }
          })), /*#__PURE__*/wp.element.createElement("div", {
            className: "card-menu__secundario"
          }, /*#__PURE__*/wp.element.createElement("a", {
            href: props.attributes.link
          })))
        ]);
    },

    save: function (props) {
        function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

        const blockProps = useBlockProps.save({
          className: "card-menu"
        });

        return wp.element.createElement("div", _extends({
          style: {
            height:props.attributes.alto+"px"
          }
        }, blockProps), /*#__PURE__*/wp.element.createElement("div", {
          className: "card-menu__principal"
        }, /*#__PURE__*/wp.element.createElement("div", {
          className: "card-menu__principal-titulo"
        }, /*#__PURE__*/wp.element.createElement("h3", null, props.attributes.titulo)), /*#__PURE__*/wp.element.createElement("img", {
          src: props.attributes.imagen
        })), /*#__PURE__*/wp.element.createElement("div", {
          className: "card-menu__secundario"
        }, /*#__PURE__*/wp.element.createElement("a", {
          href: props.attributes.link
        }, /*#__PURE__*/wp.element.createElement("button", {
          className: "btn"
        }, /*#__PURE__*/wp.element.createElement("svg", {
          className: "svg-icon",
          viewBox: "0 0 20 20"
        }, /*#__PURE__*/wp.element.createElement("path", {
          d: "M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"
        })), "Ver"))));
    }
});

/*
<div className="testimonios">
  <div className="testimonios-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" /></svg>
  </div>  
  <div className="testimonios-imagen">
    <img src={props.attributes.imagen} loading="lazy" />
  </div>
  <div className="testimonio-contenido">
    <h3>Ambientales en acción</h3>
    <blockquote className="contenido-comentario">
    {props.attributes.comentario}
    </blockquote>
  </div>
  <div className="testimonios-pie-card">
    <cite className="contenido-estudiante">- {props.attributes.autor} -</cite>
  </div>
</div>
*/

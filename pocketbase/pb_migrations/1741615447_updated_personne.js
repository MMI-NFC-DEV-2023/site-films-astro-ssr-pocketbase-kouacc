/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 3,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Réalisateur",
      "Scénariste",
      "Acteur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // remove field
  collection.fields.removeById("select3130199401")

  return app.save(collection)
})

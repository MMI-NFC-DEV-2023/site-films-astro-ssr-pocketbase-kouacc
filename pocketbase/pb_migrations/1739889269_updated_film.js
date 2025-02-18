/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation686394573",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "produit_par",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation4049798863",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "realise_par",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("relation686394573")

  // remove field
  collection.fields.removeById("relation4049798863")

  return app.save(collection)
})

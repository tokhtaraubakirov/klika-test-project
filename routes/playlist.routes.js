const Router = require('express');
const router = new Router();
const playlistController = require('../controller/playlist.controller');

router.get('/playlist', playlistController.getPlaylist);
router.get('/playlist/filter', playlistController.getPlaylistByFilter);
router.get('/playlist/sort', playlistController.getPlaylistAscDscOrder);

module.exports = router;
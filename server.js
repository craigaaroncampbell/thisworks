const express = require('express');
express().use(express.static(__dirname + '/'))
.listen(3000, () => process.stdout.write('up on 3000'));

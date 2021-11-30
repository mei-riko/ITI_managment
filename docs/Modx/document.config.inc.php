<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'title' => array(
        'caption' => 'Название файла',
        'type' => 'text'
    ),
    'file' => array(
        'caption' => 'Файл',
        'type' => 'file'
    ),
);
$settings['templates'] = array(
    'outerTpl' => '<ul>[+wrapper+]</ul>',
    'rowTpl' => '<li>[+text+], [+image+], [+thumb+], [+textarea+], [+date+], [+dropdown+], [+listbox+], [+listbox-multiple+], [+checkbox+], [+option+]</li>'
);
$settings['configuration'] = array(
    'enablePaste' => true,
    'enableClear' => true,
    'csvseparator' => ','
);

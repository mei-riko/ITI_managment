<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'text' => array(
        'caption' => 'Описание',
        'type' => 'text'
    ),
    'image' => array(
        'caption' => 'Иконка',
        'type' => 'image'
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

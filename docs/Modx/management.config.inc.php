<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'text' => array(
        'caption' => 'Заголовок',
        'type' => 'text'
    ),
    'thumb' => array(
        'caption' => 'Иконка',
        'type' => 'image',
    ),
    'textarea' => array(
        'caption' => 'Описание',
        'type' => 'textarea'
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

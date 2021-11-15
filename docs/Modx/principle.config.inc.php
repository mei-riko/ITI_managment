<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'text' => array(
        'caption' => 'Описание',
        'type' => 'text'
    )
);
$settings['templates'] = array(
    'outerTpl' => '<div class="list list_principle">[+wrapper+]</div>',
    'rowTpl' => '<div class="list__item list_principle__item">[+text+]</div>'
);
$settings['configuration'] = array(
    'enablePaste' => true,
    'enableClear' => true,
    'csvseparator' => ','
);
